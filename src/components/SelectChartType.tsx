import { ChartNoAxesColumn } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectChartType({
  setChartType,
  chartType,
}: {
  setChartType: (value: "area-chart" | "bar-chart") => void;
  chartType: "area-chart" | "bar-chart";
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <ChartNoAxesColumn size={16} className="text-muted-foreground" />
      <Select value={chartType} onValueChange={setChartType}>
        <SelectTrigger
          className="w-[160px] rounded-lg sm:ml-auto"
          aria-label="Select chart type"
        >
          <SelectValue placeholder="Area Chart" />
        </SelectTrigger>
        <SelectContent className="rounded-xl">
          <SelectItem value="area-chart" className="rounded-lg">
            Area Chart
          </SelectItem>
          <SelectItem value="bar-chart" className="rounded-lg">
            Bar Chart
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
