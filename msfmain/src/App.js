import './App.css';
import { PlanProvider } from './PlanContext';
import MultiStepForm from './MultiStepForm';

function App() {
  return (
    <div className="App">
    <PlanProvider>
    <MultiStepForm/>
    </PlanProvider>
    </div>
  );
}


export default App;
