import styles from "./buttonBig.module.css";

const BigButton = ({callback, color, position, text, icon}) => {
    return (
        <div className={position == "fixed" ? styles.btn__container : styles.btn__relative}>
            <div onClick={callback} className = {color == "main" ? styles.btn__main : styles.btn__secondary}>
                
            {icon ? 
                    <div style={{paddingTop:"0.5rem", paddingLeft:"0.8rem"}}>
                        {icon}
                    </div> : <></>}
                <div style={{paddingRight:"0.8rem",  wordWrap: "break-word"}}>{text}</div>
                
            </div>
        </div> 
    )
}

export default BigButton