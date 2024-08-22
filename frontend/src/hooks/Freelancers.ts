import axios from "axios";
import { createContactType } from "../components/ContactsList/dtos";

export const fetchContacts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/contacts/');
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
};

export const createContact = async (content : createContactType) => {
    try {
  
      const response = await axios.post('http://127.0.0.1:8000/contacts/create/', content, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
};