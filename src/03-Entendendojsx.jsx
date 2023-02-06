import HelloWorld from './components/HelloWorld';
import Evento from './components/Evento';
import Form from './components/Form';


function AppTest(){
  return(
    <div className='App'>
      <h1>Testando eventos</h1>
      <Evento/>
      <Form/>
    </div>
  )
}
export default AppTest;
