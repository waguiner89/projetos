import { useState } from "react"
import styles from "./button.module.css"

export default function MyCounter(){

    const [contador, setContador] = useState(0)

    function aumentar(){
        setContador(contador + 1)   
    }

    function diminuir(){
        setContador(contador - 1)
    }

    if (contador > 15){
        return(
            <div>
                <h1></h1>
                <h1>Valor muito alto, diminua</h1>
                <h3>{contador}</h3>
                <button onClick={aumentar}>Clique para aumentar</button>
                <button onClick={diminuir}>Clique para diminuir</button>
            </div>
        )
    }    

    return (
        <div>
            <h1>Meu contador</h1>
            <h3>{contador}</h3>
            <button onClick={aumentar}>Clique para aumentar</button>
            <button className={styles.myButton} onClick={diminuir}>Clique para diminuir</button>

        </div>
    )
}