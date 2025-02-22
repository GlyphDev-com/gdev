import style from './space.module.css'
export default function Space(props){
    
    return (
        <div id={style.spacer} style={{height: props.height, backgroundColor: props.backgroundColor}}>
           
        </div>
    )
}