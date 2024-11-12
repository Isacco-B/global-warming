import { Loader2 } from "lucide-react";

export function SuspenseFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center min-h-[80dvh]">
      <Loader2 className="animate-spin" size={44} />
    </div>
  );
}
