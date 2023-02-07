import './index.css'
import OutraLista from './components/OutraLista';

function AppTest(){

  const meusItens = ['react', 'nodeJs', 'angular']

  return(
    <div className='App'>
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  )
}
export default AppTest;
