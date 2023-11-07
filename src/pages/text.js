import React from 'react';

const TextComp = ()=> {
  const pessoas = [
    { id: 1, nome: 'Liz', idade: 2 },
    { id: 2, nome: 'Thaís', idade: 32 },
    { id: 3, nome: 'Jonathan', idade: 30 },
    { id: 4, nome: 'Thainá', idade: 29 },
    { id: 5, nome: 'Fabiano', idade: 45 },
  ];

  const elementosH3 = pessoas.map(pessoa => (
    <h3 key={pessoa.id}>{pessoa.id} - {pessoa.nome} - {pessoa.idade}</h3>
  ));

  return (
    <div>
      {elementosH3}
    </div>
  );
}

export default TextComp
