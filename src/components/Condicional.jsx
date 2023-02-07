import { useState } from "react"

function Condicional(){
const [email, setEmail] = useState()
const [userEmail, setUsarEmail] = useState()

  function enviarEmail(e){
    e.preventDefault()
    setUsarEmail(email)
    console.log(userEmail)
  }

  function limparEmail(){
    setUsarEmail('')
  }
  return(
    <div>
      <form>
        <h1>Cadastre seu email:</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)}placeholder="Digite seu email..."/>
        <button type="submit" onClick={enviarEmail}>Enviar Email</button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional