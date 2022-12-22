import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get("http://jsonplaceholder.typicode.com/posts");
    const posts = axiosRes.data;
    res.status(200).json(posts.slice(0, 10));
  } catch (error) {
    console.error(error.message);
    res.status(error.status || 400).json({ message: "API Error: " + error.message });
  }
};
