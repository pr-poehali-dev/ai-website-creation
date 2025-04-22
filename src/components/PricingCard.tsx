import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

const PricingCard = ({ title, price, description, features, popular }: PricingCardProps) => {
  return (
    <Card className={`border ${popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"} flex flex-col h-full`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-b-md mx-auto">
          Популярный выбор
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Бесплатно" && <span className="text-muted-foreground ml-1">/мес</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Check size={12} />
              </div>
              <span className="text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${popular ? "" : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"}`} 
          variant={popular ? "default" : "outline"}
        >
          Выбрать план
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;