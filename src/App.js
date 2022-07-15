import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import RequireAuth from './components/RequireAuth';

//page & layout import
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./components/SiteHeader"
import Login from './pages/Login'

function App() {

  return (
    
    <Router>
      <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Login />} />

              <Route element={<RequireAuth/>}>
                <Route path="/homepage" element={<Homepage />} />

                <Route path="/details/:id" element={<ReviewDetails />} />

              </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
