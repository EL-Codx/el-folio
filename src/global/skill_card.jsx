export const Skillcard = (props) => {
    return (
        <div className="skill-singular">
            <div className="singular-card">
                {/* <img className="skill-logo" src={props.logo} alt={props.logo_alt} /> */}
                <p>{props.rate}</p>
            </div>
            <p>{props.skill_name}</p>
        </div>
    )
}