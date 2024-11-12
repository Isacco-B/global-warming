import { apiClient } from "../api";

type NitrousOxideData = {
  date: string;
  average: string;
  trend: string;
};

export type FormattedNitrousOxideData = {
  date: string;
  average: number;
  trend: number;
};

export const fetchNitrousOxideData = async () => {
  try {
    const response = await apiClient.get<{ nitrous: NitrousOxideData[] }>(
      "/nitrous-oxide-api"
    );

    const groupedData = response.data.nitrous.reduce(
      (acc: Record<string, NitrousOxideData>, { date, average, trend }) => {
        const currentYear = date.split(".")[0];

        if (!acc[currentYear]) {
          acc[currentYear] = { date: currentYear, average, trend };
        }

        return acc;
      },
      {}
    );

    const formattedData: FormattedNitrousOxideData[] = Object.values(
      groupedData
    ).map(({ date, average, trend }) => {
      return {
        date: date,
        average: parseFloat(average),
        trend: parseFloat(trend),
      };
    });

    return formattedData;
  } catch (error) {
    console.error("Error fetching nitrous oxide data:", error);
    throw error;
  }
};
