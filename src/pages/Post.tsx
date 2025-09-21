import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import { useToast } from "@/hooks/use-toast";

const Post = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
  });
  const { toast } = useToast();


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Left Side - Branding */}
        <div className="flex items-center justify-center p-8 lg:p-16 relative">
          <div className="max-w-md text-center lg:text-left text-white relative z-10">
            <div className="flex items-center justify-center lg:justify-start mb-12">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <Heart className="h-10 w-10 text-white fill-white" />
              </div>
              <span className="text-3xl font-bold ml-4">ShareCare</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Post A New Resources
            </h1>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Connect with others, share resources, and make a difference in your community.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">10,000+</div>
                <div className="text-white/80 text-sm font-medium">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80 text-sm font-medium">NGOs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">25,000+</div>
                <div className="text-white/80 text-sm font-medium">Lives Impacted</div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-16 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="rightForm rightpost">
          <div className="flex items-center justify-center p-8 lg:p-16 bg-background/95 backdrop-blur-xl">
          <div className=" max-w-md">
            <div className="text-center mb-10">
              <h2 className="signHead text-4xl font-bold mb-3 text-foreground">Post Resource</h2>
              <p className="text-muted-foreground text-lg">Join thousands of people making a difference</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-foreground font-medium">Title</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="title"
                      type="text"
                      placeholder="Title"
                      className="pl-12 py-6 bg-muted/50 border-muted text-foreground placeholder:text-muted-foreground rounded-xl"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-foreground font-medium">Category</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="category"
                      type="text"
                      placeholder="Category"
                      className="pl-12 py-6 bg-muted/50 border-muted text-foreground placeholder:text-muted-foreground rounded-xl"
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-foreground font-medium">Content</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="content"
                    type="content"
                    placeholder="Content"
                    className="textarea pl-12 py-6 bg-muted/50 border-muted text-foreground placeholder:text-muted-foreground rounded-xl"
                    value={formData.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                    required
                  />
                </div>
              </div>

            

              

              <Button 
                type="submit" 
                className="w-full bg-button-gradient hover:opacity-90 hover:scale-105 text-white text-lg py-7 rounded-2xl font-semibold shadow-glow-primary transition-all duration-300 mt-8"
              >
                Post Recource
              </Button>
            </form>

            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;