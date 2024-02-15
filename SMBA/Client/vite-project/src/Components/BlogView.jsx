// src/components/BlogView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../BlogList.css';

const BlogView = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/blogs/${id}`);
            setBlog(response.data);
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    return (
        <div className="blog-view-container">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
        </div>
    );
};

export default BlogView;
