import styling from './showCase.css'

function Showcase() {
    return (
        <div className='showCase' id='showCase'>
            <div className='showCaseTitle '>"Experience the perfect fusion of tradition and innovation in our exclusive handloom collections."</div>
            <div className='photo-gallery'>
                <div className='column'>
                <img src='/images/showCase/img1.jpg' style={{ width: "270px", height: "590px" }} />
                <img src='/images/showCase/img6.jpg' style={{width:"280px", height:"300px"}}/>
            </div>
            <div className='column'>
                <img src='/images/showCase/img4.jpg' style={{width:"340px", height:"470px"}}/>
                <img src='/images/showCase/img3.jpg' style={{width:"340px", height:"420px"}}/>
            </div>
            <div className='column'>
                <img src='/images/showCase/img5.jpg' style={{width:"270px", height:"400px"}}/>
                <img src='/images/showCase/img7.jpg' style={{width:"270px", height:"250px"}}/>
                <img src='/images/showCase/img2.jpg' style={{width:"270px", height:"230px"}}/>
            </div>
        </div>
        </div >
    )
}

export default Showcase;