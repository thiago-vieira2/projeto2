import "./index.scss"

export default function Cartao(props) {
    return (
        <div className="tudos">
            <div className="img">
                <img src={props.item.image} alt="" />
            </div>

            <div className="info">
                <ul>
                <li><h2>{props.item.name}</h2></li>
                <li><h2>{props.item.height}cm</h2></li>
                <li><h2>{props.item.types}</h2></li>
          
              
             
                </ul>
            </div>
        </div>



    )
}