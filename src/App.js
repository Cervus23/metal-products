import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import Header from "./containers/Header";
import Banner from "./containers/Banner";
import "./App.css";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Banner />
      </div>
    </Provider>
  );
}

export default App;
