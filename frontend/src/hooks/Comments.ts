import axios from "axios";

export const fetchComments = async (id : string) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/contacts/${id}/comments/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
};

export const createComments = async (commentCreate : any, id : string) => {
    try {
      const newComment = {
        name : commentCreate.name,
        content : commentCreate.content
      };
  
      const response = await axios.post(`http://127.0.0.1:8000/contacts/${id}/comments/create/`, newComment, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data
    } catch (error) {
      console.error('Error creating contact:', error);
    }
};