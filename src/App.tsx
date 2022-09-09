import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Start from "./components/Raiting";
import Raiting from "./components/Raiting";



function App() {
    return (
        <div>
            <Raiting value = {3}/>
            <Accordion title ={"Menu"} collapse = {true}/>
            <Raiting value = {1}/>
            <Accordion title ={"Users!!"} collapse = {true}/>

        </div>


    );
}

export default App;
