// import { Gallery4 } from "@/components/blocks/gallery4";

// import { Gallery, GalleryProps } from "./gallery";
import { GalleryProps, Gallery } from "./gallery";

const demoData: GalleryProps = {
  items: [
    {
      id: "4",
      testimonies:
        "The mindfulness exercises have helped me stay focused during my workday. A game-changer for productivity!",
      name: "James Wilson",

      backgroundPic: "/assets/style4.jpg",
    },
    {
      id: "1",
      testimonies:
        "Bloom has transformed the way I think about my life. Highly recommend!",
      name: "Makayla Johnson",
      profilePic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      backgroundColor: "#FEF4F4",
    },
    {
      id: "2",
      testimonies:
        "Bloom has completely transformed my daily routine. The guided meditations are exactly what I need to start my mornings with clarity and focus.",
      name: "Christina Matthews",
      profilePic:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      backgroundColor: "#FEF4F4",
    },
    {
      id: "3",
      testimonies:
        "I've tried many meditation apps, but Bloom stands out with its personalized programs and calming design. It feels like it was made just for me.",
      name: "Sofia Marquez",
      // profilePic:
      //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      backgroundPic: "/assets/hair.jpg",
    },
    {
      id: "5",
      testimonies:
        "As a beginners in meditation, Bloom made it so easy to get started. The progress tracking keeps me motivated.",
      name: "Emily Chen",
      profilePic:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
      backgroundColor: "#FEF4F4",
    },
    {
      id: "6",
      testimonies:
        "The sleep stories are incredible. I've never slept better in my life!",
      name: "Michael Rodriguez",
      profilePic:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      backgroundColor: "#FEF4F4",
    },
    {
      id: "7",
      testimonies:
        "What sets Bloom apart is the community feature. Connecting with others on the same journey is so inspiring.",
      name: "Sarah Thompson",
      profilePic:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      // backgroundPic: "/testimonial-bg-4.jpg",
      backgroundColor: "#FEF4F4",
    },
    {
      id: "8",
      testimonies:
        "The variety of meditation styles and techniques keeps things fresh and engaging. I learn something new every day.",
      name: "David Park",
      profilePic:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
      backgroundColor: "#FEF4F4",
    },
  ],
};

function GalleryDemo() {
  return <Gallery {...demoData} />;
}

export { GalleryDemo };
