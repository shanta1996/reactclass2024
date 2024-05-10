import "./App.css";
import "./style.css";
// import cartReducer from "./redux/reducers/cartReducer";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
// provider is used to pass the data from reducer to component
import store from './store'

import MyRoute from "./MyRoute";
function App() {
  // const store = legacy_createStore(cartReducer);
  return (
    <>
      <Provider store={store}>
        <MyRoute />
      </Provider>
    </>
  );
}

export default App;
