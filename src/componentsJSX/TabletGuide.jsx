import React, { useState, useEffect } from "react";
import "../componentsCSS/TabletGuide.css";

const TabletGuide = () => {
  const [playerName, setPlayerName] = useState("");
  const [character, setCharacter] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const savedName = sessionStorage.getItem("playerName") || "";
    const savedCharacter = sessionStorage.getItem("character") || "";
    setPlayerName(savedName);
    setCharacter(savedCharacter);
  }, []);

  const stepsData = [
    "ממש בקרוב נכנס לזירת האירוע של נפילת הטיל. זהו האייפד שלך שיעזור לך בגיבוש תמונת המצב שובו יכתבו כל ההוראות שתזדקקי להן. במהלך כל שלב בסימולציה ניתן לחזור לאייפד ולקרוא שוב את ההוראות.",
    "האייקון מופיע בצד שמאל למטה של המסך והוא יופיע לכל אורך הלומדה. בלחיצה יפתח חזרה האייפד עם הסבר על השלב בו נמצאים.",
    "בצד שמאל למעלה במסך מופיע אייקון שבלחיצה עליו נפתח המסלול של השלבים המרכיבים את הלומדה. בכל שלב בלומדה יהיה מסומן במסלול איפה את נמצאת וכמה עוד נשאר לעבור. בסיום כל שלב ניתן לחזור לסיכום שלו בלחיצה על המסלול כדי לעבור על החומר המקצועי. בהצלחה!"
  ];

  const nextStep = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStage1 = () => {
    console.log("מעבר לשלב 1"); 
    // כאן תעשי navigate('/Stage1') או מה שמתאים לך
  };

  return (
    <div className="tablet-guide">
      {/* טאבלט */}
      <img
        src={`${process.env.PUBLIC_URL}/assests/imgs/tablet.png`}
        alt="tablet"
        className="tablet"
      />

      {/* היד */}
      <img
        src={`${process.env.PUBLIC_URL}/assests/imgs/hand.png`}
        alt="hand"
        className="hand"
      />

    {/* לוגו אייפד */}
<div className={`logo-circle ${currentStep === 1 ? "blink" : ""}`} id="ipad-logo">
  <img
    src={`${process.env.PUBLIC_URL}/assests/imgs/logos/ipad-logo.png`}
    alt="ipad-logo"
  />
</div>

{/* לוגו מפה */}
<div className={`logo-circle ${currentStep === 2 ? "blink" : ""}`} id="map-logo">
  <img
    src={`${process.env.PUBLIC_URL}/assests/imgs/logos/map-logo.png`}
    alt="map-logo"
  />
</div>

      {/* תוכן בתוך האייפד */}
      <div className="tablet-content">
        <div className="logo-circle character-circle">
          {character && (
            <img
              src={`${process.env.PUBLIC_URL}/assests/imgs/${character}.png`}
              alt="solider-chosen"
            />
          )}
        </div>

        <h2 className="title-ipad">האייפד של {playerName}</h2>
        <p className="text-step">{stepsData[currentStep]}</p>

        <div className="buttons-container">
          {/* חץ אחורה רק אם לא בשלב הראשון */}
          {currentStep > 0 && (
            <img
              src={`${process.env.PUBLIC_URL}/assests/imgs/arrow-next.png`}
              alt="prev"
              className="arrow-btn prev"
              onClick={prevStep}
            />
          )}

          {/* חץ קדימה או כפתור לשלב 1 */}
          {currentStep < stepsData.length - 1 ? (
            <img
              src={`${process.env.PUBLIC_URL}/assests/imgs/arrow-next.png`}
              alt="next"
              className="arrow-btn next"
              onClick={nextStep}
            />
          ) : (
            <button className="stage-btn" onClick={goToStage1}>
              מעבר לשלב 1
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabletGuide;
