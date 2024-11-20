import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const handleUpload = async (file: File) => {
  const url = process.env.URL;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "comments-app");
  try {
    const response = await axios.post(url, formData);
    console.log(response);

    return response.data;
  } catch (error) {}
};
