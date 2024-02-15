// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../BlogList.css';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/blogs/${id}`);
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div className="blog-list-container">
            <h2>All Blogs</h2>
            {blogs.map(blog => (
                <div className="blog-item" key={blog._id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p>Author: {blog.author}</p>
                    <div className="actions">
                        <Link to={`/blogs/${blog._id}`} className="view-btn">View</Link>
                        <Link to={`/blogs/edit/${blog._id}`} className="edit-btn">Edit</Link>
                        <button onClick={() => handleDelete(blog._id)} className="delete-btn">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
