import { MdEmail } from "react-icons/md"
import { IoLogoLinkedin } from "react-icons/io"
import { FaWhatsappSquare } from "react-icons/fa"

export const Media = () => {
    return (
        <div className="socials">
            <a href="mailto:niilaryea25emma@outlook.com" id="mail">
                <MdEmail />
            </a>
            
            <a href="https://www.linkedin.com/in/laryea-el/" target="_blank" id="linkedin">
                <IoLogoLinkedin />
            </a>

            <a href="https://wa.link/0k42pt" target="_blank" id="whatsapp">
                <FaWhatsappSquare />
            </a>
        </div>
    )
}