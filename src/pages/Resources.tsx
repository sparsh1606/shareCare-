import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Repeat,
  Share,
  MapPin,
  Clock,
  User,
  TrendingUp,
  UserPlus,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import React from "react";
import { resourcePosts } from "../data/data";
import { suggestedUsers } from "../data/data";
import { trendingTopics } from "../data/data";

const Resources = () => {
  const [resourcePostsData, setResourcePostsData] =
    React.useState(resourcePosts);

  const handleclothingFilter = () => {
    const filteredPosts = resourcePosts.filter(
      (post) => post.category.toLowerCase() === "clothing"
    );
    setResourcePostsData(filteredPosts);
  };
  const handleeducationFilter = () => {
    const filteredPosts = resourcePosts.filter(
      (post) => post.category.toLowerCase() === "education"
    );
    setResourcePostsData(filteredPosts);
  };
  const handlefoodFilter = () => {
    const filteredPosts = resourcePosts.filter(
      (post) => post.category.toLowerCase() === "food"
    );
    setResourcePostsData(filteredPosts);
  };
  const handleFurnitureFilter = () => {
    const filteredPosts = resourcePosts.filter(
      (post) => post.category.toLowerCase() === "furniture"
    );
    setResourcePostsData(filteredPosts);
  };
  const handleOtherFilter = () => {
    const filteredPosts = resourcePosts.filter(
      (post) =>
        !["clothing", "education", "food", "healthcare", "furniture"].includes(
          post.category.toLowerCase()
        )
    );
    setResourcePostsData(filteredPosts);
  };
  const handlehealthcareFilter = () => {
    const filteredPosts = resourcePosts.filter(
      (post) => post.category.toLowerCase() === "healthcare"
    );
    setResourcePostsData(filteredPosts);
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "clothing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "education":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "food":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "healthcare":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div id="resource" className="container mx-auto px-4">
        <div className="flex gap-6">
          {/* Left Sidebar - Suggested Users */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="p-6 ">
              <h3 className="text-lg font-bold mb-4">Filter by choice</h3>
              <div className="space-y-3">
                {/* {suggestedUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-primary">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-sm">{user.name}</span>
                          
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {user.followers} followers • {user.donations} donations
                        </div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={user.isFollowing ? "outline" : "default"}
                      className="text-xs px-3"
                    >
                      {user.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </div>
                ))} */}
                <div className="flex gap-3 flex-wrap">
                  <Button
                    onClick={handleclothingFilter}
                    className="filters bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                  >
                    <i className="fa-solid fa-shirt"></i>Clothing
                  </Button>
                  <Button
                    onClick={handleeducationFilter}
                    className="filters bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                  >
                    <i className="fa-solid fa-book-open"></i>Education
                  </Button>
                  <Button
                    onClick={handlefoodFilter}
                    className="filters bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
                  >
                    <i className="fa-solid fa-utensils"></i>Food
                  </Button>
                  <Button
                    onClick={handlehealthcareFilter}
                    className="filters bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                  >
                    <i className="fa-solid fa-heart-pulse"></i>Healthcare
                  </Button>
                  <Button
                    onClick={handleFurnitureFilter}
                    className="filters bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                  >
                    <i className="fa-solid fa-couch"></i>Furniture
                  </Button>
                  <Button
                    onClick={handleOtherFilter}
                    className="filters bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                  >
                    <i className="fa-solid fa-ellipsis"></i>Other
                  </Button>
                  <Button
                    onClick={() => setResourcePostsData(resourcePosts)}
                    id="clear"
                    className="mx-10 filters bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                  >
                    <i className="fa-solid fa-broom"></i>Clear Filters
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Center Content */}
          <div className="flex-1 max-w-2xl">
            <div className="space-y-6">
              <div className="text-center">
                <h1
                  id="resHeadAvailable"
                  className="my-3 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent"
                >
                  Available Resources
                </h1>
              </div>
              {resourcePostsData.map((post) => (
                <Card
                  id="resCard"
                  key={post.id}
                  className="cards p-8 hover:shadow-lg transition-all duration-300 relative"
                >
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <Avatar className="h-12 w-12 flex-shrink-0 bg-primary">
                      <AvatarImage src={post.user.avatar} />
                      <AvatarFallback>
                        {post.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* User Info */}
                      <div className="flex items-center gap-1 flex-wrap">
                        <div className="mx-2">
                          <span className="font-semibold hover:underline cursor-pointer">
                            {post.user.name}
                          </span>
                          <div className="username text-muted-foreground">
                            {post.user.username}
                          </div>
                        </div>

                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground ">
                          {post.timeAgo}
                        </span>
                      </div>
                      {/* Categories and Urgent Badge */}
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                      </div>

                      {/* Post Content */}
                      <p className="text-foreground leading-relaxed">
                        {post.content}
                      </p>

                      {/* Location and Availability */}
                      <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          {post.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          Available:{" "}
                          <span className="text-primary ml-1 font-medium">
                            {post.availability}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-3 outteraction">
                        <div
                          className="flex items-center justify-between"
                          id="actionsopt"
                        >
                          <div className="flex items-center gap-1 flex-wrap">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-primary"
                            >
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {post.comments}
                            </Button>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="mx-8 text-muted-foreground hover:text-red-500"
                            >
                              <Heart className="h-4 w-4 mr-1" />
                              {post.likes}
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div id="contact">
                        <Button
                          id="contactbtn"
                          size="lg"
                          className="mx-8 cursor-text text-center bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          <i>To contact mail at:</i> <b>{post.user.email}</b>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Trending Topics */}
          <div className="hidden lg:block w-80 flex-shrink-0 ">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 ">
                <TrendingUp className="h-5 w-5" />
                Trending Topics
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="hover:bg-muted/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="font-semibold text-primary">
                      {topic.topic}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {topic.posts}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
