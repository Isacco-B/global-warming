import { BLUR_FADE_DELAY } from "@/constants";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { FormattedMethaneData } from "@/services/data";
import { ChartCardWrapper } from "@/components/ChartCardWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import useTitle from "@/hooks/useTitle";

function MethanePage() {
  useTitle("Methane levels");
  const { data } = useLoaderData() as { data: FormattedMethaneData[] };

  return (
    <div className="space-y-4">
      <Link to="/" className="inline-flex items-center">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Go Back
      </Link>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Methane levels</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <p className="max-w-full text-pretty font-sans leading-normal">
          Methane is a flammable gas formed by geological and biological
          processes. Some of the natural ones are leaks from natural gas systems
          and wetlands. 50-65% of total global methane emissions come from human
          activities. These include livestock, agriculture, oil and gas systems,
          waste from homes and businesses, landfills, and so on. Methane is a
          gas with a global warming potential several times stronger than of
          CO2. For more than 650,000 years, methane concentration in the
          atmosphere was between 350 – 800 ppb. From the beginning of the
          industrial revolution, human activities have increased this amount by
          around 150%. For more information about the methane situation please
          visit:{" "}
          <a
            href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#methane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            EPA: Methane Emissions and NASA: Methane Emissions Continue to Rise
          </a>{" "}
          . For more information about the prehistoric methane concentration,
          please visit:
          <a
            href="https://www.nature.com/articles/nature06950"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            Orbital and millennial-scale features of atmospheric CH4 over the
            past 800,000 years.
          </a>
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <ChartCardWrapper
          data={data}
          dateKey="date"
          areas={[
            {
              dataKey: "average",
              label: "Average",
              color: "hsl(var(--chart-1))",
            },
            {
              dataKey: "trend",
              label: "Trend",
              color: "hsl(var(--chart-2))",
            },
          ]}
          title="Methane Concentrations"
          height={300}
          enableFilter={true}
        />
      </BlurFade>
    </div>
  );
}

export default MethanePage;
