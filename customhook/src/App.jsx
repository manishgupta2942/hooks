
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Localstoragehook from './Hook/Localstoragehook';

function App() {
  // const [name, setName] = useState(localStorage.getItem('username') ? localStorage.getItem('username') : '');

  // useEffect(() => {
  //   localStorage.setItem('username', name);
  // }, [name]);
  const [name,setName]= Localstoragehook('username','')
  const [ID,setId]= Localstoragehook('userId','')

  return (
    <>
      <input 
        type="text" 
        placeholder="Enter your Username" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <h1>Your username is: {name}</h1>
      <input 
        type="text" 
        placeholder="Enter your UserId" 
        value={ID} 
        onChange={(e) => setId(e.target.value)} 
      />
      <h1>Your username is: {ID}</h1>
    </>
  );
}

export default App;
