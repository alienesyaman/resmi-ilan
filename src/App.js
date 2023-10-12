import "./App.css";
import News from "./components/News";
import jsonData from "./components/data.json";
import jsonData2 from "./components/data2.json";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsinside from "./components/Newsinside";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<News data={jsonData} />} />

          <Route
            path="/Newsinside"
            element={<Newsinside data2={jsonData2} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
