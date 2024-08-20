import Card from "../Card/Card";
import './CardDeck.css'

const CardDeck = () => {
    return (
        <div className="card-deck">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardDeck;