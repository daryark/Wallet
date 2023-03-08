export const getDate = str => {
  const date = new Date(str);
  const d = date.getDate();
  const m = date.getMonth() + 1;

  const day = String(d).padStart(2, '0');
  const month = String(m).padStart(2, '0');
  const year = date.getFullYear().toString().slice(2);

  const searchedDate = `${day}.${month}.${year}`;

  return searchedDate;
};
