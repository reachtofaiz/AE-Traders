import '../feedback/feedback.css'

function Feedback() {
    return (
        <>
            {/* <a href='testimony'> */}
                <div className="card-group" id='testimony'>
                    <div className='title'>Here are the some testimony from our client</div>
                    <article className="card">
                        <div className="customer-image">
                            <img src="/images/p1.jpg" />
                        </div>
                        <h3>Owais</h3>
                        <div className="customer-name">
                            "With AE traders , our bussiness reaches to new heights. Professionalism, creativity, and results - they deliver it all!"
                        </div>
                    </article>

                    <article className="card">
                        <div className="customer-image">
                            <img src="/images/p2.jpg" />
                        </div>
                        <h3>Qausain</h3>
                        <div className="customer-name">
                            "Thanks to AE traders, our signage and branding stand out in the crowd. Exceeded all expectations!"
                        </div>
                    </article>

                    <article className="card">
                        <div className="customer-image">
                        <img src="/images/p3.jpg" />
                        </div>
                        <h3>Afnan</h3>
                        <div className="customer-name">
                            "Choosing AE traderse was a game-changer. They crafted durabilinty, not just signs!"
                        </div>
                    </article>

                    <article className="card">
                        <div className="customer-image">
                        <img src="/images/p4.jpg" />
                        </div>
                        <h3>Honey</h3>
                        <div className="customer-name">
                            "Impressed by AE traders attention to detail. Our home brand has never looked better!"
                        </div>
                    </article>
                </div>
            {/* </a> */}
        </>
    );
}

export default Feedback;