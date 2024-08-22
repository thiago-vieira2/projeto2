import { useState } from "react"
import "./index.scss"

export default function Calc() {

    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    const addInput = (value) => {
        setInput(input + value)
    };

    const resultado = () => {
        const erro = input.replace(/[^-()\d/*+.]/g, '');
        const total = Function(`'use strict'; return (${erro})`)();
        setResult(total);
    };
    const limpar = () => {
        setInput('')
        setResult('')
    }



    return (
        <div className="mae">
            <div className="section">
            <div className="tudinho">
                <input type="text" value={input} placeholder="0" readOnly />
                <div className="result">{result}</div>
            </div>
            <div className="botoes">

                <div className="sla">
                <button onClick={() => addInput('9')}>9</button>
                <button onClick={() => addInput('8')}>8</button>
                <button onClick={() => addInput('7')}>7</button>
                </div>

                <div className="sla">
                <button onClick={() => addInput('6')}>6</button>
                <button onClick={() => addInput('5')}>5</button>
                <button onClick={() => addInput('4')}>4</button>
                </div>

                <div className="sla3">
                <button onClick={() => addInput('3')}>3</button>
                <button onClick={() => addInput('2')}>2</button>
                <button onClick={() => addInput('1')}>1</button>
                </div>

                <div className="sla4">
                <button onClick={() => addInput('0')}>0</button>
                <button onClick={() => addInput('/')}>/</button>
                <button onClick={() => addInput('*')}>*</button>
                </div>
            
                <div className="sla5">
                <button onClick={() => addInput('-')}>-</button>
                <button onClick={() => addInput('.')}>.</button>
                <button onClick={() => addInput('+')}>+</button>
                </div>

                <div className="sla6">
                <button onClick={resultado}>=</button>
                <button onClick={limpar}>C</button>
                </div>
            </div>
            </div>
        </div>
    )
} 