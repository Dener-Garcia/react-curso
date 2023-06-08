# trabalhando com React

## Criando seu projeto

Neste curso utilizamos o famoso create react app, porém hoje não é mais utilizado devido exister melhores opções como o Vite ou o próprio nextjs.

    npx create-react-app nome_do_projeto

## Conhecendo a estrutura de pastas do create react app

- node_mudules
    - aqui ficam as bibliotecas do node

- public
   -  arquivos p[ublicos do site como o index.html favicon entre outros

- src
    - elementos principais do react como componentes, rotas e outras coisas 
    - Crie uma pasta chamada components

## Conhecendo os arquivos de um projeto react

- package.json
    - todas as bibliotecas e configurações do projeto ficam aqui, assim como os scripts de start, build entre outros

## Organizando seu projeto React

Normalmente quando criamos um projeto react ele vem poluido com arquivos que não vamos usar, então nós apagamos esses arquivos.

- App.css
- logo.svg

## Sobre componentes

Criamos componentes em forma de função e chamamos ele com uma tag parecido com uma tag de HTML.

### Estruturada de um componente

    import React from "react";

    function HelloWorld(){
    return <h1>Hello World com React</h1>;
    }
  
    export default HelloWorld

> Lembre-se que você pode usar uma arrow function para criar componentes.

    import React from "react";

    const HelloWorld = () => {
    return <h1>Hello World com React</h1>;
    }
  
    export default HelloWorld

### Estrutura de um componente de classe

    import React from "react";

    class HelloClass extends React.Component{
    render () {
        return <h2>Hello world com classe components</h2>
    }
    }

    export default HelloClass 


### Usando seu componente e injetando ele no app.js, lembrando que o app.js está sendo injetado na div root pelo index.js


    import HelloWorld from "./components/hello";


    function App() {
    return (
        <div>
        <HelloWorld/>
        </div>        
    );
    }

    export default App;

### Agrupando elementos dentro de um componente

No React não podemos retornar vários elemeentos dentro de um componente só, não posso ter um titulo um parágrafo ou uma imagem dentro de um único componente.
Pra resolver isso usamos uma div ou quando estamos criando o elemento colocamos entre chaves o fragment, a principal diferença entre eles é que o fragment nao gera nada na DOM enquanto a div sim

> Exemplo de um componente com multi elementos de html agrupados por div

    import React from "react"

    const Planet = () => {
    return (
        <div>
            <h3>Mercúrio</h3>
            <p>Mercúrio, o planeta mais próximo do Sol, é um mundo rochoso com temperaturas extremas e uma superfície repleta de crateras e falhas, oferecendo uma fascinante oportunidade de exploração.</p>
            <img src="linkda imagem"></img>
        </div>
    )
    }

    export default Planet

> Exemplo de uso do Fragment agrupei um h3 com um componente

    import React, {fragment} from "react";
    import Planet from "./planet";


    const PlanetList = () => {
    return (
        <fragment>
            <h2>Nossos Planetas</h2>
            <Planet/>        
        </fragment>
    ) 
    }

    export default PlanetList

# proxima aula 252