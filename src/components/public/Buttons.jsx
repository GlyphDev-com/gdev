import style from "./Buttons.module.css";

export default function Buttons ( props){

    return(
        <button className={style.MyButton} 
            style={{background:props.background, color:props.color}} 
        >
        {props.name}
        </button>
    );
}