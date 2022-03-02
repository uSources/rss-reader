export const Button = ({ value, type }) => {
  return (
    <button
      className='my-4 block w-52 bg-pink-200 dark:bg-pink-500 p-2 rounded-xl hover:shadow-lg'
      type={type}
    >
      {value}
    </button>
  );
};
