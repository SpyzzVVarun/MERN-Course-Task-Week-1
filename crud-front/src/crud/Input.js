const Input = ({handleSubmit,name,setName}) => {

    return ( 
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input className="input"
                type="text" 
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                style={{width: "50%"}}
                autoFocus
                required
            />
            <br></br>
            <button className="buttonSubmit" >Submit</button>
            <button className="buttonCancel" onClick={(e)=>{
                e.preventDefault()
                setName("")}} >Clear</button>
        </form>
        </div>
        
     );
}
 
export default Input;
