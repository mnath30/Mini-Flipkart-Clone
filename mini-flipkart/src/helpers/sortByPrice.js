const sortByPrice = (prodList, sortOrder) => {
  if (sortOrder) {
    if (sortOrder === "ascending") {
      return prodList.sort(
        (item1, item2) => Number(item1.price) - Number(item2.price)
      );
    } else {
      return prodList.sort(
        (item1, item2) => Number(item2.price) - Number(item1.price)
      );
    }
  }
  return prodList;
};

export { sortByPrice };
