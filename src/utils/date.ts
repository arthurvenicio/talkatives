export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
};
