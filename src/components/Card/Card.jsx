import './Card.css'

const Card = ({name, ytURL, twitterURL, igURL, intro, imgURL}) => {
    return (
        <div className="card">
            <div className="card-bg" style={{backgroundImage: `url(${imgURL})`}}></div>

            <div className="card-content">
                <h3>{name}</h3>
                <div className="info-group">
                    <div className="btn-group">
                        <div className="social-btn-group">
                            <a href={ytURL} className="fa fa-youtube-play"></a>
                            <a href={twitterURL} className="fa fa-twitter"></a>
                            <a href={igURL} className="fa fa-instagram"></a>
                        </div>
                        <div className="info-btn-group">
                            <a href="#" className="fa fa-info-circle"></a>
                            <a href="#" className="fa fa-edit"></a>
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