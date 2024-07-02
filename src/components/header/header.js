import header from './header.css'

function Header() {
    return (
        <div className='header'>
          <img src="/images/logo1.png" />
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#testimony'>Testimonials</a></li>
                <li><a href='#contact'>Contact Us</a></li>
            </ul>
        </div>
    );
}

export default Header;