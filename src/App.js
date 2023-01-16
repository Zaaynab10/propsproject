import MyImage from './profile/img/marylin.jpg'
import Profile from './profile/profile'
import Nom from './profile/profile'

function App() {
  const nom=<Nom fullName="Reew"/>
  return (
    <div className="App">
    <Profile fullName="Marylin Monroe" bio="27ans" profession="Actrice" > 
   
      <img style={{height:"500px" , width:"400px",position:"absolute" , left:"20vw"}}src={MyImage}/>
     </Profile>
    </div>
  );
}

export default App;
