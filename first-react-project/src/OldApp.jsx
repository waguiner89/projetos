import MyComponent from "./components/MyComponent"

export default function App() {

  return (
    <div>
      <h1>Meu primeiro Projeto React</h1>
      <MyComponent/>
      <MyButton content="Clique Aqui!"/>
      <MyButton content="Depois disso clique Aqui!"/>
      <MyButton content="E então Clique Aqui de novo!"/>
    </div>
  )
}

function MyButton(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <button>{props.content}</button>
  )
}
