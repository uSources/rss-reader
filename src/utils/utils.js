export const sanatizeString = (text) => {
  const regExp = /^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g;
  return text?.replace(regExp, '');
};

export const getCategories = (nodeList) => {
  return [...nodeList].map((item) => {
    return sanatizeString(item?.innerHTML);
  });
};

export const orderByKey = ({ key, array }) => {
  return [...array].sort((a, b) => {
    let priority = 0;
    const aValue = a[key];
    const bValue = b[key];
    if (typeof aValue === 'string') {
      priority = aValue.localeCompare(bValue);
    } else if (typeof aValue === 'object') {
      priority = bValue - aValue;
    } else if (typeof aValue === 'number') {
      priority = aValue - bValue;
    }
    return priority;
  });
};
