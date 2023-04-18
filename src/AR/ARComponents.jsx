import React, {useEffect} from "react"
import ARExperience from "./Experience"

const ARComponents = () => {
    const arExperience = new ARExperience()
    useEffect(() => {
        arExperience.initScene()
        arExperience.setupARExperience()
        arExperience.loadModel()
    }, [])
    return (
        <div
            className="container3D"
            style={{
                width: "100%",
                height: "100vh"
            }}
        >   
    
        </div>
    )
}

export default ARComponents;