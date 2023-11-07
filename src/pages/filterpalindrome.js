import React, { useState } from 'react';

const FilterPalindrome = ()=> { 
  const palavras = [
    'arara',
    'amor',
    'asa',
    'longo',
    'ele',
    'dinossáuro',
    'esse',
    'peppa',
    'mamam',
    'tartaruga',
    'bandolin',
    'matam',
    'desodorante',
    'mundo',
    'metem',
    'terra',
    'água',
    'mirim',
    'fogo',
    'sopapos',
  ]
  const [palindromos, setPalindromos] = useState([]);
  
  const filtrarPalindromos = () => {
    const palindromosEncontrados = palavras.filter(palavra => {
      const palavraReversa = palavra.split('').reverse().join('');
      return palavra === palavraReversa;
    });
    setPalindromos(palindromosEncontrados);
  }
    
   return (
    <div>
      <h1 className='titulo'>Palavras:</h1>
      <ul>
        {palavras.map((palavra, index) => (
          <li key={index}>{palavra}</li>
        ))}
      </ul>

      <button onClick= {filtrarPalindromos} >Filtrar Palíndromos</button>

      <h2>Palíndromos:</h2>
      <ul>
        {palindromos.map((palindromo, index) => (
          <li key={index}>{palindromo}</li>
        ))}
      </ul>
    </div>
  );
        }

        
  export default FilterPalindrome