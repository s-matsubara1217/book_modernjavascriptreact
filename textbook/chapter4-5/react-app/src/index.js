import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';
import { TailwindCss } from './components/TailwindCss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CssModules />
    <StyledJsx />
    <StyledComponents />
    <Emotion />
    <TailwindCss/>
  </React.StrictMode>
);
