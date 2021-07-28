export const removeDuplicates = (data) => {
  return data.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
};
