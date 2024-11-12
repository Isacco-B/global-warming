import { useMemo } from "react";

export const useTimeFilter = (
  data: { [key: string]: string | number }[],
  timeRange: string,
  dateKey: string
) => {
  return useMemo(() => {
    if (timeRange === "all-time") {
      return data;
    }

    const referenceDate = new Date(data[data.length - 1][dateKey]);
    let yearsToSubtract = 5;

    if (timeRange === "10-year") {
      yearsToSubtract = 10;
    }

    const startDate = new Date(referenceDate);
    startDate.setFullYear(startDate.getFullYear() - yearsToSubtract);

    return data.filter((item) => new Date(item[dateKey]) >= startDate);
  }, [data, timeRange, dateKey]);
};
