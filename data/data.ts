import {
  Dna,
  FlowerTulip,
  GlobeHemisphereWest,
  Confetti,
  BugDroid,
  Carrot,
  Coffee,
} from "@phosphor-icons/react";
import { Product } from "./types";

export const navLinks = [
  { title: "inicio", url: "/" },
  { title: "Nosotros", url: "#about" },
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
      // { title: "preguntas frecuentes", url: "/faq" },
      // { title: "centro de ayuda", url: "/help" },
      // { title: "blog", url: "/" },
      { title: "términos y condiciones", url: "/" },
      { title: "política de privacidad", url: "/" },
    ],
  },
  {
    title: "empresa",
    links: [
      { title: "eventos", url: "/" },
      // { title: "socios comerciales", url: "/" },
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
    title: "testimonios",
    subTitle: "Escucha lo que nuestros clientes opinan",
  },
  testimonials: [
    {
      img: "/img/avatar1.jpg",
      name: "Dr. Anna Tromp",
      jobTitle: "Direct Identity Representative",
      quote:
        "Bellisima et id minus officia harum. Qui unde cumque. Et architecto voluptatem tenetur. Dignissimos quidem tenetur commodi dolorum aspernatur porro.",
    },
    {
      img: "/img/avatar2.jpg",
      name: "Lester Kiehn",
      jobTitle: "Product Response Manager",
      quote:
        "Illum sed perspiciatis reprehenderit. Expedita quia sit ad quam. Quod quas voluptate id suscipit possimus animi itaque. Enim sed illo sunt id quisquam aperiam reiciendis. Molestias beatae illum et vitae at voluptas eligendi. Vero esse beatae nostrum distinctio laborum.",
    },
    {
      img: "/img/avatar3.jpg",
      name: "Deborah Kutch",
      jobTitle: "International Web Executive",
      quote:
        "Numquam at ut dolor quo autem id. Sunt impedit commodi omnis et voluptas dignissimos rerum ut voluptatem. Provident sunt nesciunt quia ab. Quae odio et explicabo suscipit libero repellat unde qui. Facere tempore maxime vitae itaque repudiandae soluta explicabo.",
    },
  ],
};
export const products: Product[] = [
  {
    id: 583,
    name: "iphone 14",
    description:
      "Excepturi maxime eligendi nulla repellat architecto qui voluptatem eius. Est commodi assumenda. Aliquid eum magnam autem reiciendis omnis assumenda veritatis neque. Delectus omnis quaerat cumque occaecati. Non est asperiores doloremque vel voluptatibus.",
    price: 11.99,
    brand: "Brakus",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-1.jpg",
    
  },
  {
    id: 85,
    name: "Apple iPhone 12, 64GB",
    description:
      "Facere commodi eligendi. Sit incidunt nisi aut sequi et. Iure saepe eligendi voluptas rem ut qui voluptatem explicabo. Aut necessitatibus nulla et aspernatur in suscipit ea consectetur. Adipisci aperiam alias occaecati.",
    price: 49.99,
    brand: "Fiscaraldo",
    category: "Accesorio",
    inStock: false,
    image: "/img/prod-2.jpg",
    
  },
  {
    id: 85,
    name: "Apple iPhone 12, 64GB",
    description:
      "Facere commodi eligendi. Sit incidunt nisi aut sequi et. Iure saepe eligendi voluptas rem ut qui voluptatem explicabo. Aut necessitatibus nulla et aspernatur in suscipit ea consectetur. Adipisci aperiam alias occaecati.",
    price: 49.99,
    brand: "Larkin",
    category: "Accesorio",
    inStock: true,
    image: "/img/prod-3.jpg",
    
  },
  {
    id: 530,
    name: "Logitech MX Master 2S Wireless Mouse – Use on Any Surface, Hyper-Fast Scrolling, Ergonomic Shape, Rechargeable, Control Upto 3 Apple Mac and Windows Computers, Graphite",
    description:
      "Rem dolor maxime libero quidem quam similique placeat quasi atque. Repellat recusandae accusantium minus saepe nihil quis quisquam omnis illum. Ipsam tempora eaque nobis consectetur debitis quo. Eos libero ut eveniet. Ad possimus placeat esse laborum error est.",
    price: 17.99,
    brand: "Feil",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-4.jpg",
    
  },
  {
    id: 125,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Consequuntur quibusdam culpa omnis et. Quam similique dolor eum laudantium maiores. Eum sapiente deleniti molestiae. Veniam impedit nobis. Nisi corporis laudantium pariatur omnis eveniet.",
    price: 19.99,
    brand: "D'Amore",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-5.jpg",
    
  },
  {
    id: 543,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Quia hic odio voluptas et in. Est velit qui. Nostrum tempora dolore rem ducimus tenetur asperiores. Itaque magnam qui voluptas et excepturi necessitatibus ipsam voluptate molestiae.",
    price: 54.99,
    brand: "Osinski",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-6.jpg",
    
  },
  {
    id: 351,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Illo dolorem tenetur explicabo quasi labore praesentium qui. Ipsum debitis debitis est consequatur ut. Ad vel in voluptatibus inventore vero.",
    price: 79.99,
    brand: "Roob",
    category: "Accesorio",
    inStock: true,
    image: "/img/prod-7.jpg",
    
  },
  {
    id: 548,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Laboriosam odit sunt. Expedita eos quisquam soluta reiciendis qui praesentium corrupti. Iusto fugit natus dolorem. Voluptatibus dignissimos sit aut itaque et. Quas ex illo voluptatibus modi voluptatem eius est enim sed.",
    price: 59.99,
    brand: "Balistreri",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-8.jpg",
    
  },
  {
    id: 585,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Consequuntur suscipit molestias enim a. Impedit aut sed aperiam sint eius. Qui dolores provident veniam. Non earum impedit eius rem corrupti iure in.",
    price: 24.99,
    brand: "Gottlieb",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-9.jpg",
    
  },
  {
    id: 345,
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      "Ullam molestiae optio saepe. Error odio et. Ab inventore magnam laudantium vel omnis repellat hic ducimus ad. Non voluptate deserunt harum consequatur repellat id dolore.",
    price: 29.99,
    brand: "Zemlak",
    category: "Ropa",
    inStock: true,
    image: "/img/prod-10.jpg",
    
  },
];


type GetProductType = (id:number) => Product

export const getProducts = async () => {
  return products

}
export const getProduct = async (productId:number) => {
  const product = products.find((product) => product.id === productId);
  return product
}