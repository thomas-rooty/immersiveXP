import { React, useState } from 'react';

// Import styles
import './SoundPlayer.css';

const SoundPlayer = () => {
    // Play bg.mp3 and add a toggle button for play and pause
    let [audioStatus, setAudioStatus] = useState('paused');
    const toggleAudio = () => {
        let audioController = document.getElementsByTagName("audio")[0];
        if (audioStatus === 'paused') {
            audioStatus = 'playing';
            audioController.play();
        } else {
            audioStatus = 'paused';
            audioController.pause();
        }
        setAudioStatus(audioStatus);
    }

    return (
        <div className="sound-player-container">
            <img onClick={toggleAudio} src={`/icons/bg-${audioStatus}.gif`} alt='sound-icon' className="sound-icon"></img>
            <audio src="/sound/bg.mp3"></audio>
        </div>
    );
}

export default SoundPlayer;