import { apiClient } from "../api";

type CO2Data = {
  year: string;
  cycle: string;
  trend: string;
};

export type FormattedCO2Data = {
  date: string;
  cycle: number;
  trend: number;
};

export const fetchCO2Data = async (): Promise<FormattedCO2Data[]> => {
  try {
    const response = await apiClient.get<{ co2: CO2Data[] }>("/co2-api");
    const groupedData = response.data.co2.reduce(
      (acc: Record<string, CO2Data>, { year, cycle, trend }) => {
        if (!acc[year]) {
          acc[year] = { year, cycle, trend };
        }

        return acc;
      },
      {}
    );

    const formattedData: FormattedCO2Data[] = Object.values(groupedData).map(
      ({ year, cycle, trend }) => {
        return {
          date: year,
          cycle: parseFloat(cycle),
          trend: parseFloat(trend),
        };
      }
    );

    return formattedData;
  } catch (error) {
    console.error("Error fetching CO2 data:", error);
    throw error;
  }
};
