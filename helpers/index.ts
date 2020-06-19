export const formatDate = (date: Date, format: string): string => {
  let newDate;

  if (format === 'dashed') {
    newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  if (format === 'dotted') {
    newDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }

  return newDate;
};

export const getUniqueStr = (): string =>
  (new Date().getTime() / Math.random()).toString(16).replace('.', '');

export const num2str = (count: number, textArr: string[]): string => {
  count = Math.abs(count) % 100;
  const count1 = count % 10;

  return count > 10 && count < 20
    ? textArr[2]
    : count1 > 1 && count1 < 5
    ? textArr[1]
    : count1 == 1
    ? textArr[0]
    : textArr[2];
};
