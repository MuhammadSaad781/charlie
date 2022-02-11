import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import RiskandEarning from "./RiskandEarning";
import TermsandConditions from "./TermsandConditions";
import PrivacyPolicy from "./PrivacyPolicy";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/TermsandConditions">
            <TermsandConditions />
          </Route>
          <Route path="/RiskandEarning">
            <RiskandEarning />
          </Route>

          <Route path="/PrivacyPolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
