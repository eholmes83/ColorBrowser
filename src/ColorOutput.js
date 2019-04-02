import React from 'react';

const ColorOutput = (props) => {
    const rgbString = `rgb(${props.red},${props.green},${props.blue})`
        const theStyle = {
            backgroundColor: rgbString
        };
        const colorSum = Number(props.red) + Number(props.green) + Number(props.blue);
        const textColor = (colorSum > 128 * 3) ? 'black' : 'white';
        const textStyle = {
            color: textColor
        };
    return (
        <div className='color-output' style={theStyle}>
            <h2 style={textStyle}>RGB: {props.red}, {props.green}, {props.blue}</h2>
        </div>
    );
};

export default ColorOutput;