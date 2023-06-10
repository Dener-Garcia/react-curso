# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Life Cycle

Todo componente em React tem 3 estagios

- Mounting
    Quando um elemento foi colocado na DOM

- Updating
    Quando um componente foi atualizado, por exemplo quando ocorre mudancas nas propriedades de um componentes ou mudancas no estado de um componente

- Unmounting
    Quando um componente for removido da DOM



# Trabalhando com Fetch em React lifecycle

    Para esse exercicio vamos criar um arquivo .json dentro de public para simular como uma API devolveira um arquivo.

    Tudo que for colocado dentro de public podemos acessar como imagens arquivos de configuracao entre outras coisas

# Hooks

Sempre que vamos trabalhar com hooks devemos importalo primeiro.

## useState - pasta src/components/forms

Com ele podemos manipular o estado (dados de um componente, ex. formularios) de um componente, muito usado com eventos com onChange.

> Anatomia do useState SEM valor inicial:

    const [nomeUsuario, setNomeUsuario] = useState()
- nomeAtributo = nome do que eu vou tratar ou resgatar o que eu ler
- setAtributo = O que eu vou alterar, o que eu vou salvar, o que eu vou atribuir
- useState() = nome do hook, dentro do (posso colocar valores iniciais)

> Anatomia do useState COM valor inicial:

    const [idade, setIdade] = useState(0)

Como mencionei num formulario vamos poder salvar os dados inseridos no form para depois mandar para nosso backend

## useEffect - pasta src/components/contador

Utilizacao principal eh fazer algo com base na nossa açao, a gente inicia ele numa funcao anonima.
Geralmente queremos controlar quando sera utilizado quem esta dentro do useEffect, atravez de um array de dependencias

> Anatomia de uma funcao com useEffect onde ela altera o valor de um useState:

    const [valorContador, setValorContador] = useState(0);
    
    useEffect ( () => {
    console.log("aconteceu uma renderizacao, aqui usei um useEffect")
    });

> Usando no codigo, a cada click ira atualizar e mostrar o valor incrementando 1 no span onde apontamos para o valorContador

    <button onClick= { () = > setValorContador(valorContador + 1)}>Click aqui</button>
    
    <span>{valorContador}</span>

### useEffect com array de dependencia

> Anatomia de uma funcao com useEffect onde ela altera o valor de um useState apos uma condicao de 5 clicks:

    const [valorContador, setValorContador] = useState(0);
    
    useEffect(()=>{
    console.log("Roda somente depois de 5 clicks")
    }, [valorContador > 5 ])

> Usando no codigo, apos o valorContador ser maior que 5 ele ira executar a funcao que esta dentro do useEffect

    <button onClick= { () = > setValorContador(valorContador + 1)}>Click aqui</button>
    
    <span>{valorContador}</span>

### useEffect com array de dependencia VAZIO

> Anatomia de uma funcao com useEffect com dependencia de array vazio, onde ele so roda no carregamento da pagina sendo esta sua caracteristica principal

    useEffect(()=>{
    console.log("array de dependencias VAZIO Roda so uma vez no carregamento da DOM")
    }, [])


    