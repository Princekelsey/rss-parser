export const getPageNumbers = (data: any[], pageLength: number): number[] => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / pageLength); i++) {
    pages.push(i);
  }

  return pages;
};
