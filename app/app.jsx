// Coding by Felipe Alfonso Gonzalez -  Software Engineer/Developer  CC 2018
// ---------------------------------------------------------------

// for future adjustaments from other coders please refactoring is necessary.

// import react and its dom
import React from 'react'
import ReactDOM from 'react-dom'

// import the main Component
import Greeter from './app/components/greeter'

// var to make a welcome ... from me
// Pass data to the components if necessary
const title = 'Theatherflix'
const message = 'A visual tool for wiring the Internet of Things, digital movies, stored in your HD. "The cousin of Netflix in the future".'

// the renderer
ReactDOM.render(
     <Greeter title={title} message={message} />,
     document.getElementById('app')
    );
