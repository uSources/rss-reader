export const Label = ({ children, className }) => {
  return (
    <span className={'text-pink-500 font-bold ' + className}>{children}</span>
  );
};
