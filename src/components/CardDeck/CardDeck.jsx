import Card from "../Card/Card";
import './CardDeck.css'

const CardDeck = ( {creators} ) => {

    return (
        <div>
            <div className="card-deck">
            {
                creators.map((creator, i) => {
                    return (
                        <Card 
                            key={i}
                            id={creators[i].id}
                            name={creators[i].name}
                            ytURL={creators[i].ytURL}
                            twitterURL={creators[i].twitterURL}
                            igURL={creators[i].igURL}
                            intro={creators[i].description}
                            imgURL={creators[i].imgURL}
                        />
                    )
                })
            }
            </div>
        </div>
        
    )
}

export default CardDeck;