export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
};

export function getFormattedName(date: string): string {
  const newDate = new Date(date);
  const monthNumber = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  let month;

  switch (monthNumber) {
    case 1:
      month = 'Janeiro';
      break;
    case 2:
      month = 'Fevereiro';
      break;
    case 3:
      month = 'Março';
      break;
    case 4:
      month = 'Abril';
      break;
    case 5:
      month = 'Maio';
      break;
    case 6:
      month = 'Junho';
      break;
    case 7:
      month = 'Julho';
      break;
    case 8:
      month = 'Agosto';
      break;
    case 9:
      month = 'Setembro';
      break;
    case 10:
      month = 'Outubro';
      break;
    case 11:
      month = 'Novembro';
      break;
    case 12:
      month = 'Dezembro';
  }

  return `${month?.toUpperCase()} - ${year}`;
}
