import { Fbsvg } from "../global/fb_svg"
import { Linkedinsvg } from "../global/linkedin_svg"
import { Whatsappsvg } from "../global/whatapp_svg"

export const Media = () => {
    return (
        <div className="media-container">
            <div className="media-group">
                <Linkedinsvg height="24" width="24" />
            </div>
            <div className="media-group">
                <Fbsvg />
            </div>
            <div className="media-group">
                <Whatsappsvg />
            </div>
        </div>
    )
}