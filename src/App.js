import './App.css';
import Input from './Input';

function App() {
  return (
  <div>
    <h1>Board Foot Calc</h1>
    <form>
      <Input label="Price" placeholder='$' name="price"/>
      <Input label="Length" placeholder='Length' name="length"/>
      <Input label="Width" placeholder='Width' name="width"/>
      <Input label="Thickness" placeholder='Thickness' name="thickness"/>
    </form>
  </div>
  );
}

export default App;
