import { FaExclamationTriangle, IconName } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

export default function ErrorIcon(){
    return(
        <IconContext.Provider value={{color: "red", size: "1.7rem"}}>
            <FaExclamationTriangle/>
        </IconContext.Provider>
    );
}