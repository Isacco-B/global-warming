import { BLUR_FADE_DELAY } from "@/constants";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { FormattedNitrousOxideData } from "@/services/data";
import { ChartCardWrapper } from "@/components/ChartCardWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import useTitle from "@/hooks/useTitle";


function NitrousOxidePage() {
  useTitle("Nitrous Oxide levels");
  const { data } = useLoaderData() as { data: FormattedNitrousOxideData[] };

  return (
    <div className="space-y-4">
      <Link to="/" className="inline-flex items-center">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Go Back
      </Link>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Nitrous Oxide levels</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <p className="max-w-full text-pretty font-sans leading-normal">
          Nitrous oxide is a gas that is produced by the combustion of fossil
          fuel and solid waste, nitrogen-base fertilizers, sewage treatment
          plants, natural processes, and other agricultural and industrial
          activities. It is the third largest heat-trapping gas in the
          atmosphere and the biggest ozone-destroying compound emitted by human
          activities. For more detailed information please visit:{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3306630/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            Stratospheric ozone depletion due to nitrous oxide: influences of
            other gases
          </a>{" "}
          and{" "}
          <a
            href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            EPA: Nitrous Oxide Emissions.
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
          title="Nitrous Oxide Levels"
          height={300}
          enableFilter={true}
        />
      </BlurFade>
    </div>
  );
}

export default NitrousOxidePage;
