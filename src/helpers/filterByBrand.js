const filterByBrand = (prodList, brand) => {
  console.log(prodList, brand);
  let updatedList = [];
  if (brand.length !== 0) {
    updatedList = prodList.filter((item) => brand.includes(item.brand));
    console.log(updatedList);
    return updatedList;
  }
  console.log(updatedList);
  return prodList;
};

export { filterByBrand };
