/* eslint-disable react/prop-types */
export const InputVariant = ({ num, handleChangeVariant }) => {
  const HandleChange = (event) => {
    handleChangeVariant(event);
  };

  return (
    <div className="input-group">
      <input
        name={`variant-${num}`}
        type="text"
        className={"form-control"}
        placeholder="Variante"
        onChange={HandleChange}
      />
      <input
        name={`price-${num}`}
        type="number"
        className={"form-control"}
        placeholder="precio"
        onChange={HandleChange}
      />
      <input
        name={`stock-${num}`}
        type="number"
        className={"form-control"}
        placeholder="Stock"
        onChange={HandleChange}
      />
    </div>
  );
};
