import { useEffect, useState } from "react"


export default function MyData (){

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {

        async function buscarDados() {
            const resultado = await fetch("https://jsonplaceholder.typicode.com/todos")
            const resultadoFinal = await resultado.json()
            return resultadoFinal
        }

        buscarDados().then(res => setTarefas(res))

    }, [])

    return (
        <div>
            <ol>
                {tarefas.map((tarefas) => {
                    return (
                        <li key={tarefas.id}>{tarefas.title}</li>
                    )
                })}
            </ol>
        </div>
    )
}