export const Card = ({ children }) => {
  return (
    <div className='m-4 p-4 bg-white dark:bg-gray-700 flex flex-col rounded-lg shadow-lg'>
      {children}
    </div>
  );
};
