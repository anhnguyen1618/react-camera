import React from 'react';
import { render } from 'react-dom';
import Example from './Example.jsx'

const renderApp = (Component) => {
  render(
    <Component/>,
    document.getElementById('app')
  )
}

renderApp(Example)
