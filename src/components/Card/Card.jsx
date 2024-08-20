/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({name, ytURL, twitterURL, igURL, intro, imgURL}) => {
    return (
        <div className="card" style={{backgroundImage: `url(${imgURL})`}}>
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
    )
}

export default Card;