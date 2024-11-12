import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function ErrorBoundary({msg}: {msg?: string}) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80dvh] text-center">
        <h2 className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
          Oops! Something went wrong.
        </h2>
        {msg && <p className="mb-4 text-lg text-muted-foreground">{msg}</p>}
        <Link to={"/"}>
          <Button>Back to Homepage</Button>
        </Link>
      </div>
    );
}
