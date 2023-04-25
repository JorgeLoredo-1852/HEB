import styles from "./buttonBig.module.css";

const BigButton = ({callback, color, position, text, icon}) => {
    return (
        <div className={position == "fixed" ? styles.btn__container : styles.btn__relative}>
            <div onClick={callback} class = {color == "main" ? styles.btn__main : styles.btn__secondary}>
                {icon ? 
                    <div style={{position:"absolute", left:"3rem"}}>
                        {icon}
                    </div> : <></>}
                <div style={{justifySelf:"flex-start"}}>{text}</div>
            </div>
        </div> 
    )
}

export default BigButton