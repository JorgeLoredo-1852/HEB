import styles from "./downloadButton.module.css";

const DownloadButton = ({callback, color, position, text, icon}) => {
    return (
        <div className={position == "fixed" ? styles.btn__container : styles.btn__relative}>
            <div onClick={callback} className = {color == "main" ? styles.btn__main : styles.btn__secondary}>
                
            {icon ? 
                    <div style={{paddingLeft:"0.4rem"}}>
                        {icon}
                    </div> : <></>}
                <div style={{paddingRight:"2rem"}}>{text}</div>
                
            </div>
        </div> 
    )
}

export default DownloadButton