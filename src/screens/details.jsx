import { Card } from "../global/card"
import image from "../assets/images/image.png"

export const Details = () => {
    return (
        <div className="details-container">
            <div className="services">
                <h1 className="service-title">What I offer</h1>
                <div className="service-content">
                    <Card 
                        card_main_image = {image}
                        
                    />
                </div>
            </div>
        </div>
    )
}