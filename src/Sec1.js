import {useState} from "react";
function Sec1()
{
    const[Text , setText] = useState('Ecommerence web');
const change=()=>{
    setText('SS-CASE-IT-WEB');
}
    return(
        <>
        <h1> 
        <discover> <marquee>{Text}</marquee></discover>
        </h1>
        <button onClick={change}>Click me</button>
        </>
    );
}
export default Sec1;