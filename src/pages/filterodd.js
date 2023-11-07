import React, { useState } from 'react';


    const FilterOddNumbers = ()=> {
    const [numeros, setNumeros] = useState(Array.from({ length: 31 }, (_, index) => index));
    const [numerosFiltrados, setNumerosFiltrados] = useState([]);
  
    const filtrarImpares = () => {
      const impares = numeros.filter(numero => numero % 2 !== 0);
      setNumerosFiltrados(impares);
    };
 
    return (
      <div>
        <h1 className='titulo'>Números de 0 a 30:</h1>
        <ul>
          {numeros.map(numero => (
            <li key={numero}>{numero}</li>
          ))}
        </ul>
  
        <button onClick={filtrarImpares}>Filtrar Ímpares</button>
  
        <h2>Números Ímpares:</h2>
        <ul>
          {numerosFiltrados.map(numero => (
            <li key={numero}>{numero}</li>
          ))}
        </ul>
      </div>
    );
  }
    

 export default FilterOddNumbers