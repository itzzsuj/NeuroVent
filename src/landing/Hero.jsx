import one from '../assets/doctor.png';
import BlurText from '../components/BlurText';

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

function Hero() {
    return (
        <div className="hero">
            {/* Hero Text Section */}
            <div className="herocontent">
                <BlurText
                    text="Bridging Cognitive Health and Respiratory Care"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="hero-title"
                />
                <p className="hero-subtext">
                    Empowering healthcare through AI-driven insights and solutions.
                </p>
            </div>

            {/* Hero Image Section */}
            <div className="heroimg">
                <img
                    src={one}
                    alt="doctor"
                    className="hero-image"
                />
            </div>
        </div>
    );
}

export default Hero;
