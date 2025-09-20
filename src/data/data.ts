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
      email: "priyahsarma123@gmail.com"
    },
    content: "🧥 Have 200 winter jackets (sizes 5-12 years) in excellent condition available for donation. Perfect for children in need. Free pickup available from my location in Sector 15, Noida. DM for details! #WinterClothes #KidsClothing",
    category: "Clothing",
    location: "Sector 15, Noida",
    state: "Noida",
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
      email: "rajeshkumarr699@gmail.com"
    },
    content: "🍚 Fresh groceries available for donation - 500kg rice, dal, vegetables, and fruits. Daily surplus from my grocery store. Perfect for NGOs or families in need. Contact for bulk pickup! #FoodDonation #FreshFood",
    category: "Food",
    location: "Dwarka, New Delhi",
    state: "New Delhi",
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
      email: "sneha1987patel@gmail.com"
    },
    content: "📚 School supplies ready for donation! 1000+ notebooks, textbooks (Class 1-10), pencils, erasers, and geometry sets. All items are new/like-new condition. Great for underprivileged students! #EducationSupport #SchoolSupplies",
    category: "Education",
    location: "Andheri West, Mumbai",
    state: "Mumbai",
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
      email: "vermaamit99@gmail.com"
    },
    content: "🏥 Medical equipment available for donation - 20 wheelchairs, walking sticks, blood pressure monitors, and basic medical supplies. All sanitized and in working condition. Ideal for elderly care centers! #MedicalAid #Healthcare",
    category: "Healthcare",
    location: "Koramangala, Bangalore",
    state: "Bangalore",
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
      email: "meerajoshii122@gmail.com"
    },
    content: "🛏️ Warm blankets and winter clothing available! 300 blankets, sweaters, and shawls perfect for the homeless or anyone in need during winter. Clean and ready for immediate distribution. #WinterRelief #Blankets",
    category: "Clothing",
    location: "FC Road, Pune",
    state: "Pune",
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
      email: "arjunsinghh78@gmail.com"
    },
    content: "🍽️ Fresh cooked meals available for pickup! Dal-chawal, sabzi, roti ready for 500+ people. Our restaurant has daily surplus - perfect for feeding the needy. Available every evening 7-9 PM! #FreshMeals #CookedFood",
    category: "Food",
    location: "Sector 18, Gurgaon",
    state: "New Delhi", 
    availability: "Daily 7-9 PM",
    timeAgo: "2d",
    images: [],
    likes: 1834,
    comments: 269,
  },
  {
    id: 7,
    user: {
      name: "Neha Singh",
      username: "@neha_",
      avatar: "",
      email: "nehasingh699@gmail.com"
    },
    content: "📖 Books for JEE available!! I have some JEE preparation books (Physics, Chemistry, and Math) that are in good condition and can be very useful for students preparing for the exam. I would like to donate them to someone who genuinely needs them.If you or someone you know is interested, please feel free to reach out to me. ",
    category: "Education",
    location: "Sector 24, Rohini",
    state: "New Delhi",
    availability: "Available now",
    timeAgo: "1d",
    images: [],
    likes: 184,
    comments: 69,
  },
  {
    id: 8,
    user: {
      name: "Vikram Malhotra",
      username: "@vikram_it",
      avatar: "",
      email: "vikrammalhotra77@gmail.com"
    },
    content: "💻 Donating 50 refurbished laptops and 100 headphones for students from low-income backgrounds. All devices are fully functional with basic software installed. Great for online classes! #DigitalEducation #TechDonation",
    category: "Education",
    location: "Salt Lake, Kolkata",
    state: "Punjab",
    availability: "Weekdays 11 AM - 5 PM",
    timeAgo: "2d",
    images: [],
    likes: 562,
    comments: 128,
  },
  {
    id: 9,
    user: {
      name: "Aditi Rao",
      username: "@aditirao_health",
      avatar: "",
      email: "aditirao33@gmail.com"
    },
    content: "🩸 Urgently donating 200 packs of sanitary pads and hygiene kits. Perfect for NGOs supporting women in slum areas. Clean, sealed, and safe to distribute. #WomenSupport #HygieneDonation",
    category: "Healthcare",
    location: "Anna Nagar, Chennai",
    state: "Bangalore",
    availability: "Immediate pickup",
    timeAgo: "3d",
    images: [],
    likes: 842,
    comments: 191,
  },
  {
    id: 10,
    user: {
      name: "Rohan Mehta",
      username: "@rohan_fooddrive",
      avatar: "",
      email: "rohanmehta1990@gmail.com"
    },
    content: "🥛 Daily milk surplus from our dairy farm – around 100 liters available every morning. Looking to connect with NGOs or orphanages who can collect regularly. #FoodSecurity #DairyDonation",
    category: "Food",
    location: "Gandhinagar, Gujarat",
    state: "Mumbai",
    availability: "Daily 6-8 AM",
    timeAgo: "3d",
    images: [],
    likes: 1299,
    comments: 245,
  },
    {
    id: 11,
    user: {
      name: "Kavita Deshpande",
      username: "@kavitad_books",
      avatar: "",
      email: "kavitad789@gmail.com"
    },
    content: "📒 Donating 500 storybooks, novels, and comics for kids (ages 6–15). All books are in very good condition and can be great for libraries or community centers. #BooksForAll #ChildEducation",
    category: "Education",
    location: "Shivaji Nagar, Pune",
    state: "Pune",
    availability: "Weekends only",
    timeAgo: "4d",
    images: [],
    likes: 374,
    comments: 64,
  },
  {
    id: 12,
    user: {
      name: "Sameer Khan",
      username: "@sameerk_trust",
      avatar: "",
      email: "sameerkhan44@gmail.com"
    },
    content: "🛋️ Donating 20 beds, 15 sofas, and 10 cupboards in good condition from a guesthouse renovation project. Perfect for orphanages, shelters, or NGOs in need of furniture. #ShelterSupport #FurnitureDonation",
    category: "Furniture",
    location: "Banjara Hills, Hyderabad",
    state: "Bangalore",
    availability: "By appointment",
    timeAgo: "5d",
    images: [],
    likes: 954,
    comments: 173,
  },
  {
    id: 13,
    user: {
      name: "Anjali Nair",
      username: "@anjali_kerala",
      avatar: "",
      email: "anjali.nair22@gmail.com"
    },
    content: "👶 Baby care kits available – 300 diapers, baby formula, feeding bottles, and clothes for infants. All sealed and safe. Aimed to help struggling single mothers. #BabyCare #MothersSupport",
    category: "Healthcare",
    location: "Ernakulam, Kerala",
    state: "Mumbai",
    availability: "Immediate pickup",
    timeAgo: "6d",
    images: [],
    likes: 1123,
    comments: 202,
  },
  {
    id: 14,
    user: {
      name: "Rahul Kapoor",
      username: "@rahulkap_music",
      avatar: "",
      email: "rahulkapoor88@gmail.com"
    },
    content: "🎸 Donating 25 guitars, 10 keyboards, and various musical instruments from our academy to NGOs or community centers teaching music. Instruments are well-maintained and ready to use. #MusicForAll #ArtsDonation",
    category: "Arts & Culture",
    location: "Connaught Place, Delhi",
    state: "New Delhi",
    availability: "Weekdays after 4 PM",
    timeAgo: "1w",
    images: [],
    likes: 736,
    comments: 154,
  },
  {
    id: 15,
    user: {
      name: "Sunil Gupta",
      username: "@sunil_sports",
      avatar: "",
      email: "sunilgupta44@gmail.com"
    },
    content: "🏏 Donating 50 cricket bats, pads, and footballs from our sports academy. Perfect for schools or NGOs promoting physical education. #SportsForAll #Fitness",
    category: "Sports",
    location: "Indira Nagar, Lucknow",
    state: "Punjab",
    availability: "Weekdays 10 AM - 3 PM",
    timeAgo: "1w",
    images: [],
    likes: 623,
    comments: 131,
  },
  {
    id: 16,
    user: {
      name: "Pooja Bansal",
      username: "@poojab_electronics",
      avatar: "",
      email: "poojabansal23@gmail.com"
    },
    content: "🔌 Donating 100 LED bulbs, 50 fans, and 20 power strips from a warehouse clearance. All in working condition. Great for shelters or schools. #ElectronicsDonation #EnergySupport",
    category: "Electronics",
    location: "Sector 62, Noida",
    state: "Noida",
    availability: "By appointment",
    timeAgo: "1w",
    images: [],
    likes: 782,
    comments: 162,
  },
  {
    id: 17,
    user: {
      name: "Nisha Chawla",
      username: "@nishac_petcare",
      avatar: "",
      email: "nishachawla999@gmail.com"
    },
    content: "🐕 Donating 200kg dog food, 50kg cat food, and pet blankets. Looking to support NGOs or shelters working for stray animals. #PetCare #AnimalSupport",
    category: "Animal Care",
    location: "Juhu, Mumbai",
    state: "Mumbai",
    availability: "Daily 2-6 PM",
    timeAgo: "8d",
    images: [],
    likes: 1103,
    comments: 198,
  },
  {
    id: 18,
    user: {
      name: "Deepak Sharma",
      username: "@deepak_disaster",
      avatar: "",
      email: "deepaksharma91@gmail.com"
    },
    content: "🚨 Donating 500 emergency relief kits including tarpaulins, solar lamps, water bottles, and dry food packets for flood-affected areas. NGOs please connect. #DisasterRelief #EmergencyAid",
    category: "Disaster Relief",
    location: "Patna, Bihar",
    state: "Punjab",
    availability: "Immediate dispatch",
    timeAgo: "9d",
    images: [],
    likes: 1502,
    comments: 284,
  },
  {
    id: 19,
    user: {
      name: "Ritika Jain",
      username: "@ritikajain_clothes",
      avatar: "",
      email: "ritika.jain88@gmail.com"
    },
    content: "👗 Donating 300 women’s sarees, kurtis, and children’s clothes in excellent condition. Perfect for NGOs helping low-income families. #ClothingDonation #WomenSupport",
    category: "Clothing",
    location: "Karol Bagh, Delhi",
    state: "New Delhi",
    availability: "Weekends only",
    timeAgo: "10d",
    images: [],
    likes: 698,
    comments: 139,
  },
  {
    id: 20,
    user: {
      name: "Manoj Pillai",
      username: "@manoj_foodbank",
      avatar: "",
      email: "manojpillai45@gmail.com"
    },
    content: "🍲 Donating 1000 ready-to-eat food packets for distribution among daily wage workers. Packets include rice, dal, and curry. #FoodForAll #ZeroHunger",
    category: "Food",
    location: "Thane, Mumbai",
    state: "Mumbai",
    availability: "Daily after 5 PM",
    timeAgo: "11d",
    images: [],
    likes: 1364,
    comments: 256,
  },
    {
    id: 21,
    user: {
      name: "Shreya Verma",
      username: "@shreyaverma_env",
      avatar: "",
      email: "shreya.verma55@gmail.com"
    },
    content: "🌱 Donating 300 indoor and outdoor plants including neem, tulsi, and money plants. Can support schools, NGOs, or housing societies promoting greenery. #Environment #PlantDonation",
    category: "Environment",
    location: "Sector 17, Chandigarh",
    state: "Punjab",
    availability: "Weekdays 11 AM - 4 PM",
    timeAgo: "12d",
    images: [],
    likes: 845,
    comments: 174,
  },
  {
    id: 22,
    user: {
      name: "Amit Joshi",
      username: "@amitjoshi_tech",
      avatar: "",
      email: "amitjoshi33@gmail.com"
    },
    content: "💻 Donating 25 refurbished laptops, 40 smartphones, and 15 tablets. All formatted and in good working condition. Ideal for students and NGOs supporting digital education. #DigitalIndia #TechForGood",
    category: "Technology",
    location: "MG Road, Bangalore",
    state: "Bangalore",
    availability: "By appointment only",
    timeAgo: "2w",
    images: [],
    likes: 1754,
    comments: 321,
  },
  {
    id: 23,
    user: {
      name: "Neha Reddy",
      username: "@neha_reddy_health",
      avatar: "",
      email: "nehareddy22@gmail.com"
    },
    content: "💉 Donating 500 first aid kits with sanitizers, masks, and basic medicines. All unused and packed. Suitable for schools, shelters, and health camps. #Healthcare #SafetyFirst",
    category: "Healthcare",
    location: "Jubilee Hills, Hyderabad",
    state: "Bangalore",
    availability: "Anytime (call before visit)",
    timeAgo: "2w",
    images: [],
    likes: 954,
    comments: 187,
  },
  {
    id: 24,
    user: {
      name: "Rajesh Mehta",
      username: "@rajesh_mehta_tools",
      avatar: "",
      email: "rajeshmehta77@gmail.com"
    },
    content: "🛠️ Donating 50 sets of carpentry tools, hammers, screwdrivers, and wrenches. Perfect for vocational training centers and skill development NGOs. #SkillDevelopment #VocationalTraining",
    category: "Tools & Equipment",
    location: "Rajkot, Gujarat",
    state: "Punjab",
    availability: "Weekends 9 AM - 1 PM",
    timeAgo: "2w",
    images: [],
    likes: 612,
    comments: 112,
  },
  {
    id: 25,
    user: {
      name: "Farhan Ali",
      username: "@farhanali_transport",
      avatar: "",
      email: "farhanali44@gmail.com"
    },
    content: "🚲 Donating 20 bicycles and 5 scooters in good condition. Aimed to help students in rural areas commute to school. #TransportSupport #StudentAid",
    category: "Transport",
    location: "Aligarh, Uttar Pradesh",
    state: "Noida",
    availability: "Daily mornings",
    timeAgo: "3w",
    images: [],
    likes: 1343,
    comments: 289,
  },


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