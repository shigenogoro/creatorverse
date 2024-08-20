import CardDeck from "../../components/CardDeck/CardDeck";
import './ShowCreators.css'

const ShowCreators = ( {creators} ) => {
    return (
        <div>
            <h2 className="main-title">Creators List</h2>
            <CardDeck creators={creators} />
        </div>
    )
}

export default ShowCreators;