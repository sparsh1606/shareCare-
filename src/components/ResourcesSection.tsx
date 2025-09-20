import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ResourceCard from "./ResourceCard";
import { resources } from "../data/data";

const ResourcesSection = () => {
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className=" subhead text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent ">
              Latest Resources
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the newest resources shared by our community members and find what you need most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="viewRes">
            <Link to="/signup">
              View All Resources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;