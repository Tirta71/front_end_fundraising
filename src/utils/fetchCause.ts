// utils/fetchCause.ts
import axios from "axios";

export interface Category {
  id: number;
  name: string;
}

export interface Cause {
  page: string;
  id: number;
  name: string;
  thumbnail: string;
  about: string;
  totalDonations: number;
  target_amount: number;
  percentage: number;
  is_active: number;
  has_finished: number;
  category: Category; // Tambahkan properti category
}

export const fetchCauses = async (): Promise<Cause[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get<Cause[]>(`${apiUrl}fundraisings`);

    const activeCauses = response.data.filter(
      (cause) => cause.is_active === 1 && cause.has_finished === 0
    );

    return activeCauses;
  } catch (error) {
    console.error("Error fetching causes:", error);
    return [];
  }
};
