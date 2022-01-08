import './css/hero.css';

const Hero = () => {
    return ( 
        <>
            <div className="herosection">
                <div className="leftsection">
                    <div className="textsection">
                        <div className="heading">All in one health tracker</div>
                        <div className="subheading">Lorem ipsum dolor, lectus sit lorem id integer.</div>
                    </div>
                    <div className="button">Get Started</div>
                </div>
                <div className="rightsection">
                    <div className='box'>
                        <img src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641662800/hibernation-hack/mainimage_u2ogtw.svg' alt='' className='landingimage'/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;