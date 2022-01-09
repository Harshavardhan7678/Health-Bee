import React from 'react'
import './Calculator.css'
import Herochallenge from '../Calculator/heroChallenge/Herochallenge'

export default function Calculator() {
    return (
        <div>
            <Herochallenge />
            <div>
                <div className="calculatorsection">
                    <div className="textsectionheading">
                    </div>
                    <div className="calculators">
                        <div class="grid-container">
                            <div class="item1">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/BMI_aqeoxe.jpg" alt='BMI' />
                                <div className="textsection">
                                    <div className="blogbutton">Body Mass Index Calculator</div>
                                </div>
                            </div>
                            <div class="item2">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/calorie_c39prv.jpg" alt='Calorie' />
                                <div className="textsection">
                                    <div className="blogbutton">Calorie Calculator</div>
                                </div>
                            </div>
                            <div class="item3">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/Protein_hscygv.jpg" alt='Protein' />
                                <div className="textsection">
                                    <div className="blogbutton">Protein Calculator</div>
                                </div>
                            </div>
                            <div class="item4">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/Body_mass_gurgkm.jpg" alt='Body Mass' />
                                <div className="textsection">
                                    <div className="blogbutton">Body Weight Calculator</div>
                                </div>
                            </div>
                            <div class="item5">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/Body_Type_dz7yk6.png" alt='Body Type' />
                                <div className="textsection">
                                    <div className="blogbutton">Body Type Calculator</div>
                                </div>
                            </div>
                            <div class="item6">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/Body_fat_yz5chc.jpg" alt='Body Fat' />
                                <div className="textsection">
                                    <div className="blogbutton">Body Fat Calculator</div>
                                </div>
                            </div>
                            <div class="item7">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/Due_date_wxflir.jpg" alt='Due Date' />
                                <div className="textsection">
                                    <div className="blogbutton">Due Date Calculator</div>
                                </div>
                            </div>
                            <div class="item8">
                                <img src="https://res.cloudinary.com/nightfury/image/upload/v1641720837/Hibernation%20Hack/Period_cyekgu.jpg" alt='Period' />
                                <div className="textsection">
                                    <div className="blogbutton">Period Calculator</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
