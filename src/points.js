import React from 'react';
import './font.css'

const Points = ({ percentage }) => {
    const progressStyle = {
        width: `${percentage}%`
    };

    return (
        <>
            <div className="mainContainer">
                <h1>Points</h1>
                <div className="progress-tracker">
                    <div className="progress-bar" style={progressStyle}></div>
                    <div className="percentage-label">{`${percentage}%`}</div>
                </div>
                <div>
                    {
                        percentage <= 25 && <p> Strong start! You can do it!  </p>
                    }
                    {
                        percentage > 25 && percentage <= 50 && <p> You're almost halfway! Keep going! </p>
                    }
                    {
                        percentage > 50 && percentage <= 75 && <p> You got this! So close!  </p>
                    }
                    {
                        percentage > 75 && percentage <= 100 && <p> slayyyy  </p>
                    }
                </div>

                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/budget/308190645117';
                }}> Return to Goals</button>
            </div>
        </>
    );
};

export default Points;