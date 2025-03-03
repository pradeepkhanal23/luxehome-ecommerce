import supabase from "../src/supabase"; // Ensure .js extension for ES Modules

const productsData = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    price: 25999,
    image: "https://www.course-api.com/images/store/product-1.jpeg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "A stylish and comfortable accent chair designed to elevate any office space. Featuring a sleek frame and plush cushioning, this chair offers both support and a pop of color to your decor.",
    category: "office",
    shipping: true,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    price: 109999,
    image: "https://www.course-api.com/images/store/product-2.jpeg",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "This spacious Albany sectional sofa provides ample seating for family and guests. Its modern design and soft upholstery make it a centerpiece for your living room, perfect for relaxation or entertaining.",
    category: "living room",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",
    price: 309999,
    image: "https://www.course-api.com/images/store/product-3.jpeg",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "A sturdy and elegant Albany dining table crafted from premium wood. Ideal for family meals or dinner parties, its timeless design complements any kitchen setting.",
    category: "kitchen",
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "armchair",
    price: 12599,
    image: "https://www.course-api.com/images/store/product-4.jpeg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "This cozy armchair is perfect for unwinding in your bedroom. With its ergonomic design and soft fabric, it offers a relaxing spot to read or rest after a long day.",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recotY5Nh00DQFdkm",
    name: "dining table",
    price: 42999,
    image: "https://www.course-api.com/images/store/product-5.jpeg",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "A versatile dining table with a minimalist Scandinavian design. Built for durability and style, it’s perfect for everyday meals or hosting guests in your dining area.",
    category: "dining",
    shipping: true,
  },
  {
    id: "rec1Ntk7siEEW9ha1",
    name: "emperor bed",
    price: 23999,
    image: "https://www.course-api.com/images/store/product-6.jpeg",
    colors: ["#0000ff", "#000"],
    company: "ikea",
    description:
      "The Emperor bed combines luxury and simplicity, offering a spacious sleeping area with a sturdy frame. Ideal for a restful night’s sleep in any bedroom.",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recNZ0koOqEmilmoz",
    name: "entertainment center",
    price: 59999,
    image: "https://www.course-api.com/images/store/product-7.jpeg",
    featured: true,
    colors: ["#000", "#ff0000"],
    company: "caressa",
    description:
      "A sleek entertainment center designed to organize your TV, gaming consoles, and media. Its modern look and ample storage make it a standout addition to your living room.",
    category: "living room",
    shipping: true,
  },
  {
    id: "recrfxv3EwpvJwvjq",
    name: "high-back bench",
    price: 39999,
    image: "https://www.course-api.com/images/store/product-8.jpeg",
    featured: true,
    colors: ["#000", "#00ff00"],
    company: "ikea",
    description:
      "This high-back bench offers both seating and style for your office. With a supportive backrest and durable construction, it’s great for collaborative spaces or waiting areas.",
    category: "office",
    shipping: true,
  },
  {
    id: "recoW8ecgjtKx2Sj2",
    name: "leather chair",
    price: 20099,
    image: "https://www.course-api.com/images/store/product-9.jpeg",
    colors: ["#ff0000", "#ffb900", "#00ff00"],
    company: "caressa",
    description:
      "A luxurious leather chair that adds sophistication to your bedroom. Its smooth finish and ergonomic design provide comfort and a touch of elegance.",
    category: "bedroom",
  },
  {
    id: "recEOA6qtDag1hRbU",
    name: "leather sofa",
    price: 99999,
    image: "https://www.course-api.com/images/store/product-10.jpeg",
    colors: ["#00ff00", "#0000ff"],
    company: "caressa",
    description:
      "This premium leather sofa brings a bold statement to your office lounge. Crafted with high-quality materials, it offers durability and a professional aesthetic.",
    category: "office",
  },
  {
    id: "recoAJYUCuEKxcPSr",
    name: "modern bookshelf",
    price: 31999,
    image: "https://www.course-api.com/images/store/product-11.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000", "#00ff00"],
    company: "caressa",
    description:
      "A contemporary bookshelf perfect for organizing books and toys in a kids’ room. Its vibrant colors and sturdy shelves make it both functional and fun.",
    category: "kids",
  },
  {
    id: "recQ0fMd8T0Vk211E",
    name: "modern poster",
    price: 3099,
    image: "https://www.course-api.com/images/store/product-12.jpeg",
    colors: ["#000"],
    company: "liddy",
    description:
      "A minimalist modern poster to enhance your living room decor. Its sleek design and bold lines make it an eye-catching wall accent.",
    category: "living room",
    shipping: true,
  },
  {
    id: "rec7CjDWKRgNQtrKe",
    name: "shelf",
    price: 30999,
    image: "https://www.course-api.com/images/store/product-13.jpeg",
    colors: ["#00ff00"],
    company: "ikea",
    description:
      "A simple yet stylish shelf for your living room. Ideal for displaying books, plants, or decor, it maximizes space with a clean, modern look.",
    category: "living room",
  },
  {
    id: "recF0KpwlkF7e8kXO",
    name: "simple chair",
    price: 109999,
    image: "https://www.course-api.com/images/store/product-14.jpeg",
    colors: ["#0000ff"],
    company: "liddy",
    description:
      "This simple chair offers understated elegance for your living room. With a streamlined design and comfortable seating, it’s perfect for daily use.",
    category: "living room",
    shipping: true,
  },
  {
    id: "recs5BSVU3qQrOj4E",
    name: "sofa set",
    price: 129999,
    image: "https://www.course-api.com/images/store/product-15.jpeg",
    colors: ["#00ff00", "#ffb900"],
    company: "marcos",
    description:
      "A complete sofa set that transforms your living room into a cozy retreat. Includes a sofa and matching chairs, blending comfort with modern style.",
    category: "living room",
    shipping: true,
  },
  {
    id: "recroK1VD8qVdMP5H",
    name: "suede armchair",
    price: 15999,
    image: "https://www.course-api.com/images/store/product-16.jpeg",
    colors: ["#ffb900"],
    company: "caressa",
    description:
      "A chic suede armchair that adds warmth to your office. Its soft texture and supportive build make it ideal for long work sessions or casual seating.",
    category: "office",
  },
  {
    id: "rec7JInsuCEHgmaGe",
    name: "utopia sofa",
    price: 79999,
    image: "https://www.course-api.com/images/store/product-17.jpeg",
    featured: true,
    colors: ["#ff0000", "#00ff00"],
    company: "liddy",
    description:
      "The Utopia sofa offers a plush, inviting seat for your living room. Its vibrant color options and durable fabric ensure it’s both a statement piece and a comfy spot.",
    category: "living room",
  },
  {
    id: "rec3jeKnhInKHJuz2",
    name: "vase table",
    price: 120999,
    image: "https://www.course-api.com/images/store/product-18.jpeg",
    featured: true,
    colors: ["#ff0000"],
    company: "marcos",
    description:
      "An artistic vase table that doubles as a functional desk for your office. Its unique design and robust construction make it a standout piece for work or display.",
    category: "office",
  },
  {
    id: "recv2ohxljlK2FZO7",
    name: "wooden bed",
    price: 250099,
    image: "https://www.course-api.com/images/store/product-19.jpeg",
    colors: ["#000", "#ffb900"],
    company: "ikea",
    description:
      "A beautifully crafted wooden bed that brings natural elegance to your bedroom. Its solid frame and warm finish promise lasting comfort and style.",
    category: "bedroom",
  },
  {
    id: "recJIjREF3dlFi3sR",
    name: "wooden desk",
    price: 150999,
    image: "https://www.course-api.com/images/store/product-20.jpeg",
    colors: ["#000"],
    company: "ikea",
    description:
      "This wooden desk offers a spacious workspace for your office. With a minimalist design and strong build, it’s perfect for productivity and organization.",
    category: "office",
    shipping: true,
  },
  {
    id: "recm7wC8TBVdU9oEL",
    name: "wooden desk",
    price: 40099,
    image: "https://www.course-api.com/images/store/product-21.jpeg",
    colors: ["#0000ff", "#00ff00"],
    company: "ikea",
    description:
      "A compact wooden desk ideal for small office spaces. Its vibrant color accents and practical layout make it a great choice for home or professional use.",
    category: "office",
  },
  {
    id: "rectfNsySwAJeWDN2",
    name: "wooden table",
    price: 234999,
    image: "https://www.course-api.com/images/store/product-22.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000"],
    company: "caressa",
    description:
      "A large wooden table designed for your kitchen or dining area. Its rich finish and solid craftsmanship make it ideal for family gatherings or meal prep.",
    category: "kitchen",
    shipping: true,
  },
];

async function insertProducts() {
  try {
    const { data, error } = await supabase
      .from("products")
      .upsert(productsData, {
        onConflict: "id", //Upsert to avoid duplicates
      });
    if (error) throw error;
    console.log("Products Inserted successfully:", data);
  } catch (error) {
    console.error("Error inserting products:", error.message);
    process.exit(1);
  }
}

insertProducts();
