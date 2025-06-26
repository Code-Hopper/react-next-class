const courses = [
    {
        id: 1,
        title: "React for Beginners",
        description: "Learn the fundamentals of React, including components, state, and props.",
        fees: 199,
        reviews: [
            { user: "Alice", rating: 5, comment: "Great introduction to React!" },
            { user: "Bob", rating: 4, comment: "Well structured and easy to follow." }
        ],
        instructor: "Jane Doe",
        duration: "6 weeks"
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        description: "Deep dive into advanced JavaScript concepts and ES6+ features.",
        fees: 249,
        reviews: [
            { user: "Charlie", rating: 5, comment: "Challenging but rewarding course." },
            { user: "Dana", rating: 4, comment: "Helped me master closures and async code." }
        ],
        instructor: "John Smith",
        duration: "8 weeks"
    },
    {
        id: 3,
        title: "Full Stack Web Development",
        description: "Become a full stack developer with hands-on projects using MERN stack.",
        fees: 399,
        reviews: [
            { user: "Eve", rating: 5, comment: "Loved the real-world projects!" },
            { user: "Frank", rating: 4, comment: "Comprehensive and practical." }
        ],
        instructor: "Emily Clark",
        duration: "12 weeks"
    }
];

export default courses;