import './index.scss'

export default function CardRick(props) {
    return (
        <div className="ami">

            <div className="img">
                <img src={props.item.image} alt="" />
            </div>

            <div className="info">
                <ul>
                    <h1>{props.item.name}</h1>
                    <p>{props.item.gender}</p>
                    <p>{props.item.status}</p>


                </ul>
            </div>

        </div>
    )
} 