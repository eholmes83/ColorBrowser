import React from 'react';

const ColorSlider = (props) => (
    <div className='color-slider'>
        <label style={{ color: props.colorName }}>{props.colorName}</label>
        <input 
            type='range' 
            min='0' 
            max='255' 
            value={props.value}
            onChange={(event) => (
                props.onChange(props.colorName, event.target.value)
            )}
        />
        <span>{props.value}</span>
    </div>
);

export default ColorSlider;