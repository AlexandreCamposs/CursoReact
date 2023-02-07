import { useState } from 'react';
import './index.css';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function AppTest() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}
export default AppTest;
