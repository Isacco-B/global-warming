import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  href: string;
  children: React.ReactNode;
}
export const ServiceCard = ({
  logoUrl,
  altText,
  title,
  href,
  children,
}: ResumeCardProps) => {
  return (
    <Link to={href || "#"} className="block cursor-pointer">
      <Card className="group">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-8">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-base">
            {title}
            <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
          </h3>
        </CardHeader>
        <CardContent className="text-sm text-pretty font-sans">
          {children}
        </CardContent>
      </Card>
    </Link>
  );
};
