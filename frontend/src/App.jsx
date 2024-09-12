import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [surahNumber, setSurahNumber] = useState('');
    const [audioUrl, setAudioUrl] = useState('');

    const handleInputChange = (event) => {
        setSurahNumber(event.target.value);
    };

    const handlePlayAudio = async () => {
        try {
            const response = await axios.get(`http://localhost:3500/quran/audio/${surahNumber}`);
            setAudioUrl(response.data.audio);
        } catch (error) {
            console.error('Error fetching audio:', error);
        }
    };

    return (
        <div>
            <input
                type="number"
                value={surahNumber}
                onChange={handleInputChange}
                placeholder="Enter Surah number"
            />
            <button onClick={handlePlayAudio}>Play Audio</button>
            {audioUrl && <audio controls autoPlay src={audioUrl} />}
        </div>
    );
};

export default App; // Pastikan ada ekspor default
