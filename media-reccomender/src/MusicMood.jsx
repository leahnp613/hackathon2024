import React, { useState } from 'react';

const MusicMoodQuiz = () => {
    const [mood, setMood] = useState('happy');
    const [suggestion, setSuggestion] = useState('');

    const suggestMusic = () => {
        let suggestion = '';
        switch(mood) {
            case 'happy':
                suggestion = 'We suggest listening to Pop music.';
                break;
            case 'sad':
                suggestion = 'We suggest listening to Blues music.';
                break;
            case 'relaxed':
                suggestion = 'We suggest listening to Jazz music.';
                break;
            case 'energetic':
                suggestion = 'We suggest listening to Rock music.';
                break;
            case 'focused':
                suggestion = 'We suggest listening to White noise.';
                break;
            case 'angry':
                suggestion = 'We suggest listening to Drill music.';
                break;
            case 'calm':
                suggestion = 'We suggest listening to Instrumental music.';
                break;
        }
        setSuggestion(suggestion);
    }

    return (
        <div>
            <h1>Music Mood Quiz</h1>
            <p>Select your current mood:</p>
            <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="relaxed">Relaxed</option>
                <option value="energetic">Energetic</option>
                <option value="focused">Focused</option>
                <option value="angry">Angry</option>
                <option value="calm">Calm</option>
            </select>
            <button onClick={suggestMusic}>Suggest Music</button>
            <p>{suggestion}</p>
        </div>
    );
}

export default MusicMoodQuiz;
