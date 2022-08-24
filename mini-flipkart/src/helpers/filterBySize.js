const filterBySize = (prodList, sizes) => {
  let updatedList = [];
  if (sizes.length !== 0) {
    updatedList = prodList.filter((item) =>
      sizes.includes(item.size.toUpperCase())
    );
    console.log(updatedList);
    return updatedList;
  }
  console.log(updatedList);
  return prodList;
};

export { filterBySize };
