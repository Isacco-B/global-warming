import { BLUR_FADE_DELAY } from "@/constants";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { FormattedTemperatureData } from "@/services/data";
import { ChartCardWrapper } from "@/components/ChartCardWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import useTitle from "@/hooks/useTitle";

function TemperaturePage() {
  useTitle("Global Temperature Anomalies");
  const { data } = useLoaderData() as { data: FormattedTemperatureData[] };

  return (
    <div className="space-y-4">
      <Link to="/" className="inline-flex items-center">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Go Back
      </Link>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Global Temperature Anomalies</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <p className="max-w-full text-pretty font-sans leading-normal">
          The current global warming rate is not natural. From 1880 to 1981 was
          (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to
          (0.18°C / 0.32°F){" "}
          <a
            href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            Climate Change: Global Temperature
          </a>
          . Some of the past sudden increase on global temperature present in
          this graph, correspond to the Roman Warm Period and the Medieval Warm
          Period. These events were at regional and not global scale.{" "}
          <a
            href="https://www.ipcc.ch/report/ar4/wg1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            AR4 Climate Change 2007: The Physical Science Basis
          </a>{" "}
          . The total average global temperature rise since the industrial
          revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is
          warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4
          °C / 7.2 °F). Please visit these scientific publications for more
          details:{" "}
          <a
            href="https://www.igsoc.org/annals/46/a46a005.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            . Earth temperature and the proportion of gases such as Co2.
          </a>
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <ChartCardWrapper
          data={data}
          dateKey="date"
          areas={[
            { dataKey: "land", label: "Land", color: "hsl(var(--chart-1))" },
            {
              dataKey: "station",
              label: "Station",
              color: "hsl(var(--chart-2))",
            },
          ]}
          title="Temperature Trends"
          height={300}
          enableFilter={true}
        />
      </BlurFade>
    </div>
  );
}

export default TemperaturePage;
