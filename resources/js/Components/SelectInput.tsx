import { forwardRef, InputHTMLAttributes, useRef, Ref } from "react";

export default forwardRef(function SelectInput(
  {
    className = "",
    children,
    ...props
  }: InputHTMLAttributes<HTMLSelectElement>,
  ref: Ref<HTMLSelectElement>
) {
  const inputRef = ref || useRef<HTMLSelectElement>(null);

  return (
    <select
      {...props}
      className={
        "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
        className
      }
      ref={inputRef}
    >
      {children}
    </select>
  );
});
