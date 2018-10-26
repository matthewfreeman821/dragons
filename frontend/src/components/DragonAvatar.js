import React, { Component } from 'react';

const propertyMap = {
    backgroundColor: { 
        black: '#000000', 
        white: '#FFFFFF',
        green: '#00FF00', 
        blue: '#0000FF' 
    },
    build: { slender, stocky, sporty, skinny },
    pattern: { plain, striped, spotted, patchy},
    size: { small, medium, large, enormous }
};

class DragonAvatar extends Component {
    render() {
        const { generationId, dragonId, traits } = this.props.dragon;

        return (
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                { traits.map(trait => trait.traitValue).join(', ') }
            </div>
        )
    }
}

export default DragonAvatar;