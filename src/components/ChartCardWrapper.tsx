import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { AreaChartComp } from "./charts/AreaChartComp";
import { BarChartComp } from "./charts/BarChartComp";
import { SelectChartType } from "./SelectChartType";
import { SelectChartTime } from "./SelectChartTime";
import { useTimeFilter } from "@/hooks/useTimeFilter";

type AreaConfig = {
  dataKey: string;
  label: string;
  color: string;
};

export type ChartProps = {
  data: { [key: string]: string | number }[];
  dateKey: string;
  areas: AreaConfig[];
  height: number;
};

type ChartCardWrapperProps = {
  title: string;
  enableFilter?: boolean;
} & ChartProps;

export const ChartCardWrapper = ({
  data,
  dateKey,
  areas,
  title,
  height = 250,
  enableFilter = true,
}: ChartCardWrapperProps) => {
  const [timeRange, setTimeRange] = useState<"all-time" | "10-year" | "5-year">(
    "all-time"
  );
  const [chartType, setChartType] = useState<"area-chart" | "bar-chart">(
    "area-chart"
  );

  const filteredData = enableFilter
    ? useTimeFilter(data, timeRange, dateKey)
    : data;

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{`from ${timeRange} to present`}</CardDescription>
        </div>
        {enableFilter && (
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <SelectChartType
              chartType={chartType}
              setChartType={setChartType}
            />
            <Separator orientation="vertical" className="h-8 hidden sm:block" />
            <SelectChartTime
              timeRange={timeRange}
              setTimeRange={setTimeRange}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        {chartType === "area-chart" ? (
          <AreaChartComp
            height={height}
            data={filteredData}
            dateKey={dateKey}
            areas={areas}
          />
        ) : (
          <BarChartComp
            height={height}
            data={filteredData}
            dateKey={dateKey}
            areas={areas}
          />
        )}
      </CardContent>
    </Card>
  );
};
