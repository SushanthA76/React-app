import Information from "./components/information/Information";
import Link from "./components/Links/Link";
import Navbar from "./components/Navbar";
import Profile from "./components/profile/Profile";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="body">
        <div className="profile">
        <Profile/>
        </div>
        <div className="information">
          <Information></Information>
        </div>
        
        <div className="link">
          <Link></Link>
        </div>
        
      </div>

    </div>
  );
}

export default App;
