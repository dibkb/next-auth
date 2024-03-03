import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface LoginErrorProps {
  message: string;
}
export const LoginError = ({ message }: LoginErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-red-200 px-4 py-2 rounded-md flex items-center gap-x-2 text-sm text-red-600">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
