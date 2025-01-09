import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Support from './Support';
import Footer from './Footer';

function LandingPage(){
    return(
        <>
        <div className='LandNav'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Support></Support>
            <Footer></Footer>
        </div>
        </>
    )

}
export default LandingPage