import axios, { AxiosInstance } from "axios";

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "https://api.example.com", // your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});