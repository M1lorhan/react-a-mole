import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer (props) {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score +100)
        setTheMole(false)
    }
    let displayMole = theMole ? <Mole toggle={setTheMole} handleClick={handleClick} /> :<EmptySlot toggle={setTheMole} />
   
    return (
        <div style={{'display': 'inline-block', 'width': '30vh'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer