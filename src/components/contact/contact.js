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
                <div className='contact-us' id='location'>
                    <input className='userName' placeholder='User name' />
                    <input className='phoneNumber' placeholder='Phone number' />
                    <input className='email' placeholder='Email' />
                    <textarea className='message' placeholder='Message' />
                    {/* <input className='message' placeholder='Message' /> */}
                    <button className='send-btn'>Send <img src='/images/icon/send.svg' /></button>
                </div>

                <div className='location'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279.6423656270104!2d84.85475422275633!3d22.227248343948236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2019cd44d97ebd%3A0x1a8d44a734941305!2sAE%20Traders!5e0!3m2!1sen!2sin!4v1720020998352!5m2!1sen!2sin"
                        width="800"
                        height="450"
                        style={{border:0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </>
    )
}


export default Contact;