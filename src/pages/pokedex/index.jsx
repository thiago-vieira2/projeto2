import { useState } from "react";
import axios from "axios";
import Cartao from "../../component";
import "./index.scss"
export default function Poke() {
    const [pika, setPika] = useState('');
    const [name, setName] = useState([]);

    async function buscar() {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pika;
        let respo = await axios.get(url);

        let datas = respo.data;
        let pokemonData = {
            name: datas.name,
            height: datas.height,
            image: datas.sprites.front_default,
            types: datas.types.map(typeInfo => typeInfo.type.name),
            abilities: datas.abilities.map(abilityInfo => abilityInfo.ability.name),
         
            
        };


        setName([...name, pokemonData]);
    }

    const apagar = (index) => {
        const nova = name.filter ((_,i) => i !== index)
        setName(nova)
    }

    


   

    const limpar = () => {
        setName([])
        setPika ('')
    }

    return (
        <div className="mamae">
            <div className="tufo">
                <section>

                    <div className="select">
                    <input type="text" value={pika} placeholder="digite o numero ou nome do pokemon" onChange={e => setPika(e.target.value)} />
                    <div className="botoes">
                    <button className="buscar" onClick={buscar}>Buscar</button>
                    <button onClick={limpar}>limpar</button>
          
                    </div>
                    </div>

                    <div className="carlos">

                        <div className="calros">
                            {name.map((item,index) =>

                            <div className="ler">
                                <Cartao item={item} />
                                <button onClick={() => apagar(index)}>limpar</button>
                                </div>
                            )}

                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}
