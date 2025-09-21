import ProfileCard from "@/components/ProfileCard";
import StatsCard from "@/components/StatsCard";
import ResourcesCard from "@/components/Resource";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Profile Section - Horizontal */}
          <ProfileCard />
          
          {/* Stats Section - Two boxes horizontal */}
          <StatsCard />
          
          {/* Resources Section - Full width below */}
          <ResourcesCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;