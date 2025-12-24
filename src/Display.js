import { useContext, useEffect, useState } from "react";
import Button from "./components/atoms/Button";
import Dropdown from "./components/atoms/Dropdown";
import EditClip from "./components/forms/EditClip";
import { MultiContext } from "./Context";
import ClipItem from "./components/items/ClipItem";

export default function Display() {
  const multiCtx = useContext(MultiContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("copycat-theme") || "light"
  );

  const themes = ["light", "dark"];

  useEffect(() => {
    localStorage.setItem("copycat-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="body">
      <div className="inner">
        <div className="nav-custom">
          <Button icon="record" text="copycat" />
          <Dropdown icon="paint-bucket" target="themes">
            {themes.map((x) => (
              <a
                onClick={() => setTheme(x)}
                className={
                  "dropdown-item text-capitalize text-center" +
                  (theme === x ? " active" : "")
                }>
                {x}
              </a>
            ))}
          </Dropdown>
        </div>
        <div className="mt-3">
          <div className="flex">
            <div className="div-25">
              <Button
                className="w-100"
                text="New"
                icon="plus-lg"
                onClick={() => multiCtx.addClip()}
              />
              <div className="clip-scroll mt-3">
                {multiCtx.clips.map((x) => (
                  <ClipItem item={x} />
                ))}
              </div>
            </div>
            <div className="divider-y"></div>
            <div className="div-75">{multiCtx.currentClip && <EditClip />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
