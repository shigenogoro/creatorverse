import Card from "../Card/Card";
import './CardDeck.css'

const CardDeck = () => {
    return (
        <div>
            <div className="card-deck">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        
    )
}

export default CardDeck;