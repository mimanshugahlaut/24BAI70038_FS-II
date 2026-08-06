import './App.css';
import Home from './components/Home';

function App() {
  const user = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Chandigarh"
  };

  return (
    <>
      <h1>Hello</h1>
      <Home user={user} />
    </>
  );
}

export default App;