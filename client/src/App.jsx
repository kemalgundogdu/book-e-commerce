import { BrowserRouter as Router } from "react-router";

import Home from "./pages/Home";

function App() {
  return (
    <div className="font-mono">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
