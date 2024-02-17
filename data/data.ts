import {
  Dna,
  FlowerTulip,
  GlobeHemisphereWest,
  Confetti,
  BugDroid,
  Carrot,
  Coffee,
} from "@phosphor-icons/react";

export const navLinks = [
  { title: "inicio", url: "/" },
  // { title: "servicios", url: "#services" },
  // { title: "soluciones", url: "#solutions" },
  // { title: "testimonios", url: "#testimonials" },
  { title: "blog", url: "#blog" },
  { title: "contacto", url: "/contact" },
  // { title: "info", url: "#info" },
];

export const footerLinks = [
  {
    title: "acerca",
    links: [
      { title: "preguntas frecuentes", url: "/faq" },
      { title: "centro de ayuda", url: "/help" },
      // { title: "blog", url: "/" },
      { title: "términos y condiciones", url: "/conditions" },
      { title: "política de privacidad", url: "/privacy" },
    ],
  },
  {
    title: "empresa",
    links: [
      { title: "eventos", url: "/" },
      { title: "socios comerciales", url: "/" },
      { title: "historia", url: "/" },
    ],
  },
];
export const howItWorks = {
  steps: [
    {
      number: "01",
      icon: BugDroid,
      title: "Project Initiation",
      description:
        "At arcraft we're dedicated to shaping environments that transcend mere structures.",
      btn: { href: "#", label: "learn more" },
    },
    {
      number: "02",
      icon: Carrot,
      title: "Conceptual Design",
      description:
        "At arcraft we're dedicated to shaping environments that transcend mere structures.",
      btn: { href: "#", label: "learn more" },
    },
    {
      number: "03",
      icon: Coffee,
      title: "Construction Documents",
      description:
        "At arcraft we're dedicated to shaping environments that transcend mere structures.",
      btn: { href: "#", label: "learn more" },
    },
  ],
  features: [
    {
      icon: Confetti,
      title: "Design Development",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
    {
      icon: Dna,
      title: "Construction Administration",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
    {
      icon: FlowerTulip,
      title: "Post-Occupancy Evaluation",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
    {
      icon: GlobeHemisphereWest,
      title: "Schematic Design",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design.",
      btn: { href: "#", label: "learn more" },
    },
  ],
};
export const testimonialContent = {
  heading: {
    title: "testimonials",
    subTitle: "Hear what our customers say",
  },
  testimonials: [
    {
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/66.jpg",
      name: "Dr. Anna Tromp",
      jobTitle: "Direct Identity Representative",
      quote:
        "Molestias et id minus officia harum. Qui unde cumque. Et architecto voluptatem tenetur. Dignissimos quidem tenetur commodi dolorum aspernatur porro.",
    },
    {
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/802.jpg",
      name: "Lester Kiehn",
      jobTitle: "Product Response Manager",
      quote:
        "Illum sed perspiciatis reprehenderit. Expedita quia sit ad quam. Quod quas voluptate id suscipit possimus animi itaque. Enim sed illo sunt id quisquam aperiam reiciendis. Molestias beatae illum et vitae at voluptas eligendi. Vero esse beatae nostrum distinctio laborum.",
    },
    {
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
      name: "Deborah Kutch",
      jobTitle: "International Web Executive",
      quote:
        "Numquam at ut dolor quo autem id. Sunt impedit commodi omnis et voluptas dignissimos rerum ut voluptatem. Provident sunt nesciunt quia ab. Quae odio et explicabo suscipit libero repellat unde qui. Facere tempore maxime vitae itaque repudiandae soluta explicabo.",
    },
  ],
};
export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iphone 14",
    description: "Short description",
    price: 2999,
    brand: "Brakus",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/img/prod-1.jpg",
      },
      // {
      //   color: "Gray",
      //   colorCode: "#808080",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688622165836-iphone14-gray.png?alt=media&token=58f684db-998e-43eb-aa06-efe3d6ccfad4",
      // },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Logitech MX Keys Advanced Wireless Illuminated Keyboard, Tactile Responsive Typing, Backlighting, Bluetooth, USB-C, Apple macOS, Microsoft Windows, Linux, iOS, Android, Metal Build (Black)",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: 102.99,
    brand: "Gerlach",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-2.jpg",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Apple iPhone 12, 64GB",
    description:
      'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This product is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This product will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.\n- Product will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This product is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
    price: 40,
    brand: "Larkin",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-3.jpg",
      },
      // {
      //   color: "Blue",
      //   colorCode: " #0000FF",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1686386607274-iphone12-blue.jpg?alt=media&token=e83a9b13-86b6-4518-9f1e-8ddef12ba9a2",
      // },
      // {
      //   color: "Red",
      //   colorCode: "#FF0000",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1686386608652-iphone12-red.jpg?alt=media&token=603a9e86-5b8c-4f8d-b61c-c1c77e60e954",
      // },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Logitech MX Master 2S Wireless Mouse – Use on Any Surface, Hyper-Fast Scrolling, Ergonomic Shape, Rechargeable, Control Upto 3 Apple Mac and Windows Computers, Graphite",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
    price: 70,
    brand: "Feil",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image: "/img/prod-4.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "D'Amore",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-5.jpg",
      },
      // {
      //   color: "Silver",
      //   colorCode: "#C0C0C0",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688041295389-watch-silver.jpg?alt=media&token=7341e7f0-5c29-4f91-a7e3-57e50faafb74",
      // },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497041",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Osinski",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-6.jpg",
      },
      // {
      //   color: "Silver",
      //   colorCode: "#C0C0C0",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688041295389-watch-silver.jpg?alt=media&token=7341e7f0-5c29-4f91-a7e3-57e50faafb74",
      // },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497042",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Roob",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-7.jpg",
      },
      // {
      //   color: "Silver",
      //   colorCode: "#C0C0C0",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688041295389-watch-silver.jpg?alt=media&token=7341e7f0-5c29-4f91-a7e3-57e50faafb74",
      // },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497044",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Balistreri",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-8.jpg",
      },
      // {
      //   color: "Silver",
      //   colorCode: "#C0C0C0",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688041295389-watch-silver.jpg?alt=media&token=7341e7f0-5c29-4f91-a7e3-57e50faafb74",
      // },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497045",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Gottlieb",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-9.jpg",
      },
      // {
      //   color: "Silver",
      //   colorCode: "#C0C0C0",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688041295389-watch-silver.jpg?alt=media&token=7341e7f0-5c29-4f91-a7e3-57e50faafb74",
      // },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497048",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Zemlak",
    category: "Ropa / Accesorio",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/img/prod-10.jpg",
      },
      // {
      //   color: "Silver",
      //   colorCode: "#C0C0C0",
      //   image:
      //     "https://firebasestorage.googleapis.com/v0/b/ecommerce-shop-cc542.appspot.com/o/products%2F1688041295389-watch-silver.jpg?alt=media&token=7341e7f0-5c29-4f91-a7e3-57e50faafb74",
      // },
    ],
    reviews: [],
  },
];
