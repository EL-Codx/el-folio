import { Fbsvg } from "../global/fb_svg"
import { Linkedinsvg } from "../global/linkedin_svg"
import { Whatsappsvg } from "../global/whatapp_svg"

export const Media = () => {
    return (
        <div className="socials">
            <a href="mailto:laryeaaristotle@gmail.com">
                <MdEmail />
            </a>
            
            <a href="https://www.linkedin.com/in/laryea-el/" target="_blank">
                <IoLogoLinkedin />
            </a>

            <a href="#" target="_blank">
                <FaWhatsappSquare />
            </a>
        </div>
    )
}