const filterByGender = (prodList, gend) => {
  console.log(prodList, gend);
  let updatedList = [];
  if (gend.length !== 0) {
    updatedList = prodList.filter((item) => gend.includes(item.gender));
    return updatedList;
  }
  return prodList;
};

export { filterByGender };
