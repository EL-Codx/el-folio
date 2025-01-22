export const Contactform = () => {
    return (
        <div class="form-container">
            <h1>Get in touch</h1>
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label htmlFor="first-name">Name</label>
                        <input type="text" id="first-name" placeholder="First name" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" id="last-name" placeholder="Last name" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" id="phone" placeholder="Phone number" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your message"></textarea>
                </div>
                <button type="submit" class="submit-btn">Submit now</button>
            </form>
        </div>
    )
}