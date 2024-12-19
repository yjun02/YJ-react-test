import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import List from "./components/List";
import Detail from "./components/Detail";
import Jstest from "./components/Jstest";

function App() {
    return (
        <div className="App">
            <Test />
            <Jstest />
            <Routes>
                <Route path="/list" element={<List />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
