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
        
        <br></br>
        <Pfp />
        <br></br>

        <br></br>
        <br></br>
        <a href="http://www.google.com"> Change Profile Picture</a>
      </header>


      <br></br>
      
      <Account />
      <br></br>
      <Profile />

    </div>
  );
}

export default App;
