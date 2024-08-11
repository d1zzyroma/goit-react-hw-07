import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Встановлюємо базову URL для axios
axios.defaults.baseURL = "https://66b487119f9169621ea354b1.mockapi.io/";

// Асинхронна операція для отримання контактів
export const getContactsThunk = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Асинхронна операція для видалення контакту
export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Асинхронна операція для додавання контакту
export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
