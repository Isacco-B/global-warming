import { apiClient } from "../api";

type PolarIceData = {
  date: string;
  value: string;
  anom: string;
};

export type FormattedPolarIceData = {
  date: string;
  value: number;
  anom: number;
};

export const fetchPolarIceData = async () => {
  try {
    const response = await apiClient.get<{
      [x: string]: any;
      data: PolarIceData[];
    }>("/arctic-api");

    const groupedData = Object.entries(response.data.arcticData.data).reduce(
      (acc: Record<string, PolarIceData>, [key, value]) => {
        const currentYear = key.split("").splice(0, 4).join("");
        const polarIceValue = value as PolarIceData;

        if (!acc[currentYear] && currentYear !== "1988") {
          acc[currentYear] = {
            date: currentYear,
            value: polarIceValue.value,
            anom: polarIceValue.anom,
          };
        }

        return acc;
      },
      {}
    );

    const formattedData = Object.values(groupedData).map(
      ({ date, value, anom }) => {
        return {
          date: date,
          value: parseFloat(value),
          anom: parseFloat(anom),
        };
      }
    );

    return formattedData;
  } catch (error) {
    console.error("Error fetching polar ice data:", error);
    throw error;
  }
};
