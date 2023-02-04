import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
          <Item marca="Ferrari" ano_lancamento={1985}/>
          <Item marca="Fiat" ano_lancamento={1956}/>
          <Item marca="Renault"/>
          <Item marca="Chevrolet" ano_lancamento={1563}/>
      </ul>
    </>
  );
}

export default List;