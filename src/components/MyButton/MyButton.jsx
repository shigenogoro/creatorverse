import "./MyButton.css"

const MyButton = ({title, type, onClick}) => {
    return (
        <button className={type} onClick={onClick}>
            <h2>{title}</h2>
        </button>
    )
}

export default MyButton;