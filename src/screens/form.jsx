import emailjs from "@emailjs/browser";

export const Contactform = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_r2552b8', 'template_so09cwl', e.target, 'sR7yw3t3blnP9ASNH');
        alert("Testing Successful");
    }

    return (
        <div class="form-container" id="contact-info">
            <h1>Get in touch</h1>
            <form onSubmit={sendEmail}>
                <div class="form-row">
                    <div class="form-group">
                        <label htmlFor="first-name">Name</label>
                        <input type="text" id="first-name" placeholder="First name" name="first_name" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" id="last-name" placeholder="Last name" name="last_name" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" name="email" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" id="phone" placeholder="Phone number" name="phone_number" />
                    </div>
                </div>
                <div class="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your message" name="message"></textarea>
                </div>
                <button type="submit" class="submit-btn">Submit now</button>
            </form>
        </div>
    )
}