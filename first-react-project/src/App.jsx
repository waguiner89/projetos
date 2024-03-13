import MyComponent from "./components/MyComponent"
import MyCounter from "./components/MyCounter"
import MyData from "./components/MyData"
import MySearchList from "./components/MySearchList"
import MyList from "./components/Mylist"

export default function App (){
    return (
        <div>
            <MyComponent/>
            <MyCounter/>

            <h1>Minhas listas no React</h1>
            <MyList/>

            <h1>Minha pesquisa</h1>
            <MySearchList/>

            <h1>Minha busca de dados</h1>
            <MyData/>
        </div>
    )
}