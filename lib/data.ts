//sample data for the components (temporary, to be replaced with API data later)

import { 
    MenuItem, 
    Chef, 
    Event, 
    Testimonial, 
    Special 
} from "@/types";

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Ramen noodles",
        description: "Ramen noodles with soft boiled egg, shrimp and snow peas",
        price: "LKR 1200",
        image: "/images/menu/ramen.jpg",
        category: "starters",
    },
    {
        id: 2,
        name: "Sausage Pizza",
        description: "A delicious pizza topped with spicy sausage, bell peppers, and mozzarella cheese.",
        price: "LKR 2200",
        image: "/images/menu/sausage-pizza.jpg",
        category: "specialty",
    },
    {
        id: 3,
        name: "Noodles with Vegetables",
        description: "Stir-fried noodles with a medley of fresh vegetables, seasoned with soy sauce and garlic.",
        price: "LKR 1800",
        image: "/images/menu/noodles.jpg",
        category: "specialty",
    },
    {
        id: 4,
        name: "Pumpkin Soup",
        description: "A creamy pumpkin soup infused with warm spices and garnished with a drizzle of cream.",
        price: "LKR 1600",
        image: "/images/menu/spicy-soup.jpg",
        category: "starters",
    },
    {
        id: 5,
        name: "Vegetable Rice Bowl",
        description: "A healthy bowl of steamed rice topped with a variety of fresh vegetables and a savory sauce.",
        price: "LKR 1500",
        image: "/images/menu/veg-rice.jpg",
        category: "specialty",
    }
];

export const chefs: Chef[] = [
    {
        id: 1,
        name: "Walter White",
        role: "Head Chef",
        image: "/images/chefs/walter.jpg",
    },
    {
        id: 2,
        name: "Graham Smith",
        role: "Sous Chef",
        image: "/images/chefs/graham.jpg",
    },
    {
        id: 3,
        name: "Logan Lee",
        role: "Pastry Chef",
        image: "/images/chefs/logan.jpg",
    },
];

export const events: Event[] = [
    {
        id: 1,
        title: "Wine & Dine Evening",
        date: "July 08, 2026",
        description: "A curated five-course dinner paired with premium wines.",
        image: "/images/events/wine-dine.jpg",
        price: "Per Person: LKR 8000",
    },

];

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Kane Smith",
        role: "Customer",
        image: "/images/testimonials/kane.jpg",
        feedback:
            "The food was absolutely amazing! The flavors were perfectly balanced and the presentation was stunning. I can't wait to come back and try more dishes!",
        stars: 5,
    },
    {
        id: 2,
        name: "Belly Williams",
        role: "Customer",
        image: "/images/testimonials/belly.jpg",
        feedback:
            "I had a wonderful dining experience at this restaurant. The staff was attentive and the ambiance was cozy. The food exceeded my expectations, especially the dessert!",
        stars: 4,
    },
    {
        id: 3,
        name: "John Doe",
        role: "Customer",
        image: "/images/testimonials/john.jpg",
        feedback:
            "I was blown away by the quality of the food and the creativity of the dishes. The flavors were bold and unique, and the service was top-notch. Highly recommend this place!",
        stars: 5,
    }
];

export const heroSlides = [
    {
        id: 1,
        title: "Welcome to Relish",
        subtitle: "Delivering great food for more than 18 years!",
        bg: "/images/hero/slide1.jpg",
    },
    {
        id: 2,
        title: "Crafted With Passion",
        subtitle: "Experience the art of fine dining like never before.",
        bg: "/images/hero/slide2.jpg",
    },
    {
        id: 3,
        title: "Fresh Every Day",
        subtitle: "Farm-to-table ingredients, delivered to your plate.",
        bg: "/images/hero/slide3.jpg",
    },
    {
        id: 4,
        title: "Unforgettable Flavors",
        subtitle: "Savor the taste of culinary excellence in every bite.",
        bg: "/images/hero/slide4.jpg",

    },
    {
        id: 5,
        title: "Book Your Table Now",
        subtitle: "Reserve your spot for an unforgettable dining experience.",
        bg: "/images/hero/slide5.jpg",
    }
];