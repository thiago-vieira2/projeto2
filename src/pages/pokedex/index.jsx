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

    


   

    const limpar = () => {
        setName([])
        setPika ('')
    }

    return (
        <div className="mamae">
            <div className="tufo">
                <section>

                    <div className="select">
                    <input type="text" value={pika} onChange={e => setPika(e.target.value)} />
                    <div className="botoes">
                    <button onClick={buscar}>Buscar</button>
                    <button onClick={limpar}>limpar</button>
          
                    </div>
                    </div>

                    <div className="carlos">

                        <div className="calros">
                            {name.map(item =>
                                <Cartao item={item} />
                            )}

                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}
