import { Apisvg } from "../global/api_svg"
import { Card } from "../global/card"
import { Codesvg } from "../global/code_svg"
import { Devsvg } from "../global/dev_svg"
import { Globe } from "../global/globe_svg"
import { Graphicsvg } from "../global/graphic_svg"
import { Maintainsvg } from "../global/maintain_svg"

export const Details = () => {
    return (
        <div className="details-container">
            <div className="services">
                <h1 className="service-title">What I offer</h1>
                <div className="service-content">
                    {/* website dev */}
                    <Card 
                        logo = {<Codesvg color="#7200dd" height="50" width="50"/>}
                        card_title = "Website Development"
                        card_brief = "Offer tailored website solutions for businesses, organizations, and individuals. This include..."
                    />

                    {/* web app dev */}
                    <Card 
                        logo = {<Globe color="#7200dd" height="50" width="50"/>}
                        card_title = "Web App Development"
                        card_brief = "Develop custom web applications for specific client needs, such as..."
                    />

                    {/* backend services */}
                    <Card 
                        logo = {<Devsvg color="#7200dd" height="50" width="50"/>}
                        card_title = "Backend Development"
                        card_brief = "Provide robust backend solutions to support advanced features and functionality. Services can include..."
                    />

                    {/* api services */}
                    <Card 
                        logo = {<Apisvg color="#7200dd" height="50" width="50"/>}
                        card_title = "API Integration Services"
                        card_brief = "Offer seamless integration of third-party APIs to enhance website or application functionality. This includes..."
                    />

                    {/* seo */}
                    <Card 
                        logo = {<Maintainsvg color="#7200dd" height="50" width="50"/>}
                        card_title = "Website Maintenance and SEO"
                        card_brief = "Provide ongoing support to keep websites running smoothly while improving visibility and performance. Services include..."
                    />

                    {/* graphic design services */}
                    <Card 
                        logo = {<Graphicsvg color="#7200dd" height="50" width="50"/>}
                        card_title = "Graphic Design"
                        card_brief = "Provide custom design solutions to enhance the visual appeal and branding of websites and digital platforms. Services include..."
                    />
                </div>
            </div>
        </div>
    )
}