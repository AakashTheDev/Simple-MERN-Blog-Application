// src/components/BlogEdit.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../BlogList.css';

const BlogEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        author: ''
    });

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/blogs/${id}`);
            setBlogData(response.data);
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/blogs/${id}`, blogData);
            navigate(`/blogs/${id}`);
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    return (
        <div className="blog-edit-container">
            <h2>Edit Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value={blogData.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea name="content" value={blogData.content} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" name="author" value={blogData.author} onChange={handleChange} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default BlogEdit;
