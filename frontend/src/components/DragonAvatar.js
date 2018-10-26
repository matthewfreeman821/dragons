import React, { Component } from 'react';
import { skinny, slender, sporty, spotted, stocky, striped, patchy, plain } from '../assets';

const propertyMap = {
    backgroundColor: { 
        black: '#263238', 
        white: '#CFD8DC',
        green: '#A5D6A7', 
        blue: '#0277BD' 
    },
    build: { slender, stocky, sporty, skinny },
    pattern: { plain, striped, spotted, patchy},
    size: { small: 100, medium: 140, large: 180, enormous: 220 }
};

class DragonAvatar extends Component {
    get DragonImage() {
        const sizing = {width: 200, height: 200 };

        return (
            <div className="dragon-avatar-image-wrapper">
                <div className="dragon-avatar-image-background" style={{ backgroundColor: propertyMap.backgroundColor.blue, ...sizing }}></div>
                <img src={propertyMap.pattern.spotted} alt="" className="dragon-avatar-image-pattern" style={{ ...sizing}} />
                <img src={propertyMap.build.sporty} alt="" className="dragon-avatar-image" style={{ ...sizing}} />
            </div>
        );
    }

    render() {
        const { generationId, dragonId, traits } = this.props.dragon;

        return (
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                { traits.map(trait => trait.traitValue).join(', ') }
                { this.DragonImage }
            </div>
        )
    }
}

export default DragonAvatar;