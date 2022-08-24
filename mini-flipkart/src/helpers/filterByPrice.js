const filterByPrice = (prodList, price) => {
  const updatedList = prodList.filter(
    (item) => Number(item.price) <= Number(price)
  );
  console.log(updatedList);
  return updatedList;
};

export { filterByPrice };
