import Title from './Title';
import Account from './Account';
import Pfp from './Pfp';
import './App.css';
import BackButton from './BackButton';
import Profile from './Profile';


function handleClick() {
  
  //fetch('http://localhost:3001/api/settings/')
  //.then(res => res.json());

  alert("Test Click Response")

};


function SettingsF() {
  return(
    <div className="App">
      <header className="App-header">

        {/* Title of the Page, Says Settings and is Centered with the Profile Picture Displayed*/}
       
        {/* Just a link, could make a button if time permits, but it works fine */}
        <BackButton />
      
        <Title />
        
        {/*Profile Picture with spacing*/}
  
        <Pfp />
        
       
        <br></br>

        <button onClick={handleClick}>  Change Profile Picture </button>
      </header>


      <br></br>
      
      {/*Two flex boxes for the account and profile*/}
      <Account />
      <br></br>
      <Profile />

    </div>
  );
}

export default SettingsF;

