export const stats = [
    { value: "10,000+", label: "Resources Shared", color: "text-primary" },
    { value: "500+", label: "NGOs Connected", color: "text-accent" },
    { value: "25,000+", label: "Lives Impacted", color: "text-primary-glow" },
];

export const resources = [
    {
      title: "Winter Clothes for Children",
      description: "Warm jackets, sweaters, and boots for kids aged 5-12. All items are clean and in good condition.",
      category: "Clothing",
      location: "Downtown Community Center",
      provider: "Priya Sharma",
      timeAgo: "2 hours ago"
    },
    {
      title: "School Supplies & Books",
      description: "Notebooks, pencils, erasers, and textbooks for elementary students. Perfect for the new school year.",
      category: "Education",
      location: "East Side Library",
      provider: "Shiksha Pratham NGO",
      timeAgo: "5 hours ago",
      urgent: true
    },
    {
      title: "Fresh Groceries & Meals",
      description: "Weekly food packages including vegetables, fruits, and ready-to-eat meals for families in need.",
      category: "Food",
      location: "Central Food Bank",
      provider: "Annadaan Community",
      timeAgo: "1 day ago"
    },
    {
      title: "Medical Equipment",
      description: "Wheelchairs, walking aids, and basic medical supplies available for elderly community members.",
      category: "Healthcare",
      location: "Health Care Center",
      provider: "Dr. Rajesh Gupta",
      timeAgo: "2 days ago"
    }
  ];

export const ngos = [
    {
      name: "Asha Foundation",
      description: "Dedicated to providing education and healthcare to underprivileged children in urban communities.",
      category: "Education & Health",
      location: "Mumbai, Maharashtra",
      members: "2,500+ members",
      rating: "4.9 rating • 15 active projects",
      verified: true,
      icon: "🏫"
    },
    {
      name: "Prakriti Sanrakshan Samiti", 
      description: "Environmental conservation and sustainable living programs for communities across India.",
      category: "Environment",
      location: "Bangalore, Karnataka",
      members: "1,800+ members",
      rating: "4.8 rating • 22 active projects",
      verified: true,
      icon: "🌱"
    },
    {
      name: "Annam Foundation",
      description: "Fighting hunger by distributing meals and groceries to families facing food insecurity.",
      category: "Food Security", 
      location: "Delhi, NCR",
      members: "3,200+ members",
      rating: "4.9 rating • 8 active projects",
      verified: true,
      icon: "🍽️"
    },
    {
      name: "Vriddhashram Seva Samiti",
      description: "Supporting elderly community members with healthcare, companionship, and daily assistance.",
      category: "Elder Care",
      location: "Pune, Maharashtra", 
      members: "900+ members",
      rating: "4.7 rating • 12 active projects",
      verified: true,
      icon: "👴"
    }
  ];

export const steps = [
    {
      number: "1",
      title: "Join the Community",
      description: "Sign up and become part of our caring community of individuals and NGOs working together.",
      icon: "👥"
    },
    {
      number: "2", 
      title: "Find or Share Resources",
      description: "Browse available resources or post what you can share with those in need.",
      icon: "🔍"
    },
    {
      number: "3",
      title: "Connect with Care", 
      description: "Match with people who need help or can provide assistance in your local area.",
      icon: "🤝"
    },
    {
      number: "4",
      title: "Make a Difference",
      description: "Complete the exchange and see the positive impact you've made in someone's life.",
      icon: "✨"
    }
  ];
