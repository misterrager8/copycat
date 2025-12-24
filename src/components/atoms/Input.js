export default function Input({
  value,
  onChange,
  type_ = "text",
  placeholder,
  className = "",
}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type_}
      autoComplete="off"
      className={className + " form-control"}
    />
  );
}
