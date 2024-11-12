import { apiClient } from "../api";

type MethaneData = {
  date: string;
  average: string;
  trend: string;
};

export type FormattedMethaneData = {
  date: string;
  average: number;
  trend: number;
};

export const fetchMethaneData = async (): Promise<FormattedMethaneData[]> => {
  try {
    const response = await apiClient.get<{ methane: MethaneData[] }>(
      "/methane-api"
    );

    const groupedData = response.data.methane.reduce(
      (acc: Record<string, MethaneData>, { date, average, trend }) => {
        const currentYear = date.split(".")[0];

        if (!acc[currentYear]) {
          acc[currentYear] = { date: currentYear, average, trend };
        }

        return acc;
      },
      {}
    );

    const formattedData: FormattedMethaneData[] = Object.values(
      groupedData
    ).map(({ date, average, trend }) => {
      return {
        date,
        average: parseFloat(average),
        trend: parseFloat(trend),
      };
    });

    return formattedData;
  } catch (error) {
    console.error("Error fetching Methane data:", error);
    throw error;
  }
};
