export default function InputErrorMessage({ message }: { message: string }) {
  return <p className="text-destructive text-sm">{message}</p>;
}
