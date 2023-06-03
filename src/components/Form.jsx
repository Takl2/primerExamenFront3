import React, { useState } from "react";
import Card from "./Card";

function Form() {
  const [estilo, setEstilo] = useState("");
  const [banda, setBanda] = useState("");
  const [error, setError] = useState(false);
  const [submited, setSubmited] = useState(false);

  const handleSudmit = (e) => {
    console.log("se envio");
    e.preventDefault();
    if (estilo.trim().length < 3) {
      setError(true);
      return;
    }
    if (banda.length < 6) {
      setError(true);
      return;
    }
    setSubmited(true);
    setError();
  };

  const handleChangeEstilo = (e) => {
    setEstilo(e.target.value);
  };

  const handleChangeBanda = (e) => {
    setBanda(e.target.value);
  };


  return (
    <>
      <h1>QUE QUIERE ESCUCHAR HOY?</h1>
      <form onSubmit={handleSudmit}>
        <label htmlFor="Estilo">
          Ingrese el estilo que quiere escuchar:
          <input
            type="text"
            id="estilo"
            value={estilo}
            placeholder="Estilo"
            onChange={handleChangeEstilo}
            disabled={submited}
          ></input>
        </label>
        <br />
        <label htmlFor="Banda">
          Ingrese la banda que desea escuchar:
          <input
            type="text"
            id="banda"
            value={banda}
            placeholder="Banda"
            onChange={handleChangeBanda}
            disabled={submited}
          />
        </label>
        <br />
        <button style={{ color: "black" }} type="submit">
          Enviar
        </button>
      </form>
      {error && <p>"Por favor chequea que la información sea correcta"</p>}
      <div>
        {submited && <Card estilo={estilo} banda={banda} />}
      </div>
    </>
  );
}

export default Form;
