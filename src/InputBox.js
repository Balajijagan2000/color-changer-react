const InputBox = ({value,onChange,toggle,setToggle}) => {
    return (
        <div className="input-box">
            <input type="text" placeholder="Enter color name"
                value={value}
                onChange={(e)=>onChange(e.target.value)}

            />
            <button onClick={() => setToggle(!toggle)}>Toggle Text Color</button>
        </div>
    )
}
export default InputBox