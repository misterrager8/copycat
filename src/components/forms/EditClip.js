import { useContext, useEffect, useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import { MultiContext } from "../../Context";

export default function EditClip() {
  const multiCtx = useContext(MultiContext);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeName = (e) => setName(e.target.value);

  const [deleting, setDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setContent(multiCtx.currentClip?.content);
    setName(multiCtx.currentClip?.name);
    setDeleting(false);
  }, [multiCtx.currentClip]);

  const isChanged = () => multiCtx.currentClip?.content !== content;

  const copyClip = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div>
      <form
        className="input-group-custom mb-3"
        onSubmit={(e) => multiCtx.renameClip(e, name)}>
        <span className="input-group-text">Name</span>
        <Input className="fw-bold" value={name} onChange={onChangeName} />
      </form>
      <div
        className="input-group-custom mb-3 font-monospace"
        style={{ flexDirection: "column" }}>
        <div className="d-flex mb-1">
          {content !== "" && (
            <Button
              border={false}
              onClick={() => copyClip()}
              icon={copied ? "check-lg" : "clipboard"}
            />
          )}
          <span className="input-group-text ps-2">Content</span>
        </div>
        <Textarea value={content} onChange={onChangeContent} />
      </div>
      <div className="input-group-custom mb-3">
        <span className="input-group-text">Category</span>
        <Input />
      </div>
      <Button
        // disabled={changed}
        onClick={() => multiCtx.editClip(content)}
        icon="pencil"
        className={"w-100" + (!isChanged() ? " invisible" : "")}
        text="Edit Clip"
      />
      <div className="divider-x"></div>
      <Button
        onClick={() => setDeleting(!deleting)}
        icon="trash2"
        className="w-100 red"
        text="Delete Clip"
      />
      {deleting && (
        <Button
          onClick={() => multiCtx.deleteClip()}
          icon="question-lg"
          className="red w-100 mt-2"
        />
      )}
    </div>
  );
}
