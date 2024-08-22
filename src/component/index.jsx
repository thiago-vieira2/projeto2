import "./index.scss"

export default function Cartao(props) {
    return (
        <div className="tudos">
            <div className="img">
                <img src={props.item.image} alt="" />
            </div>

            <div className="info">
                <h2>{props.item.name}</h2>
                <h2>{props.item.height}cm</h2>
            </div>
        </div>



    )
}