import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ListAllAuthors from './components/ListAllAuthors';
import AddAuthor from './components/AddAuthor';
import OneAuthor from './components/OneAuthor';
import DeleteButton from './components/DeleteButton';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<ListAllAuthors/>} path = "/" />
          <Route element={<AddAuthor/>} path = "/new" />
          <Route element={<OneAuthor/>} path = "/:id" />
          <Route element={<DeleteButton/>} path = "/delete/:id" />
          <Route element={<UpdateAuthor/>} path = "/edit/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
