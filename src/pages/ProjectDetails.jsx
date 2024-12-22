import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";
import { useParams } from "react-router-dom";

const myprojects = [
  {
    id: 1,
    name: "CraftMyMenu",
    description:
      "CraftMyMenu is a Digital Menu cum Ordering system for Restaurants, Hotels and cafes.",
    image: "https://i.postimg.cc/g05RQ5Dm/port.png",
    techStack: [
      "TypeScript",
      "Next",
      "MongoDB",
      "Auth.js",
      "Tailwind",
      "React",
      "Redux",
      "Mongoose",
      "Cloudinary",
      "ShadCN",
    ],
    category: "nextjs",
    githubLink: "https://github.com/itsnileshgosavi/digital_menu",
    liveLink: "https:/craftmymenu.vercel.app/",
    screenshots: [
      "/screenshots/cmm1.png",
      "/screenshots/cmm2.png",
      "/screenshots/cmm3.png",
      "/screenshots/cmm4.png",
      "/screenshots/cmm5.png",
    ],
    features: [
      "User Authentication using Auth.js",
      "Add/Edit Menu Items",
      "QR Code Generation",
      "Delete Menu Items",
      "upload images",
      "Place Order",
      "View Orders",
      "Edit Profile",
      "Analytics Dashboard",
      "Customer Relationship Management",
    ],
  },
  {
    id: 2,
    name: "ShoppyGlobe",
    description:
      "ShoppyGlobe is an ecommerce website built with react, redux, react router etc. It's a feature-rich ecommerce app that allows users to shop online and purchase products.",
    image: "https://i.postimg.cc/kgHdbFsB/shop.png",
    techStack: ["React", "JavaScript", "Tailwind", "Redux"],
    category: "react",
    githubLink: "https://github.com/itsnileshgosavi/shoppyglobe",
    liveLink: "https://shoppyglobe.nileshgosavi.tech",
    screenshots: [
      "/screenshots/sg1.png",
      "/screenshots/sg2.png",
      "/screenshots/sg3.png",
      "/screenshots/sg4.png",
    ],
    features: [
      "User Authentication",
      "Product Search",
      "Cart Management",
      "Order Management",
    ],
  },
  {
    id: 3,
    name: "Task Master",
    description:
      "Task Master is a task management app that allows users to create, edit, and delete tasks. It's a feature-rich app that allows users to manage their tasks effectively.",
    image: "https://i.postimg.cc/76Mcmg31/task.png",
    techStack: ["Next.js", "React", "MongoDB", "NextAuth"],
    category: "nextjs",
    githubLink: "https://github.com/itsnileshgosavi/Task-Master",
    liveLink: "https://task-manager.nileshgosavi.tech/",
    screenshots: [
      "/screenshots/tm1.png",
      "/screenshots/tm2.png",
      "/screenshots/tm3.png",
      "/screenshots/tm4.png",
    ],
    features: [
      "User Authentication using NextAuth",
      "Add Task",
      "Mark as Completed/Pending",
      "Delete Task",
      "Edit Task",
      "Task Filtering",
      "Edit Profile",
      "Change Password",
      "Delete Account",
    ],
  },
  {
    id: 4,
    name: "YouTube Clone",
    description: "This is a full stack web app built with MERN stack.",
    image: "https://i.postimg.cc/cHyBmG97/yt.png",
    techStack: ["React", "Express", "MongoDB", "Tailwind"],
    category: "express",
    githubLink: "https://github.com/itsnileshgosavi/youtube-clone-backend",
    liveLink: "https://youtube-clone-frontend-seven.vercel.app/",
    screenshots: [
      "/screenshots/yt1.png",
      "/screenshots/yt2.png",
      "/screenshots/yt3.png",
      "/screenshots/yt4.png",
    ],
    features: [
      "User Authentication",
      "Video Search",
      "Video Upload",
      "Video Like/Dislike",
      "comment on video",
      "Edit/Delete Commnet",
      "Subscribe to channel",
      "Create channel",
      "Edit channel",
    ],
  },

  {
    id: 5,
    name: "Logo Detector",
    description:
      "Logo Detector is a logo detection app that allows users to upload an image and detect logos. It's a feature-rich app that allows users to detect logos in an image.",
    image: "https://i.postimg.cc/NFCdzb5X/logo.png",
    techStack: ["React", "Javascript", "PostGres", "Next.js"],
    category: "nextjs",
    githubLink: "https://github.com/itsnileshgosavi/logo-detector",
    liveLink: "https://logo-detector.nileshgosavi.tech/",
    screenshots: [
      "/screenshots/ld1.png",
      "/screenshots/ld2.png",
      "/screenshots/ld3.png",
    ],
    features: [
      "User Authentication",
      "Logo Detection using Gemini API",
      "Account Deletion",
    ],
  },
  {
    id: 6,
    name: "Complexity Detector",
    description:
      "Complexity Detector is a chrome extension which allows users to check the complexity of any code on the leetcode.",
    image: "https://i.postimg.cc/y6hgyWwV/pexels-luis-gomes-166706-546819.jpg",
    techStack: ["Javascript", "Webpack"],
    category: "vanilla",
    githubLink: "https://github.com/itsnileshgosavi/Complexity-Detector",
    liveLink: "https://github.com/itsnileshgosavi/Complexity-Detector",
    screenshots: [],
    features: ["Detect Complexity of any code on leetcode"],
  },
  {
    id: 7,
    name: "ShoppyGlobe Backend",
    description:
      "This is the backend of ShoppyGlobe. In this, I have created various REST APIs to perform CRUD operations on the database. It's a feature-rich ecommerce app that allows users to shop online and purchase products.",
    image: "https://i.postimg.cc/kgHdbFsB/shop.png",
    techStack: ["Express", "MongoDB", "JavaScript", "Node"],
    category: "express",
    githubLink: "https://github.com/itsnileshgosavi/shoppyglobe-backend",
    liveLink: "https://shoppyglobe.nileshgosavi.tech",
    screenshots: [
      "/screenshots/sg1.png",
      "/screenshots/sg2.png",
      "/screenshots/sg3.png",
      "/screenshots/sg4.png",
    ],
    features: [
      "User Authentication",
      "Product Search",
      "Cart Management",
      "Order Management",
    ],
  },
  {
    id: 8,
    name: "Portfolio",
    description:
      "Portfolio is a single page website which contains my projects and some information about myself.",
    image: "https://i.postimg.cc/g05RQ5Dm/port.png",
    techStack: ["HTML", "Javascript", "Tailwind"],
    category: "vanilla",
    githubLink: "https://github.com/itsnileshgosavi/portfolio",
    liveLink: "https://portfolio.nileshgosavi.tech/",
    screenshots: [
      "/screenshots/pf1.png",
      "/screenshots/pf2.png",
      "/screenshots/pf3.png",
      "/screenshots/pf4.png",
    ],
    features: ["Projects Corousal", "About Me", "Skills", "Contact Form"],
  },
  {
    id: 9,
    name: "Weather Me",
    description:
      "Weather Me is a weather app that allows users to check the weather forecast for any city. It's a feature-rich app that allows users to check the weather forecast for any city using city name or GPS coordinates.",
    image: "https://i.postimg.cc/yYrGQ6ZG/weath.png",
    techStack: ["Javascript", "HTML", "Tailwind"],
    category: "vanilla",
    githubLink: "https://github.com/itsnileshgosavi/Weather-App",
    liveLink: "https://app-weatherme.netlify.app/",
    screenshots: ["/screenshots/wm1.png", "/screenshots/wm2.png"],
    features: [
      "Check Weather Forecast for upto 5 days",
      "Search by City Name",
      "Get Weather Forecast using GPS Coordinates",
      "Dark/Light Mode",
    ],
  },
];

export default function ProjectShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { id } = useParams();
  console.log(id);
  const projecta = myprojects.find((project) => project.id == id);
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden py-5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{projecta.name}</CardTitle>
        <CardDescription className="my-10">
          {projecta.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {projecta.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="aspect-video cursor-pointer overflow-hidden rounded-lg"
              onClick={() => {
                setSelectedImage(screenshot);
                setIsDialogOpen(true);
              }}
            >
              <img
                src={screenshot}
                alt={`${projecta.name} screenshot ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-3xl">
              <DialogTitle className="hidden">{projecta.name}</DialogTitle>
              <div className="relative">
                <img
                  src={selectedImage}
                  alt={projecta.name}
                  className="w-full h-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg">Features</h3>
          <ul className="list-disc pl-5 space-y-1">
            {projecta.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {projecta.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <a href={projecta.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href={projecta.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub Repo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
