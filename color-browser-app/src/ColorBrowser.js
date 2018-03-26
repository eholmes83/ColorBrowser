import React from 'react';
import ColorOutput from './ColorOutput';
import ColorSlider from './ColorSlider';

class ColorBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 200,
            green: 100,
            blue: 0
        }
    }

    updateColor = (color, value) => {
        this.setState({
            [color]: value
        });
    }

    randomColor = () => {
        this.setState({
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256)
        })
    }
    
    render() {
        return (
            <div>
                <h1>Color Browser</h1>
                <ColorSlider 
                    colorName='red' 
                    value={this.state.red}
                    onChange={this.updateColor} />
                <ColorSlider 
                    colorName='green' 
                    value={this.state.green}
                    onChange={this.updateColor} />
                <ColorSlider 
                    colorName='blue' 
                    value={this.state.blue}
                    onChange={this.updateColor} />
            <hr/>
                <ColorOutput 
                    red={this.state.red}
                    green={this.state.green}
                    blue={this.state.blue} />
                <button onClick={this.randomColor}>Random Color</button>
            </div>
        )
    }
}

export default ColorBrowser;