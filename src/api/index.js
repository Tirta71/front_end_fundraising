import axios from "axios";

export default async function Fundraising(req, res) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Mengambil URL API dari variabel lingkungan
    const response = await axios.get(`${apiUrl}/fundraising`);
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
