interface IErrorMsgInputProps {
  error: string | undefined;
}
export const ErrorMsgInput = ({ error }: IErrorMsgInputProps) => {
  return (
    <>{error && <div className="text-xs animate-fadeIn text-red absolute bottom-[-15px] text-left">{error}</div>}</>
  );
};
