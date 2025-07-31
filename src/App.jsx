import React from "react";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import AppContent from "./components/AppContent";

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;


