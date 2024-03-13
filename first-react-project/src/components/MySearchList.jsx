import { useEffect, useState } from "react"

const minhaListaPesquisa = [
    {id:"4", value: "Mouse"}, 
    {id:"5", value: "Teclado"},
    {id:"6", value: "Monitor"}
]

export default function MySearchList(){
    const [produto, setProduto] = useState(minhaListaPesquisa)
    const [pesquisa, setPesquisa] = useState("")

    useEffect(() => {

            if(pesquisa){                
                const novaLista = minhaListaPesquisa.filter((item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProduto(novaLista)
                } else {
                    setProduto(minhaListaPesquisa)
                }
        },[pesquisa])

    return (
        <div>
            <h2>Efeitos colaterais</h2>
            <input 
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquise aqui.."></input>
            {produto.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}