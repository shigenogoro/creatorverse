import CardDeck from "../../components/CardDeck/CardDeck";
import './ShowCreators.css'

const ShowCreators = ( {creators, onEdit} ) => {
    return (
        <div className="page-container">
            <h2 className="main-title">Creators List</h2>
            <CardDeck creators={creators} onEdit={onEdit} />
        </div>
    )
}

export default ShowCreators;