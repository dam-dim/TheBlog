const categories = [
    "Travel Diaries",
    "Tech Trends",
    "Health & Wellness",
    "DIY Projects",
    "Pop Culture",
    "Fashion & Beauty",
    "Books & Literature",
    "Sports & Fitness",
    "Environment & Sustainability",
    "Food & Drink",
    "Education & Learning",
    "Finance & Investments",
    "Pets & Animals",
    "Home & Garden",
    "Science & Discovery",
];

export const getRandom = () => {
    const random = Math.floor(Math.random() * categories.length);
    return categories[random];
};
