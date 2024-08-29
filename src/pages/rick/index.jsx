import axios from "axios";
import { useState } from "react";
import CardRick from "../../component/rick-card";
import './index.scss'
export default function Rick() {
    const [char, setChar] = useState('');
    const [res, setRes] = useState([]);
    
    async function Buscar() {
        let url = 'https://rickandmortyapi.com/api/character/?name=' + char;
    
            let resp = await axios.get(url);
            let datas = resp.data.results; // A API retorna os dados dos personagens em `results`

            //cria um novo array para ser passado//
            let newResults = datas.map(data => ({
                name: data.name,
                gender: data.gender,
                status: data.status,
                image: data.image
            }));

            setRes(newResults); // Substitui o estado com os novos resultados

        ////
    }

    const limpar = () =>{
        setChar('')
        setRes([])
    }
 
    return (
        <div className="ame">
            <div className="tuso">
            <div className="select1">
                <input type="text" value={char} onChange={e => setChar(e.target.value)} />
                <button onClick={Buscar}>Buscar</button>
                <button onClick={limpar}>Limpar</button>
            </div>

            <div className="res">

                
                {res.map((item, index) => (
                    //index significa que vai mostrar todos os indices do array//
                    <div key={index}>
                        
                        <CardRick item = {item} />

                    </div>
                ))}

                
            </div>
            </div>
        </div>
    )
}
