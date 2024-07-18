import { BrowserRouter } from 'react-router-dom';
import Admin from "./shared/components/Layout/Admin"


function App() {
  return (
    <BrowserRouter>
      <Admin/>
    </BrowserRouter>

  );
}

export default App;
