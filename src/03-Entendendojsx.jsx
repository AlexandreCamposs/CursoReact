import HelloWorld from './components/HelloWorld';
import Evento from './components/Evento';
import Form from './components/Form';


function AppTest() {
  const name = 'alexandre';
  const newName = name.toLocaleUpperCase();

  function sum(a, b) {
    return a + b;
  }
  const url = 'https://via.placeholder.com/150';

  return (
    <div className="container">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="" />

      <h1>Testando eventos.</h1>
      {/* <Evento /> */}
       <Form/>
    </div>
  );
}
export default AppTest;
