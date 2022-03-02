import { Label } from './Label';

export const FieldError = ({ message }) => {
  return <Label className='text-red-500'>{message}</Label>;
};
