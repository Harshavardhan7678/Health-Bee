import React from 'react';
import './css/challenge.css';

export default function Herochallenge() {
    return (
        <div>
            <div className="herosectionchallenge">
                <div className="leftsection">
                    <div className="textsection">
                        <div className="heading">21 days challenge.</div>
                        <div className="subheading">Get a new habit with the 21days challenge.</div>
                    </div>
                    <div className="button">Get Started</div>
                </div>
                <div className="rightsection">
                    <div className='box'>
                        <img src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641662800/hibernation-hack/mainimage_u2ogtw.svg' alt='' className='landingimage'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
