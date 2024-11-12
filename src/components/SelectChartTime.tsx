import { Clock3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectChartTime({
  timeRange,
  setTimeRange,
}: {
  timeRange: "all-time" | "10-year" | "5-year";
  setTimeRange: (value: "all-time" | "10-year" | "5-year") => void;
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <Clock3 size={16} className="text-muted-foreground" />
      <Select value={timeRange} onValueChange={setTimeRange}>
        <SelectTrigger
          className="w-[160px] rounded-lg sm:ml-auto"
          aria-label="Select time range"
        >
          <SelectValue placeholder="All Time" />
        </SelectTrigger>
        <SelectContent className="rounded-xl">
          <SelectItem value="all-time" className="rounded-lg">
            All Time
          </SelectItem>
          <SelectItem value="5-year" className="rounded-lg">
            Last 5 Years
          </SelectItem>
          <SelectItem value="10-year" className="rounded-lg">
            Last 10 Years
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
