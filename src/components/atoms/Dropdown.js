export default function Dropdown({
  children,
  target,
  icon,
  text,
  border = true,
  showCaret = true,
  classNameBtn = "",
  classNameMenu = "",
}) {
  return (
    <>
      <a
        data-bs-toggle="dropdown"
        data-bs-target={"#" + target}
        className={
          classNameBtn +
          " btn" +
          (showCaret ? " dropdown-toggle" : "") +
          (border ? "" : " border-0")
        }>
        {icon && <i className={"bi bi-" + icon + (text ? " me-2" : "")}></i>}
        {text && <span>{text}</span>}
      </a>
      <div id={target} className={classNameMenu + " dropdown-menu"}>
        {children}
      </div>
    </>
  );
}
