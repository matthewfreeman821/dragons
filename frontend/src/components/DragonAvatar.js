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
        const dragonPropertyMap = {};

        this.props.dragon.traits.forEach(trait => {
            const { traitType, traitValue } = trait;

            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });

        const { backgroundColor, build, pattern, size } = dragonPropertyMap;

        const sizing = {width: size, height: size };

        return (
            <div className="dragon-avatar-image-wrapper dragon-picture">
                <div className="dragon-avatar-image-background" style={{ backgroundColor, ...sizing }}></div>
                <img src={pattern} alt="" className="dragon-avatar-image-pattern" style={{ ...sizing}} />
                <img src={build} alt="" className="dragon-avatar-image" style={{ ...sizing}} />
            </div>
        );
    }

    render() {
        const { generationId, dragonId, traits } = this.props.dragon;

        if (!dragonId) return <div></div>;

        return (
            <div className="dragon-information">
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                { traits.map(trait => trait.traitValue).join(', ') }
                { this.DragonImage }
            </div>
        )
    }
}

export default DragonAvatar;