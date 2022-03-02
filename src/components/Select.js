export const Select = ({ value, onChange, name, options }) => {
  return (
    <select
      className='p-2 rounded-lg caret-pink-500 text-black dark:bg-gray-900 dark:text-white'
      name={name}
      value={value}
      data-testid={name}
      onChange={onChange}
    >
      {options &&
        options.map((option) => {
          return <option value={option.value}>{option.key}</option>;
        })}
    </select>
  );
};
