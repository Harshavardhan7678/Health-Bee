import React from 'react'
import './css/aboutus.css'

export default function About() {
    return (
        <div>
            <div className='aboutus'>
                <div className='aboutusbox'>
                    <div className='left_aboutussection'>
                        <div className='text_aboutus'>
                            <div className='heading_aboutus'>About Us</div>
                            <div className='subheading_aboutus'>We take care of your health, we provide the 21 days challenge, to get a new habit.
                            we also have health calculator.</div>
                        </div>
                    </div>
                    <div className='right_aboutussection'>
                        <img className='aboutusimage' src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641718136/hibernation-hack/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363_gpfkur.jpg' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
