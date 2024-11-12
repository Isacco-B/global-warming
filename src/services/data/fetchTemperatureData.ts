import { apiClient } from "../api";

type TemperatureData = {
  time: string;
  station: string;
  land: string;
};

export type FormattedTemperatureData = {
  date: string;
  station: number;
  land: number;
};

export const fetchTemperatureData = async (): Promise<
  FormattedTemperatureData[]
> => {
  try {
    const response = await apiClient.get<{ result: TemperatureData[] }>(
      "/temperature-api"
    );

    const groupedData = response.data.result.reduce(
      (acc: Record<string, TemperatureData>, { time, station, land }) => {
        const currentYear = time.split(".")[0];

        if (!acc[currentYear]) {
          acc[currentYear] = { time: currentYear, station, land };
        }

        return acc;
      },
      {}
    );

    const formattedData: FormattedTemperatureData[] = Object.values(
      groupedData
    ).map(({ time, station, land }) => {
      return {
        date: time,
        station: parseFloat(station),
        land: parseFloat(land),
      };
    });

    return formattedData;
  } catch (error) {
    console.error("Error fetching Temperature data:", error);
    throw error;
  }
};
