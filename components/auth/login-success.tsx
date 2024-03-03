import { CheckIcon } from "@radix-ui/react-icons";

interface LoginSuccessProps {
  message: string;
}
export const LoginSucces = ({ message }: LoginSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-green-200 px-4 py-2 rounded-md flex items-center gap-x-2 text-sm text-green-600">
      <CheckIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
