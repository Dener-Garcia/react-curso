import { useState, useEffect } from "react";
import React from "react";

const Contador = () => {

const [valorContador, setValorContador] = useState(0);

// funcao chamada pelo botao zerar, tudo esta tendo efeito no valorContador
let decrementa = () => {
    setValorContador(valorContador - 1 )
}

// usando useEffect
useEffect(()=>{
    console.log("aconteceu uma renderizacao, aqui usei um useEffect")
});

// useeffect com array de dependencias 
useEffect(()=>{
    console.log("Roda somente depois de 5 clicks")
}, [valorContador > 5 ])

// useEffect com array de dependencias VAZIO, este so roda quando a aplicacao iniciar ou seja so uma vez
useEffect(()=>{
    console.log("array de dependencias VAZIO Roda so uma vez no carregamento da DOM")
}, [])


    return (
        <fragment>
            <button onClick={()=>setValorContador(valorContador + 1)}>Click aqui</button>
            <button onClick={decrementa}>zerar</button>
            <span>{valorContador}</span>
        </fragment>
    )
}

export default Contador