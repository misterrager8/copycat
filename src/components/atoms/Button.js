export default function Button({
  text,
  icon,
  type_ = "button",
  border = true,
  active = false,
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <button
      disabled={disabled}
      type={type_}
      onClick={onClick}
      className={
        "btn " +
        className +
        (border ? "" : " border-0") +
        (active ? " active" : "")
      }>
      {icon && <i className={"bi bi-" + icon + (text ? " me-2" : "")}></i>}
      {text && <span>{text}</span>}
    </button>
  );
}
