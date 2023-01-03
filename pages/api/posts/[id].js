import axios from "axios";

export default async (req, res) => {
  try {
    const { id } = req.query;
    const axiosRes = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
    const post = axiosRes.data;
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(error.status || 400).json({ message: "API Error: " + error.message });
  }
};
