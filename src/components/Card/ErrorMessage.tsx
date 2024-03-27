type ErrorMessageProps = {
  message: string | null;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className={`w-80 text-red-600 dark:text-red-500 text-sm text-center rounded my-2
    ${message ? "h-10 opacity-100" : "h-4 opacity-0"} transition-all duration-700`}
    >
      {message}
    </div>
  );
}
