import './Card.css'

const Card = () => {
    return (
        <div className="card">
            <h3>Yu Chang</h3>
            <div className="info-group">
                <div className="btn-group">
                    <div className="social-btn-group">
                        <a href="#" className="fa fa-youtube-play"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-instagram"></a>
                    </div>
                    <div className="info-btn-group">
                        <a href="#" className="fa fa-info-circle"></a>
                        <a href="#" className="fa fa-edit"></a>
                    </div>
                </div>
                <p className="description-box">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit quidem, pariatur ut suscipit eum aspernatur quam, odit sint id at, consequatur dolorum. Quas obcaecati et facere mollitia quae repudiandae!
                </p>
            </div>
        </div>
    )
}

export default Card;