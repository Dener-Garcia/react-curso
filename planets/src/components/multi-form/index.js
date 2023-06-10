import React from "react";
import { useState } from "react";
import "./style.css"

const MultForm = (props) => {

    const cadastrarCores = (e) => {

        console.log("Cor cadastrada")

        console.log(idade)
    }
    
    // para controlar multi input vamos ter um state chamado filds em vez e um para cada input e vamos inicializar o useState em forma de um objeto javascript com as propriedades que queremos name, password

    const [fields, setFields ] = useState({
        name: "" 

    })

    // criamos um handle generico, pegamos todos os elementos em seu estado anterior pelo spreed ...fields, todo campo no html colocamos um name e seu valor para quando passamos os dados
    // entao estamos pegando o name do input e coloca nele o value da tag com essa linha       [e.currentTarget.name]: e.currentTarget.value
    const handleChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })


    const handleSubmit = event => {
        props.addCores({fields})
        event.preventDefault()
    }




    const [idade, setIdade] = useState(0)

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="d-flex-cl">
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" name="name" placeholder="Digite seu nome" value={fields.name}
                onChange={handleChange}
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

export default MultForm