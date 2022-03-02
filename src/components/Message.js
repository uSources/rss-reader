export const Message = ({ message, children }) => {
  return (
    <div className='flex flex-col h-screen items-center justify-center text-pink-500 font-bold'>
      <span>{message}</span>
      {children}
    </div>
  );
};
