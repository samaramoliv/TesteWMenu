import React, { useState } from 'react';

const FilterJ = ()=> {
  const objeto = {
    jason: "Jason",
    thais: "Thaís",
    liz: "Liz",
    jennei: "Jennei",
    jenyffer: "Jennyfer",
    joao: "João",
    bola: "Bola",
    gato: "Gato",
    jaguar: "Jaguar"
  };

  const [objetoFiltrado, setObjetoFiltrado] = useState({});

  const filtrarPropriedades = () => {
    const objetoFiltrado = {};
    for (const chave in objeto) {
      if (chave.startsWith('j')) {
        objetoFiltrado[chave] = objeto[chave];
      }
    }
    setObjetoFiltrado(objetoFiltrado);
  };

  return (
    <div>
      <h1 className='titulo'>Objeto Original:</h1>
      <pre>{JSON.stringify(objeto, null, 2)}</pre>

      <button onClick={filtrarPropriedades}>Filtrar Propriedades</button>

      <h1 className='titulo'>Objeto Filtrado:</h1>
      <pre>{JSON.stringify(objetoFiltrado, null, 2)}</pre>
    </div>
  );
}

export default FilterJ
