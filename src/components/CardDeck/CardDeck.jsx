import Card from "../Card/Card";
import './CardDeck.css'

const CardDeck = () => {
    return (
        <div>
            <h2 className="main-title">Creators List</h2>
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