import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <Avatar className="size-32 sm:size-44 mx-auto">
          <AvatarImage
            src={"/global-warming.png"}
            alt={"global warming"}
            className="object-contain"
          />
          <AvatarFallback>{"CL"}</AvatarFallback>
        </Avatar>
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-8xl">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
          Something's missing.
        </p>
        <p className="mb-4 text-lg text-muted-foreground">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.{" "}
        </p>
        <Link to={"/"}>
          <Button>Back to Homepage</Button>
        </Link>
      </div>
    </div>
  );
}
