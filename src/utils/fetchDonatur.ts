import axios from "axios";

export interface Donatur {
  id: number;
  name: string;
  phone_number: string;
  fundraising_id: number;
  total_amount: number;
  notes: string;
  is_paid: boolean;
  proof: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export const fetchDonaturs = async (
  id_fundraising: number
): Promise<Donatur[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get<Donatur[]>(
      `${apiUrl}donaturs/fundraising/${id_fundraising}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching donaturs:", error);
    return [];
  }
};
