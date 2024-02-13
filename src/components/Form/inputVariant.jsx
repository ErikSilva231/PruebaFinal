/* eslint-disable react/prop-types */
export const InputVariant = ({ num, handleChangeVariant, classVariant }) => {
  const HandleChange = (event) => {
    handleChangeVariant(event);
  };

  return (
    <div className="input-group">
      <input
        name={`variant-${num}`}
        type="text"
        className={classVariant}
        placeholder="Variante"
        onChange={HandleChange}
      />
      <input
        name={`price-${num}`}
        type="number"
        className={classVariant}
        placeholder="precio"
        onChange={HandleChange}
      />
      <input
        name={`stock-${num}`}
        type="number"
        className={classVariant}
        placeholder="Stock"
        onChange={HandleChange}
      />
    </div>
  );
};
