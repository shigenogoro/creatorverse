import './Card.css'

const Card = ({id, name, ytURL, twitterURL, igURL, intro, imgURL}) => {
    return (
        <div className="card">
            <div className="card-bg" style={{backgroundImage: `url(${imgURL})`}}></div>

            <div className="card-content">
                <h3>{name}</h3>
                <div className="card-info-group">
                    <div className="card-btn-group">
                        <div className="card-social-btn-group">
                            {
                                ytURL ? (
                                    <a href={ytURL} className="fa fa-youtube-play card-fa"></a>
                                ) : (
                                    <div></div>
                                )
                            }

                            {
                                twitterURL ? (
                                    <a href={twitterURL} className="fa fa-twitter card-fa"></a>
                                ) : (
                                    <div></div>
                                )
                            }

                            {
                                igURL ? (
                                    <a href={igURL} className="fa fa-instagram card-fa"></a>
                                ) : (
                                    <div></div>
                                )
                            }              

                        </div>
                        <div className="card-info-btn-group">
                            <a href={`/view/${id}`} className="fa fa-info-circle card-fa"></a>
                            <a href={`/edit/${id}`} className="fa fa-edit card-fa"></a>
                        </div>
                    </div>

                    <p className="description-box">
                        {intro}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;