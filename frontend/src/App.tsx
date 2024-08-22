import React from "react";
import "./App.css";
import Layout from "./layout";
import Home from "./areas/Home";
import { AlertProvider } from "./contexts/AlertContext";

function App() {
  return (
    <AlertProvider>
      <div className="App">
        <Layout>
          <Home />
        </Layout>
      </div>
    </AlertProvider>
  );
}

export default App;
