import { Header } from './components'
import  AllRoutes  from './routes/AllRoutes'

import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
       <main>
        <AllRoutes />
       </main>
    </div>
  );
}

export default App;
