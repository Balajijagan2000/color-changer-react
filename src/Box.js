const Box = ({color,toggle,hexcolor}) => {
    
    return (

        <div 

        style={{backgroundColor: color,color: toggle ? '#fff' : '#000'}} 
        className="box">
           <p>{color ? color:'No color entered'}</p>
           
           <p>{ hexcolor ? hexcolor : ''}</p>   

        </div>

    )
}
export default Box