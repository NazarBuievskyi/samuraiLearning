import React from 'react';
import './App.css';


function hello() {
    alert('Hello')
}

hello()


function App() {
    return (
        <div className="App">
            Hello, samurai! Let's go!
            <Start/>
            <Start/>
            <Start/>
            <Start/>
            <Start/>
            <Accordion />
        </div>

    );
}


function Start() {
    return <div>start</div>
}


function Accordion() {
    return (
        <div>
            <AccordinTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordinTitle() {
    return <h3>Menu</h3>
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>)
}


export default App;
