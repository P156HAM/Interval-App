import React from "react"
import { ValuesSelectorProps } from "../../types/types"
import './valueSelector.css'



const ValueSelector: React.FC<ValuesSelectorProps> = ({ checkboxType, setFunction}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.checked);
    };

    return(
      <div className="main-checkbox-container">
        <div className={`checkbox-${checkboxType}`}>
            <input
             type="checkbox" 
             className="checkbox"
             id={`checkbox-${checkboxType}`}
             onChange={handleChange} />
            <label htmlFor={`checkbox-${checkboxType}`}>{checkboxType}</label>
        </div>
      </div>  
    )
}

export default ValueSelector;