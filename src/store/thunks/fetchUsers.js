import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = axios.get("http://localhost:3005/users");
  return response.json;
});

export { fetchUsers };
