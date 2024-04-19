import { useState,useEffect } from "react";
import style from './message.module.css';

function Message({type, msg}) {
    const [visible, setVisible]= useState(false);

    useEffect(()=>{

        if (!msg){
            setVisible(false);
            return;
        }
        
        setVisible(true);

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 3000);

        return ()=>{clearTimeout(timer)}

    }, [])

    return(
        <>
        {
            visible && (
                <div className={`${style.message} ${style[type]}`}>
                    <p>{msg}</p>
                </div>
            )
        }
    
        </>
    )
}
export default Message;