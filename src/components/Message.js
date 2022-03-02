import { Label } from './Label';

export const Message = ({ message, children }) => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <Label>{message}</Label>
      {children}
    </div>
  );
};
