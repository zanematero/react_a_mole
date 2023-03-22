import { useState } from "react";
import Mole from "./Mole";
import Empty from "./Empty";

export default function MoleContainer (props) {
    let [displayMole, setDisplayMole] = useState(false)
    const onHit = (e) => {
        props.setScore(props.score + 1);
        setDisplayMole(false);
    }
    let mole = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={onHit}/> : <Empty toggle={setDisplayMole}/>
    return(
        <div style={{ 'display': 'inline-block', 'width': '30vw', 'height': '20vh'}}>
            {mole}
        </div>
    )
}