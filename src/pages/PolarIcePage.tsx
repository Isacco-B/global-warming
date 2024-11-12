import { BLUR_FADE_DELAY } from "@/constants";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { FormattedPolarIceData } from "@/services/data";
import { ChartCardWrapper } from "@/components/ChartCardWrapper";
import BlurFade from "@/components/magicui/blur-fade";
import useTitle from "@/hooks/useTitle";


function PolarIcePage() {
  useTitle("Sea Ice Extent");
  const { data } = useLoaderData() as { data: FormattedPolarIceData[] };

  return (
    <div className="space-y-4">
      <Link to="/" className="inline-flex items-center">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Go Back
      </Link>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Sea Ice Extent</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <p className="max-w-full text-pretty font-sans leading-normal">
          The arctic is warming around twice as fast as global average. Some of
          the reasons for this are: The arctic amplification, the albedo effect,
          and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic
          ice cover. From 2010 to present we are losing 12.85% per decade!
          Another consequence is permafrost thawing. This is a process in which
          large amounts of methane is released to the atmosphere, fueling more
          the process of global warming. For more details please visit:{" "}
          <a
            href="https://www.npolar.no/en/themes/climate-change-in-the-arctic/#toggle-id-8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            Climate change in the Arctic
          </a>
          and
          <a
            href="https://www.igsoc.org/annals/46/a46a005.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline italic"
          >
            Recent air-temperature changes in the Arctic.
          </a>
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <ChartCardWrapper
          data={data}
          dateKey="date"
          areas={[
            { dataKey: "value", label: "Value", color: "hsl(var(--chart-1))" },
            {
              dataKey: "anom",
              label: "Anom",
              color: "hsl(var(--chart-2))",
            },
          ]}
          title="Polar Ice Coverage"
          height={300}
          enableFilter={true}
        />
      </BlurFade>
    </div>
  );
}

export default PolarIcePage;
