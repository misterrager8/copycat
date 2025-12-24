import { useContext } from "react";
import { MultiContext } from "../../Context";

export default function ClipItem({ item, className = "" }) {
  const multiCtx = useContext(MultiContext);

  return (
    <div
      className={
        className +
        " clip-item" +
        (multiCtx.currentClip?.id === item.id ? " active" : "")
      }>
      <div
        className="text-truncate"
        onClick={() => multiCtx.setCurrentClip(item)}>
        {item.name}
      </div>
    </div>
  );
}
