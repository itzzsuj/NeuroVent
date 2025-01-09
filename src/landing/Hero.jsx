import one from '../assets/doctor.png'
function Hero(){
    return(
        <div className="hero">
            <div className='herocontent'>
                <h2>Bridging Cognitive Health and Respiratory Care</h2>
            </div>
            <div className="heroimg">
                <img src={one} alt='doctor'></img>
            </div>
        </div>
    )

}
export default Hero