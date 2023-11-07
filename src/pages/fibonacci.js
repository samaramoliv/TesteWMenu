import React, { useState } from 'react';

const FibonacciSequence = ()=> {
  const maximo = 100;
  const [sequence, setSequence] = useState([0, 1]);

  // Calcula a sequência de Fibonacci
  const calcularSequencia = () => {
    const novaSequencia = [0, 1];
    let a = 0;
    let b = 1;
    while (a + b <= maximo) {
      const proximoNumero = a + b;
      novaSequencia.push(proximoNumero);
      a = b;
      b = proximoNumero;
    }
    setSequence(novaSequencia);
  };

  return (
    <div>
      <h1>Sequência de Fibonacci até {maximo}:</h1>
      <button onClick={calcularSequencia}>Calcular</button>
      <ul>
        {sequence.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default FibonacciSequence