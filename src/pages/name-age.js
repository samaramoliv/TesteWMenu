import React, { useState } from 'react';

function App() {
  const pessoas = [
    { id: 1, nome: 'Liz', idade: 2 },
    { id: 2, nome: 'Thaís', idade: 32 },
    { id: 3, nome: 'Jonathan', idade: 30 },
    { id: 4, nome: 'Thainá', idade: 29 },
    { id: 5, nome: 'Fabiano', idade: 45 },
  ];

  const [pessoasFiltradas, setPessoasFiltradas] = useState(pessoas);

  const filtrarNomeEIdade = () => {
    const pessoasFiltradas = pessoas.map(pessoa => ({
      nome: pessoa.nome,
      idade: pessoa.idade,
    }));
    setPessoasFiltradas(pessoasFiltradas);
  };

  return (
    <div>
      
      <div>
        {pessoasFiltradas.map((pessoa, index) => (
          <p key={index}>
            {pessoa.nome} - {pessoa.idade}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
