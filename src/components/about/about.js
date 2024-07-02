import about from './about.css'

function About() {
    return (
            <div className='about' id='about'>
                {/* <div className='heading'>About Us</div> */}
                <h1>About Us</h1>
                <img src='/images/about.jpg' />
                <div className='description'>
                    <b>Welcome to AE Traders</b>, where tradition meets craftsmanship. Our handloom business is dedicated to preserving the age-old art of hand weaving, producing high-quality textiles that are rich in cultural heritage. Each piece is meticulously crafted by skilled artisans using eco-friendly practices, ensuring that every product is unique and sustainable.<br /><br />

                    We take pride in supporting local communities by providing fair employment opportunities and promoting the timeless beauty of handloom fabrics. Our commitment to quality and sustainability is reflected in every thread, making our products not just a purchase, but an investment in tradition and the environment.
                    <br /><br />
                    <b>Join us in celebrating the art of handloom weaving and experience the elegance of handcrafted textiles.</b>
                </div>
            </div>
    )
}


export default About;