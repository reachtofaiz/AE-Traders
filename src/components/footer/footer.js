import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer1">
                <h3>The AE Traders </h3>
                <div className='details'>
                    <img src='/images/icon/phone.svg' />
                    <label>123456789</label>
                    <img src='/images/icon/gmail.svg' />
                    <a href="mailto:aetraders@gmail.com">aetraders@gmail.com</a>
                </div>
            </div>
            <div className="footer2">
                <div className='link'>Links</div>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#testimony'>Testimonials</a></li>
                    <li><a href='#showCase'>Work Showcase</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                </ul>
            </div>
            <div className="footer3">
                <div className='socialMedia'>Let's connect with us on!</div>
                <div className='subContainer'>
                    <img src='/images/icon/map.svg'/>
                </div>
                <div className='subContainer'>
                <img src='/images/icon/instagram.svg'/>
                </div>
                <div className='subContainer' >
                <img src='/images/icon/twitter.svg' style={{width: "22px"}}/>
                </div>
                <div className='subContainer'>
                <img src='/images/icon/fb.svg'/>
                </div>
            </div>
            <div className='aetraders'><b>© By AE Traders.</b></div>
        </div>
    );
}

export default Footer;