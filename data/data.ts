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
    description: "Excepturi maxime eligendi nulla repellat architecto qui voluptatem eius. Est commodi assumenda. Aliquid eum magnam autem reiciendis omnis assumenda veritatis neque. Delectus omnis quaerat cumque occaecati. Non est asperiores doloremque vel voluptatibus.",
    price: 11.99,
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
      "At unde nobis minus laboriosam est dolor in. Aut placeat rerum rerum et accusantium. Deleniti reprehenderit ipsa molestiae quo mollitia qui nobis aliquam. Necessitatibus accusamus earum rerum rem quis unde est. Earum non deleniti veniam eum natus quas commodi. Repellat molestiae enim ea.",
    price: 89.99,
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
      'Facere commodi eligendi. Sit incidunt nisi aut sequi et. Iure saepe eligendi voluptas rem ut qui voluptatem explicabo. Aut necessitatibus nulla et aspernatur in suscipit ea consectetur. Adipisci aperiam alias occaecati.',
    price: 49.99,
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
      "Rem dolor maxime libero quidem quam similique placeat quasi atque. Repellat recusandae accusantium minus saepe nihil quis quisquam omnis illum. Ipsam tempora eaque nobis consectetur debitis quo. Eos libero ut eveniet. Ad possimus placeat esse laborum error est.",
    price: 17.99,
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
      'Consequuntur quibusdam culpa omnis et. Quam similique dolor eum laudantium maiores. Eum sapiente deleniti molestiae. Veniam impedit nobis. Nisi corporis laudantium pariatur omnis eveniet.',
    price: 19.99,
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
      'Quia hic odio voluptas et in. Est velit qui. Nostrum tempora dolore rem ducimus tenetur asperiores. Itaque magnam qui voluptas et excepturi necessitatibus ipsam voluptate molestiae.',
    price: 54.99,
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
      'Illo dolorem tenetur explicabo quasi labore praesentium qui. Ipsum debitis debitis est consequatur ut. Ad vel in voluptatibus inventore vero.',
    price: 79.99,
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
      'Laboriosam odit sunt. Expedita eos quisquam soluta reiciendis qui praesentium corrupti. Iusto fugit natus dolorem. Voluptatibus dignissimos sit aut itaque et. Quas ex illo voluptatibus modi voluptatem eius est enim sed.',
    price: 59.99,
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
      'Consequuntur suscipit molestias enim a. Impedit aut sed aperiam sint eius. Qui dolores provident veniam. Non earum impedit eius rem corrupti iure in.',
    price: 24.99,
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
      'Ullam molestiae optio saepe. Error odio et. Ab inventore magnam laudantium vel omnis repellat hic ducimus ad. Non voluptate deserunt harum consequatur repellat id dolore.',
    price: 29.99,
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
