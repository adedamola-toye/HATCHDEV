/* eslint-disable react/prop-types */
export  const MyButton = ({textContent, bgColor, textColor}) => {

    return(
        <div style = {{backgroundColor: bgColor || "red", color: textColor}}>
            <button>{textContent}</button>
        </div>
    )
}