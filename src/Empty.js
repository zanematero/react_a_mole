import { useEffect } from "react"
import MoleHill from "./molehill.png"

export default function Empty(props){
    useEffect(() => {
        var timer = setTimeout(() => {
            props.toggle(true)
            },Math.random()*10000)
            return () => clearTimeout(timer);
    });

    return (
        <div>
            <img style={{'width:': '30vw'}} src={MoleHill} />
        </div>
    )
}