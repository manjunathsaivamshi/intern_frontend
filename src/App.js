import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/register';
import CheckForm from './components/check';
import UpdateForm from './components/update';
import DeleteForm from './components/delete';


function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <CheckForm/>
      <UpdateForm/>
      <DeleteForm/>
    </div>
  );
}

export default App;
