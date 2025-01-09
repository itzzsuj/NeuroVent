import doctorgif from '../assets/doctor-gif.gif';

function About(){
    return(
        <div className="about">
            <div className="abouttitle">
                <h2>WHO ARE WE?</h2>
            </div>
            <div className="aboucontent">
                <p>Asthma affects not just respiratory health but also cognitive function,
                often overlooked by healthcare providers. Our innovative solution employs
                advanced machine learning techniques to deliver real-time cognitive
                assessments and personalized recommendations. By monitoring vital
                health metrics such as oxygen levels and brain activity, we can detect and
                address potential cognitive decline in asthma patients early on. This dual
                focus not only improves asthma management but also empowers
                patients to take charge of their cognitive health.</p>
                <div className="aboutimg">
                    <img src={doctorgif} alt='doctorgif'></img>

                </div>
            </div>
        </div>
    )

}
export default About