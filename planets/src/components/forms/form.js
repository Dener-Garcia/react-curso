import React from "react";
import { useState } from "react";
import "./style.css"

const Formulario = () => {

    const cadastrarPlaneta = (e) => {
        e.preventDefault()
        console.log("Planeta cadastrado")
        console.log(nomeUsuario)
        console.log(idade)
    }
    
    // trabalhando com hook useState
    const [nomeUsuario, setNomeUsuario] = useState()
    const [idade, setIdade] = useState(0)

    return(
        <div>
            <form onSubmit={cadastrarPlaneta}>
            <div className="d-flex-cl">
                <input type="text" placeholder="Digite seu nome"
                onChange={(g)=> setNomeUsuario(g.target.value)}
                />
                <input type="password" placeholder="Sua senha"/>
                <input type="number" placeholder="Qual sua idade" value={idade}
                onChange={(g)=> setIdade(g.target.value)}
                />
                <input type="submit" value="cadastrar"/>
                </div> 
            </form>
        </div>
    )
}

export default Formulario