import React from 'react';
import ReactDOM from 'react-dom';
import TodaLista from './components/TodaLista';

ReactDOM.render(
  <TodaLista pedrosos={['Comprar pão', 'Fazer arroz', 'Comer pudim']}/>,
  document.getElementById('root')
);
