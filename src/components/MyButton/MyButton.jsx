import "./MyButton.css"

const MyButton = ({title, type}) => {
    return (
        <button className={type}>
            <h2>{title}</h2>
        </button>
    )
}

export default MyButton;