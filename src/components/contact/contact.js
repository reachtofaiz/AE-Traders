import '../contact/contact.css'

function Contact() {
    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact-description">
                    <div className='heading'>Contact Us</div>
                    <div className='paraDescription'>
                        Ready to elevate your brand? Reach out to us today and let's start crafting your unique story together. Whether you're ready to dive in or just have a question, we're here to help. Get in touch and let's make something extraordinary happen.
                    </div>
                </div>
                <div className='contact-us'>
                    <input className='fName' placeholder='First Name' />
                    <input className='lName' placeholder='Last Name' />
                    <input className='email' placeholder='Email' />
                    <textarea className='message' placeholder='Message'/>
                    {/* <input className='message' placeholder='Message' /> */}
                    <button className='send-btn'>Send <img src='/images/icon/send.svg' /></button>
                </div>
            </div>
        </>
    )
}


export default Contact;