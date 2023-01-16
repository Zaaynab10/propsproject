import PropTypes from "prop-types"
const styleComponent={
 height:"713px",
 position:"relative",
}
const styleNom={
    backgroundColor:"black",
    width:"32vw",
    position:"absolute",
     top:"5vw",
     left:"53vw",
     color:"white",
     fontSize:"3vw"
}
const styleBio={
    position:"absolute",
    top:"10vw",
    left:"53vw",
    color:"white",
    fontSize:"3vw",
    backgroundColor:"black",
    width:"30vw",
}
const styleProfession= {
    position:"absolute",
    top:"15vw",
    left:"53vw",
    color:"white",
    fontSize:"3vw",
    backgroundColor:"rgba(9, 134, 123, 0.393)",
    width:"26vw",
}
const Profile =(props)=>{
const handleName=()=>{alert(props.fullName)}
    return(
        <div style={styleComponent}> 
        <div style={styleNom}>{props.fullName}</div>
        <div style={styleBio}>{props.bio}</div>
        <div style={styleProfession}>{props.profession}</div>
        <div style={{ height:"40vw", width:"10vw", position:"absolute" , top:"73px"}}>{props.children}</div>
        <button  style={{backgroundColor:"red" , position:"relative",top:"39vw",left:"30vw"}} onClick={handleName} > click Me!</button>
        </div>
    )
}
Profile.defaultProps={
    fullName:"Inscrivez un nom",
    bio:"Inscrivez une bio",
   profession:"Inscrivez une profession"

}
Profile.propTypes={
fullName:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string,
}




export default Profile;

