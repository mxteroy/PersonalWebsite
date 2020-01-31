import Typing from 'react-typing-animation';
import React from 'react';

function TypingText(props) {
    let index = -1;
    const typeText =()=> {
        index = (index + 1) % props.texts.length;
        return (
            <Typing>
                <span>{props.texts[index]}
                </span>
            </Typing>
        )
    }

    return (
        <div>
            {typeText()}
        </div>
    );
}

export default TypingText;
