import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/CharacterSelect.css';

const CharacterSelect = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
  if (!selectedCharacter || !name.trim()) {
    setError('אנא בחר/י דמות והכנס/י שם');
    return;
  }
  setError('');
  sessionStorage.setItem('playerName', name);
  sessionStorage.setItem('character', selectedCharacter);
  navigate('/tabletGuide'); 
};
  return (
    <div className="character-select">
      <h1 className="title">בחר/י דמות</h1>
      <div className="characters">
        <img
          src={`${process.env.PUBLIC_URL}/assests/imgs/soldier1.png`}
          alt="חייל 1"
          className={`character ${selectedCharacter === 'soldier1' ? 'selected' : ''}`}
          onClick={() => setSelectedCharacter('soldier1')}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assests/imgs/soldier2.png`}
          alt="חייל 2"
          className={`character ${selectedCharacter === 'soldier2' ? 'selected' : ''}`}
          onClick={() => setSelectedCharacter('soldier2')}
        />
      </div>

      <input
        type="text"
        placeholder="הכנס/י שם"
        className="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {error && <div className="error">{error}</div>}

      <button className="start-btn" onClick={handleStart}>
        התחל משחק
      </button>
    </div>
  );
};

export default CharacterSelect;
