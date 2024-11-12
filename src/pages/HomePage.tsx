import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ServiceCard } from "@/components/ServiceCard";
import { BLUR_FADE_DELAY } from "@/constants";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import useTitle from "@/hooks/useTitle";

export function HomePage() {
  useTitle("Home");
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="flex-col flex flex-1 space-y-1.5 items-center justify-center text-center">
            <Avatar className="size-32 sm:size-44">
              <AvatarImage
                src={"/global-warming.png"}
                alt={"global warming"}
                className="object-contain"
              />
              <AvatarFallback>{"CL"}</AvatarFallback>
            </Avatar>
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              yOffset={8}
              text="Climate Change: The Facts That Matter."
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text="Tracking our planet's vital signs through scientific data"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="max-w-full text-pretty font-sans leading-normal">
            We provide clear, <strong>comprehensive</strong> data visualization
            and analysis of key climate indicators that shape our understanding
            of global warming. Our <strong>mission</strong> is to make climate
            science accessible and actionable through accurate, up-to-date
            information from trusted scientific sources.
          </div>
        </BlurFade>
      </section>
      <section id="charts">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Explore our data</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <ServiceCard
              altText={"TT"}
              logoUrl={"/thermometer.svg"}
              title={"Temperature Trends"}
              href="/temperature"
            >
              <p>
                <strong>
                  Global temperatures have risen dramatically since the
                  Industrial Revolution, with the majority of the increase
                  occurring in the past 40 years
                </strong>
                . Our temperature visualization presents this acceleration,
                showing that the Earth's average temperature has increased by
                approximately 1.1°C since pre-industrial times.
              </p>
            </ServiceCard>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ServiceCard
              altText={"CD"}
              logoUrl={"/co2.svg"}
              title={"Carbon Dioxide Levels"}
              href="/co2"
            >
              <p>
                <strong>
                  Current CO2 concentrations are higher than at any point in the
                  past 800,000 years, driven by increased industrial activity
                  and fossil fuel consumption since the 1950s
                </strong>
                . By analyzing ancient ice cores, scientists have reconstructed
                this long-term trend.
              </p>
            </ServiceCard>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <ServiceCard
              altText={"MC"}
              logoUrl={"/methane.svg"}
              title={"Methane Concentrations"}
              href="/methane"
            >
              <p>
                <strong>
                  Methane is a more potent greenhouse gas than CO2 in the short
                  term, and its atmospheric levels are rising faster than any
                  time since record-keeping began
                </strong>
                . Major sources include agriculture, natural wetlands, and
                fossil fuel extraction.
              </p>
            </ServiceCard>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <ServiceCard
              altText={"NO"}
              logoUrl={"/nitrous.svg"}
              title={"Nitrous Oxide Analysis"}
              href="/nitrous-oxide"
            >
              <p>
                <strong>
                  Nitrous oxide remains in the atmosphere for over a century and
                  has nearly 300 times the heat-trapping power of CO2
                </strong>
                . Modern agricultural practices, especially synthetic fertilizer
                use, are the largest source of human-caused N2O emissions.
              </p>
            </ServiceCard>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ServiceCard
              altText={"PI"}
              logoUrl={"/iceberg.svg"}
              title={"Polar Ice Coverage"}
              href="/polar-ice"
            >
              <p>
                <strong>
                  Arctic sea ice is declining at a rate of about 13% per decade,
                  with the most dramatic losses occurring in summer months
                </strong>
                . This loss creates a feedback loop where less reflective ice
                leads to more heat absorption and further warming.
              </p>
            </ServiceCard>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <h2 className="text-xl font-bold">Why This Matters</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="max-w-full text-pretty font-sans leading-normal mt-2 sm:mt-0">
            <p>Climate change affects every aspect of life on Earth:</p>
            <ul className="list-disc flex flex-col sm:flex-row pl-4 mt-2 text-muted-foreground">
              <div className="sm:w-1/2">
                <li>Rising sea levels threaten coastal communities</li>
                <li>Extreme weather events become more frequent</li>
              </div>
              <div>
                <li>Agricultural patterns shift, affecting food security</li>
                <li>Ecosystems face unprecedented adaptation challenges</li>
              </div>
            </ul>
          </div>
        </BlurFade>
      </section>
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <h2 className="text-xl font-bold">Take Action</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="max-w-full text-pretty font-sans leading-normal mt-2 sm:mt-0">
            <p>Understanding climate data empowers informed decision-making:</p>
            <ul className="list-disc flex flex-col sm:flex-row pl-4 mt-2 text-muted-foreground">
              <div className="sm:w-1/2">
                <li>Stay informed with our regular data updates</li>
                <li>Share these visualizations to raise awareness</li>
              </div>
              <div>
                <li>Support climate science and research</li>
                <li>Make climate-conscious choices in daily life</li>
              </div>
            </ul>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}

export default HomePage;
