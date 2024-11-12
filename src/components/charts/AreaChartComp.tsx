import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { ChartProps } from "../ChartCardWrapper";

export function AreaChartComp({
  data,
  dateKey,
  areas,
  height = 250,
}: ChartProps) {

  const chartConfig = areas.reduce((acc, area) => {
    acc[area.dataKey] = {
      label: area.label,
      color: area.color,
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto w-full"
      style={{ height: `${height}px` }}
    >
      <AreaChart data={data}>
        <defs>
          {areas.map((area) => (
            <linearGradient
              key={area.dataKey}
              id={`fill${area.dataKey}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={area.color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={area.color} stopOpacity={0.1} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={dateKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
              year: "numeric",
            });
          }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  year: "numeric",
                });
              }}
              indicator="dot"
            />
          }
        />
        {areas.map((area) => (
          <Area
            key={area.dataKey}
            dataKey={area.dataKey}
            type="natural"
            fill={`url(#fill${area.dataKey})`}
            stroke={area.color}
            stackId="a"
          />
        ))}
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  );
}
