import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';

function App() {
  const handlname = (Fullname) => alert(Fullname);
  return (
    <div className="App">
      <Profile
        Fullname="ghaith"
        Bio="Student"
        Profession="student"
        handlname={handlname}
      />
    </div>
  );
}
export default App;
