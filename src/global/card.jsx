export const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card-imagery">
                <img src={props.card_main_image} alt="service image" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <img src={props.logo} alt={props.logo_alt} />
                    <p>{props.card_title}</p>
                </div>
                <div className="card-body-content">
                    <p>{props.card_brief}</p>
                </div>
            </div>
        </div>
    )
}