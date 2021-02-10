import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import Header from "./containers/Header";
import Banner from "./containers/Banner";
import ServiceSection from "./containers/ServiceSection";
import "./App.css";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Banner />
        <ServiceSection />
      </div>
    </Provider>
  );
}

export default App;