export const resourcePosts = [
    {
      id: 1,
      user: {
        name: "Priya Sharma",
        username: "@priyasharma",
        avatar: "P",
      },
      content: "🧥 Have 200 winter jackets (sizes 5-12 years) in excellent condition available for donation. Perfect for children in need. Free pickup available from my location in Sector 15, Noida. DM for details! #WinterClothes #KidsClothing",
      category: "Clothing",
      location: "Sector 15, Noida",
      availability: "Available now",
      timeAgo: "2h",
      images: [],
      likes: 324,
      comments: 69,
    },
    {
      id: 2,
      user: {
        name: "Rajesh Kumar",
        username: "@rajeshk_delhi",
        avatar: "",
      },
      content: "🍚 Fresh groceries available for donation - 500kg rice, dal, vegetables, and fruits. Daily surplus from my grocery store. Perfect for NGOs or families in need. Contact for bulk pickup! #FoodDonation #FreshFood",
      category: "Food",
      location: "Dwarka, New Delhi",
      availability: "Daily 6-8 PM",
      timeAgo: "4h",
      images: [],
      likes: 699,
      comments: 123,
    },
    {
      id: 3,
      user: {
        name: "Sneha Patel",
        username: "@sneha_education",
        avatar: "",
      },
      content: "📚 School supplies ready for donation! 1000+ notebooks, textbooks (Class 1-10), pencils, erasers, and geometry sets. All items are new/like-new condition. Great for underprivileged students! #EducationSupport #SchoolSupplies",
      category: "Education",
      location: "Andheri West, Mumbai",
      availability: "Weekends only",
      timeAgo: "6h",
      images: [],
      likes: 469,
      comments: 89,
    },
    {
      id: 4,
      user: {
        name: "Dr. Amit Verma",
        username: "@dramitverma",
        avatar: "",
      },
      content: "🏥 Medical equipment available for donation - 20 wheelchairs, walking sticks, blood pressure monitors, and basic medical supplies. All sanitized and in working condition. Ideal for elderly care centers! #MedicalAid #Healthcare",
      category: "Healthcare",
      location: "Koramangala, Bangalore",
      availability: "By appointment",
      timeAgo: "1d",
      images: [],
      likes: 767,
      comments: 169,
    },
    {
      id: 5,
      user: {
        name: "Meera Joshi",
        username: "@meeraj_pune",
        avatar: "",
      },
      content: "🛏️ Warm blankets and winter clothing available! 300 blankets, sweaters, and shawls perfect for the homeless or anyone in need during winter. Clean and ready for immediate distribution. #WinterRelief #Blankets",
      category: "Clothing",
      location: "FC Road, Pune",
      availability: "Immediate pickup",
      timeAgo: "1d",
      images: [],
      likes: 1696,
      comments: 267,
    },
    {
      id: 6,
      user: {
        name: "Arjun Singh",
        username: "@arjun_foodbank",
        avatar: "",
      },
      content: "🍽️ Fresh cooked meals available for pickup! Dal-chawal, sabzi, roti ready for 500+ people. Our restaurant has daily surplus - perfect for feeding the needy. Available every evening 7-9 PM! #FreshMeals #CookedFood",
      category: "Food",
      location: "Sector 18, Gurgaon",
      availability: "Daily 7-9 PM",
      timeAgo: "2d",
      images: [],
      likes: 1834,
      comments: 269,
    }
];
export const suggestedUsers = [
    {
      name: "Ratan Tata",
      username: "@RatanTata",
      avatar: "R",
      verified: true,
      followers: "2.1M",
      donations: "500+",
      isFollowing: false
    },
    {
      name: "Azim Premji",
      username: "@azimpremji",
      avatar: "A",
      verified: true,
      followers: "850K",
      donations: "300+",
      isFollowing: false
    },
    {
      name: "Sudha Murty",
      username: "@SudhaMurty",
      avatar: "S",
      verified: true,
      followers: "1.2M",
      donations: "450+",
      isFollowing: true
    },
    {
      name: "Kiran Mazumdar",
      username: "@kiranshaw",
      avatar: "K",
      verified: true,
      followers: "680K",
      donations: "280+",
      isFollowing: false
    }
  ];

export const trendingTopics = [
      {
        topic: "#WinterDonation",
        posts: "12.5K posts"
      },
      {
        topic: "#EducationForAll",
        posts: "8.9K posts"
      },
      {
        topic: "#FoodDonation",
        posts: "15.2K posts"
      },
      {
        topic: "#HealthcareForAll",
        posts: "6.7K posts"
      },
      {
        topic: "#HelpTheNeedy",
        posts: "22.1K posts"
      },
      {
        topic: "#ShareAndCare",
        posts: "9.8K posts"
      }
    ];