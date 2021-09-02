import './App.css';
import HandlingEvents from './components/HandlingEvents';
import ClockLifeCycle from './components/ClockLifeCycle';
import ClockByState from './components/ClockByState';
import ClockByProp from './components/ClockByProp';
import LoginControl from './components/conditional rendering/LoginControl';
import PreventRenderings from './components/conditional rendering/PreventRenderings';
import NameForm from './components/forms/NameForm';
import FlavorForm from './components/forms/FlavorForm';
import Calculator from './components/Calculator';

function App() {
  return (
    <div>
      <ClockByProp date={new Date()} />
      <ClockByState />
      <ClockLifeCycle />
      <HandlingEvents />
      <LoginControl />
      <PreventRenderings />
      <NameForm />
      <FlavorForm />
      <Calculator />
    </div>
  );
}

export default App;
