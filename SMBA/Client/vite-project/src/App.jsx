// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from './Components/BlogList';
import BlogView from './Components/BlogView';
import BlogEdit from './Components/BlogEdit';
import './BlogList.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<BlogList />} />
                    <Route path="/blogs/:id" element={<BlogView />} />
                    <Route path="/blogs/edit/:id" element={<BlogEdit />} />
                    {/* Add routes for creating new blogs if needed */}
                    {/* Add a 404 route for handling unknown routes */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
