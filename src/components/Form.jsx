import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} foi cadastrado com a senha ${passoword}`)
    // console.log('Cadastrou o usuario');
  }

  const [name, setName] = useState();
  const [passoword, setPassoword] = useState();

  return (
    <div>
      <h1>Meu cadastro!</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" id="name" placeholder="Digite seu nome" onChange={(e)=>{ setName(e.target.value)}} />
          <div>
            <label htmlFor="passoword">Senha: </label>
            <input type="passoword" id="passoword" placeholder="Digite sua senha" onChange={(e)=>{setPassoword(e.target.value)}}/>
          </div>
          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
