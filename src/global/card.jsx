export const Card = (props) => {
    return (
        <div className="card-container box">
            <div className="card-content">
                <div className="card-title">
                    <div>{props.logo}</div>
                    <h2 className="diff">{props.card_title}</h2>
                </div>
                <div className="card-body-content">
                    <p>{props.card_brief}</p>
                </div>
            </div>
        </div>
    )
}