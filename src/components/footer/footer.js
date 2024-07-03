import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer1">
                <h3>The AE Traders </h3>
                <div className='details'>
                    <img src='/images/icon/phone.svg' />
                    <label style={{margin: "0 65px 0 0"}}>7008709808</label>
                    <img src='/images/icon/gmail.svg' />
                    <a href="mailto:aetraders@gmail.com">aetraders@gmail.com</a>
                </div>
            </div>
            <div className="footer2">
                <div className='pageLink'>Links</div>
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
                    <a href='https://www.google.com/maps/place/AE+Traders/@22.2272327,84.8547629,20.33z/data=!4m6!3m5!1s0x3a2019cd44d97ebd:0x1a8d44a734941305!8m2!3d22.227168!4d84.8547819!16s%2Fg%2F11ryr6f5yz?entry=ttu'>
                    <img src='/images/icon/map.svg'/>
                    </a>
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