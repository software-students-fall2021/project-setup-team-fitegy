
import Title from './Title';
import Account from './Account';
import Pfp from './Pfp';
import './App.css';
import BackButton from './BackButton';
import Profile from './Profile';


function handleClick() {

  alert(fetch('http://localhost:3001/api/settings/'));
  
};


function Settings() {
  return(
    <div className="App">
      <header className="App-header">

        {/* Title of the Page, Says Settings and is Centered with the Profile Picture Displayed*/}
        <BackButton />
        <Title />
        
        
        {/*Profile Picture with spacing*/}
        <br></br>
        <Pfp />
        <br></br>

    
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

export default Settings;

