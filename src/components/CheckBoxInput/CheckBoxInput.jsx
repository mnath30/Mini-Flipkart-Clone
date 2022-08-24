const CheckBoxInput = ({
  item,
  category,
  changeHandler,
  type,
  payload,
  presentInlist,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        id={item}
        name={category}
        value={item}
        onChange={() => changeHandler({ type, payload })}
        checked={presentInlist}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

export { CheckBoxInput };
