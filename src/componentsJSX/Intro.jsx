import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Intro.css';

const Intro = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [showIntro, setShowIntro] = useState(false);
    const [showSkipButton, setShowSkipButton] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1025) {
                // Desktop → סרטון מחשב
                setVideoSrc(`${process.env.PUBLIC_URL}/assests/videos/introVidComp.mp4`);
            } else {
                // Mobile Landscape → גם סרטון מחשב
                setVideoSrc(`${process.env.PUBLIC_URL}/assests/videos/introVidComp.mp4`);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const videoEndTimeout = setTimeout(() => setIsVideoEnded(true), 7200);
        const introTextTimeout = setTimeout(() => setShowIntro(true), 7250);
        const skipButtonTimeout = setTimeout(() => setShowSkipButton(true), 3000);

        return () => {
            clearTimeout(videoEndTimeout);
            clearTimeout(introTextTimeout);
            clearTimeout(skipButtonTimeout);
        };
    }, []);

    const skipVideo = () => {
        setIsVideoEnded(true);
        setShowIntro(true);
    };

    const goToCharacterSelect = () => {
        navigate('/characterSelect');
    };

    return (
        <div id="intro">
            {!isVideoEnded && (
                <>
                    {showSkipButton && (
                        <button className="skip" onClick={skipVideo}>
                            &lt;&lt; דלג/י
                        </button>
                    )}
                    {videoSrc && (
                        <video className="video-intro" autoPlay muted playsInline>
                            <source src={videoSrc} type="video/mp4" />
                            הדפדפן שלך לא תומך בנגן וידאו
                        </video>
                    )}
                </>
            )}

            {showIntro && (
                <div className="intro-text-slide-in">
                    <img
                        src={`${process.env.PUBLIC_URL}/assests/imgs/whiteLogo.png`}
                        alt="White Logo"
                        id="logo-white"
                        className="move-to-center"
                    />
                    <h1 id="welcome-text-intro">
                        לומדת
                        הערכת מצב
                    </h1>
                    <p id="introduction-sub">
                        ברוכים הבאים והבאות ללומדת גיבוש תמונת מצב שבא תעברו סימולציה של מקרה חירום של נפילת טיל בבניין ודרכה תלמדו את השלבים הנכונים לגיבוש תמונת מצב.
                    </p>
                    <img
                        src={`${process.env.PUBLIC_URL}/assests/imgs/whiteArrow.png`}
                        className="hpArrow-intro"
                        alt="Arrow"
                        onClick={goToCharacterSelect}
                    />
                </div>
            )}
        </div>
    );
};

export default Intro;
