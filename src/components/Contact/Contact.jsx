import '../Contact/Contact.css'

export function Contact() {
    return (
        <section className="contact-box">
            <form className="contact-form">
                <label htmlFor="name-input">Name</label>
                <input id="name-input" type="text" />
                <label htmlFor="email-input">email</label>
                <input id="email-input" type="email" />
            </form>
        </section>
    )
}