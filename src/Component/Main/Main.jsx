import './main.css'
const Main = (props) =>{
    const style1 = {backgroundColor:props.color}
    return (
        <div style={style1} className="maindiv">
            {props.count}
        </div>
    )
}
export default Main;