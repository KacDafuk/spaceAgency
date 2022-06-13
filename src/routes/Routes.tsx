import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Crew from "../pages/Crew/Crew";
import Destination from "../pages/Destination/Destination";
import Technology from "../pages/Technology/Technology";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Switch>
  );
};

export default Routes;
