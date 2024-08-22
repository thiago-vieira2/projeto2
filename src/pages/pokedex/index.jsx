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
            image: datas.sprites.front_default
        };


        setName([...name, pokemonData]);
    }

    const limpar = () => {
        setName([])
    }

    return (
        <div className="mamae">
            <div className="tufo">
                <section>


                    <input type="text" value={pika} onChange={e => setPika(e.target.value)} />
                    <button onClick={buscar}>Buscar</button>
                    <button onClick={limpar}>limpar</button>

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
