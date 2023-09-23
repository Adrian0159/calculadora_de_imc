import { useState } from "react";
import "./main.css";

function Formulario() {
  let [peso, setPeso] = useState(0);
  let [altura, setAltura] = useState(0);
  const alturaAoQuadrado = altura * altura;
  const imc = peso / alturaAoQuadrado;
  const IMC = imc.toFixed(2);

  const mostraIMC = () => {
    if (peso > 0 && altura > 0) {
      return <p>IMC = {IMC}</p>;
    }
  };

  const mostraResultado = () => {
    if (peso > 0 && altura > 0) {
      if (imc <= 18.5) {
        return <p>você está abaixo do peso</p>;
      } else if (imc >= 18.6 && imc < 25) {
        return <p>Você está com o peso ideal (parabéns)</p>;
      } else if (imc >= 25 && imc < 30) {
        return <p>Você está acima peso</p>;
      } else if (imc >= 30 && imc < 35) {
        return <p>Você está com obesidade Grau I</p>;
      } else if (imc >= 35 && imc < 40) {
        return <p>Você está com o obesidade Grau II (severa)</p>;
      } else if (imc >= 40) {
        return <p>Você está com o obesidade Grau III (mórbida)</p>;
      }
    }
  };

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <form>
        <input
          type="number"
          placeholder="Peso (kg)"
          onChange={(evento) => setPeso(parseFloat(evento.target.value))}
        />
        <input
          type="number"
          placeholder="Altura (m)"
          onChange={(evento) => setAltura(parseFloat(evento.target.value))}
        />

        {mostraResultado()}
        {mostraIMC()}
      </form>
    </>
  );
}

export default Formulario;
