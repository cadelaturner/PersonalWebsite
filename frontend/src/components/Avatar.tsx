import React from 'react';
import './Avatar.css';

interface AvatarProps {
  isThinking: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ isThinking }) => {
  return (
    <div className={`avatar-container ${isThinking ? 'thinking' : ''}`}>
      <div className="avatar-circle">
        <div className="avatar-face">
          {/* Eyes */}
          <div className="eyes">
            <div className={`eye left-eye ${isThinking ? 'blinking' : ''}`}>
              <div className="pupil"></div>
            </div>
            <div className={`eye right-eye ${isThinking ? 'blinking' : ''}`}>
              <div className="pupil"></div>
            </div>
          </div>
          
          {/* Mouth */}
          <div className={`mouth ${isThinking ? 'thinking-mouth' : 'normal-mouth'}`}></div>
          
          {/* Thinking indicators */}
          {isThinking && (
            <div className="thought-bubbles">
              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
            </div>
          )}
        </div>
        
        {/* Avatar body/shoulders */}
        <div className="avatar-body">
          <div className="suit-jacket"></div>
          <div className="tie"></div>
        </div>
      </div>
      
      {/* Pulse effect when thinking */}
      {isThinking && <div className="pulse-ring"></div>}
    </div>
  );
};

export default Avatar;