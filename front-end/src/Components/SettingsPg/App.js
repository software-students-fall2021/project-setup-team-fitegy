import logo from './logo.svg';
import Title from './Title';
import Account from './Account';
import Pfp from './Pfp';
import './App.css';
import BackButton from './BackButton';
import Profile from './Profile';




function App() {
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
        <br></br>
        <br></br>
        {/*TODO, change link to button, add backend to change image, currently links to google for placeholder*/}
        <a href="http://www.google.com"> Change Profile Picture</a>
      </header>


      <br></br>
      
      {/*Two flex boxes for the account and profile*/}
      <Account />
      <br></br>
      <Profile />

    </div>
  );
}

export default App;

