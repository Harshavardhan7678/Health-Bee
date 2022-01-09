import React from 'react';
import Countdown from './Countdown';
import './yoga.css'

export default function Yoga() {

    return (
        <div className="mainMeditationBox">
        <div className='timerBack'>
          <Countdown/>
        {/* <Lottie animationData={timerback} 
                style={{
                    height:700
                }}
            /> */}
        </div>
        {/* {show && <OpeningMessage/>} */}
        <div className="spotifyPlayer">
            <iframe title="yoga" src="https://open.spotify.com/embed/playlist/4mfobAcyw052F12K4vwtoW?utm_source=generator" width="50%" height="500" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
        // {/* <div className='yoga'>
        //     <Countdown/>
        //     <div className="spotifyPlayer">
        //         <iframe src="https://open.spotify.com/embed/playlist/4mfobAcyw052F12K4vwtoW?utm_source=generator" width="50%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        //     </div>
        // </div> */}
    );
}
