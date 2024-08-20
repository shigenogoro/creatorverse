import MyButton from "./../../components/MyButton/MyButton"

const ViewCreator = ({creator}) => {
    return (
        <div>
            <div className="info-group">
                <img src={creator.imgURL} alt={creator.name} />

                <div className="text-info">
                    <h2>{creator.name}</h2>
                    <p>{creator.intro}</p>
                </div>
            </div>

            <div className="btn-group">
                <MyButton title="Edit" type="normal" />
                <MyButton title="Delete" type="danger" />
            </div>
        </div>
    )
}

export default ViewCreator;