import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import RequireAuth from './components/RequireAuth';

//page & layout import
import Homepage from "./pages/Homepage";
import Story from "./pages/Story";
import SiteHeader from "./components/SiteHeader"
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Login />} />
            
              {/*Protected routes, children routes get released based on token stored in cookies (see RequireAuth in components folder) */}
              <Route element={<RequireAuth/>}>
                {/* <Route element={<VerifyToken/>}> */}
                  <Route path="/homepage" element={<Homepage />} />
                  <Route path="/story/:id" element={<Story />} />
                {/* </Route> */}
              </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
