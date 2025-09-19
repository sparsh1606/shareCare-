import { Button } from "@/components/ui/button";
import NGOCard from "./NGOCard";
import { ngos } from "../data/data";

const NGOsSection = () => {
  

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className=" subhead text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent ">
              Featured NGOs
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with trusted organizations making a real difference in communities around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ngos.map((ngo, index) => (
            <NGOCard key={index} {...ngo} />
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default NGOsSection;