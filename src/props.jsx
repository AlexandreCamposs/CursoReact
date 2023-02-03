import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {
  const nome = "Maria"
  return (
    <div className="container">
      <HelloWorld />
      <SayMyName nome="Alexandre"/>
      <SayMyName nome={nome}/>
      <Pessoa
        nome="Alexandre"
        idade="30"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
