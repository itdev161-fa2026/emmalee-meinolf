import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

//Get all posts
export const getPosts = async () => {

    try{

        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    }
    catch (error){

        console.error('Error fetching posts:', error);
        throw error;
    }
};

//Get single post by ID
export const getPostByID = async (id) => {

    try{

        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response.data;
    }
    catch (error){

        console.error('Error fetching post:', error);
        throw error;
    }
};


