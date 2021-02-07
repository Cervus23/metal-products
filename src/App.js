import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import Header from "./containers/Header/index";
import "./App.css";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
