import { BLUR_FADE_DELAY } from "@/constants";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { FormattedCO2Data } from "@/services/data";
import { ChartCardWrapper } from "@/components/ChartCardWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import useTitle from "@/hooks/useTitle";

function CarbonDioxidePage() {
  useTitle("Carbon Dioxide levels");
  const { data } = useLoaderData() as { data: FormattedCO2Data[] };

  return (
    <div className="space-y-4">
      <Link to="/" className="inline-flex items-center">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Go Back
      </Link>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Carbon Dioxide levels</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <p className="max-w-full text-pretty font-sans leading-normal">
          For thousands of years, the natural concentration of CO2 in earth
          atmosphere was around 280 ppm. From the beginning of the industrial
          revolution, human activities like the burning of fossil fuels,
          deforestation, and livestock have increased this amount by more than
          30%. For more information about prehistoric CO2 concentration, current
          and future consequences please visit:{" "}
          <a
            href="https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            Climate Change: Atmospheric Carbon Dioxide
          </a>{" "}
          and{" "}
          <a
            href="https://climate.nasa.gov/climate_resources/24/graphic-the-relentless-rise-of-carbon-dioxide/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            The relentless rise of carbon dioxide.
          </a>
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <ChartCardWrapper
          data={data}
          dateKey="date"
          areas={[
            { dataKey: "cycle", label: "Cycle", color: "hsl(var(--chart-1))" },
            {
              dataKey: "trend",
              label: "Trend",
              color: "hsl(var(--chart-2))",
            },
          ]}
          title="Carbon Dioxide Levels"
          height={300}
          enableFilter={true}
        />
      </BlurFade>
    </div>
  );
}

export default CarbonDioxidePage;
