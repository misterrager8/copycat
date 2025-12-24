export default function Textarea({
  value,
  onChange,
  rows = 10,
  placeholder,
  className = "",
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={onChange}
      autoComplete="off"
      className={className + " form-control"}></textarea>
  );
}
