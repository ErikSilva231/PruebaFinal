export const InputVariant = (num) => {
  return (
    <div className="input-group">
      <input
        name={`variant${num}`}
        type="text"
        className={"form-control"}
        placeholder="Variante"
      />
      <input
        name={`price${num}`}
        type="number"
        className={"form-control"}
        placeholder="precio"
      />
      <input
        name={`stock${num}`}
        type="number"
        className={"form-control"}
        placeholder="Stock"
      />
    </div>
  );
};
