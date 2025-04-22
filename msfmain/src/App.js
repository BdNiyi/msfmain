import First from './first';
import Second from './second';
import './App.css';
import { PlanProvider } from './PlanContext';

function App() {
  return (
    <div className="App">
    <PlanProvider>
      <First />
      <Second />
    </PlanProvider>
    </div>
  );
}


export default App;
