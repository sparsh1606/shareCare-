import { Heart, MapPin, Calendar, Trophy, Users, Package, PencilIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProfileCard = () => {
  return (
    <Card className="profilecard bg-gradient-card p-8 border-sharecare-border shadow-card min-h-[200px]">
      <div className="mx-6 my-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Profile Photo */}
        <div className="profileuser relative group flex-shrink-0">
          <i className="usericon fa-solid fa-user"></i>
          
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left space-y-3">
          {/* Name and Username */}
          <div>
            <span className="my-3 text-2xl font-bold text-foreground mx-4">Asha Foundation</span><i className="editicon fa-solid fa-pen"></i>
            <div></div>
            <span className="my-3 text-muted-foreground mx-4">@priyamehta_asha</span><i className="editicon fa-solid fa-pen"></i>
          </div>

          {/* Location */}
          <div className=" mx-4 my-3 flex items-center justify-center md:justify-start text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Sector 18, Noida, Uttar Pradesh</span>
          </div>

          {/* Bio */}
          <p className="mx-4 my-3 text-sm text-muted-foreground max-w-md">
            Empowering communities through education and healthcare. 
            Building bridges between those who need help and those who can provide it.
          </p>

          {/* Lives Impact Text */}
          <div className="mx-4 my-3 flex items-center text-muted-foreground">
            <Heart className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm">2,847 Lives Impacted</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;