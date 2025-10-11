import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Users,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroSolar from "@/assets/hero-solar.jpg";
import classroom from "@/assets/classroom.jpg";

const slides = [
  {
    id: 1,
    image: heroSolar,
    title: "Limited Time Offer",
    side_title: "Top Courses",
    side_sub: "Hands‑on training in solar, wind & storage. Offer ends soon.",
    subtitle: "Save Up to 60% on Top Renewable Energy Courses.",
  },
  {
    id: 2,
    image: classroom,
    title: "What Makes Us Special?",
    side_title: "Our Features",
    side_sub: "A quick look at what we offer",
    subtitle:
      "Discover why Professional Institute is your best renewable energy engineering career advancement.",
  },
];

const features = [
  { id: 1, title: "Hands‑on Labs", icon: BookOpen },
  { id: 2, title: "Expert Instructors", icon: Users },
  { id: 3, title: "Flexible Learning", icon: Clock },
  { id: 4, title: "Scholarships & Discounts", icon: DollarSign },
];

const featuredCourses = [
  {
    id: 1,
    title: "Mastering Energy Storage Systems Course (MESS) – English Version",
    description:
      "A comprehensive program covering technical and practical aspects of energy storage systems.",
    duration: "6 hours",
    students: "59+",
    image: "public/MESS_Course.png",
    price: "400.00",
    discountPrice: "80.00",
  },
  {
    id: 2,
    title:
      "Advanced Solar Water Pumping Design and Installation Course (ASPDI)",
    description:
      "In-depth training on solar water pumping design and installation.",
    duration: "2 hours",
    students: "50+",
    image: "public/ASPDI_Course.png",
    price: "120.00",
    discountPrice: "34.00",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => {
            return (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/70" />

                  <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                      {/* Left: Main hero content */}
                      <div className="text-white animate-fade-up">
                        <div className="mb-4">
                          <Badge className="gradient-primary text-white mb-4">
                            Leading Renewable Energy Education
                          </Badge>
                        </div>
                        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-lg md:text-2xl mb-6 md:mb-8 opacity-90 leading-relaxed">
                          {slide.subtitle}
                        </p>
                        <Button
                          size="lg"
                          className="gradient-primary text-white hover:scale-105 transition-transform duration-300 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold rounded-xl shadow-hero"
                        >
                          <ArrowRight className="mr-2 h-5 w-5" /> Explore All
                          Courses
                        </Button>
                      </div>

                      {/* Right: features or featured courses */}
                      <div
                        className="animate-fade-up"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <div className="mb-4 md:mb-6">
                          <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
                            {slide.side_title}
                          </h2>
                          <p className="text-sm md:text-base text-white/80">
                            {slide.side_sub}
                          </p>
                        </div>

                        <div className="space-y-3 md:space-y-4 max-h-80 md:max-h-96 overflow-y-auto pr-2">
                          {index === 1 ? (
                            <>
                              <div className="hidden md:grid grid-cols-2 gap-3">
                                {features.map((f) => {
                                  const Icon = f.icon;
                                  return (
                                    <div
                                      key={f.id}
                                      className="bg-white/95 backdrop-blur-sm border-0 shadow-hero p-3 rounded-lg flex items-center gap-3"
                                    >
                                      <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <Icon className="h-5 w-5" />
                                      </div>
                                      <div className="text-sm font-semibold text-secondary">
                                        {f.title}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              <div className="md:hidden space-y-3">
                                {features.slice(0, 2).map((f) => {
                                  const Icon = f.icon;
                                  return (
                                    <div
                                      key={f.id}
                                      className="bg-white/95 backdrop-blur-sm border-0 shadow-hero p-3 rounded-md flex items-center justify-between"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="w-10 h-8 bg-primary/10 rounded-md flex items-center justify-center text-primary">
                                          <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="text-sm font-medium">
                                          {f.title}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}

                                <Button
                                  size="sm"
                                  className="w-full gradient-primary text-white text-sm py-2"
                                  aria-label="View all features"
                                >
                                  View All Features
                                </Button>
                              </div>
                            </>
                          ) : (
                            featuredCourses
                              .slice(0, 2)
                              .map((course, courseIndex) => (
                                <Card
                                  key={course.id}
                                  className="bg-white/95 backdrop-blur-sm border-0 shadow-hero hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:block hidden"
                                  style={{
                                    animationDelay: `${
                                      0.3 + courseIndex * 0.1
                                    }s`,
                                  }}
                                >
                                  <CardContent className="p-3 md:p-4">
                                    <div className="flex gap-3 md:gap-4">
                                      <div
                                        className="w-16 md:w-20 h-12 md:h-16 bg-cover bg-center rounded-lg flex-shrink-0"
                                        style={{
                                          backgroundImage: `url(${course.image})`,
                                        }}
                                      />
                                      <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-secondary mb-1 line-clamp-1 text-sm md:text-base">
                                          {course.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground mb-2 line-clamp-1 md:line-clamp-2">
                                          {course.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-2 md:gap-3 text-xs text-muted-foreground">
                                            <div className="flex items-center">
                                              <Clock className="h-3 w-3 mr-1" />
                                              {course.duration}
                                            </div>
                                            <div className="hidden md:flex items-center">
                                              <Users className="h-3 w-3 mr-1" />
                                              {course.students}
                                            </div>
                                            <span className="text-lg text-muted-foreground line-through ml-2">
                                              ${course.price}
                                            </span>
                                            <span className="text-lg font-bold text-primary">
                                              ${course.discountPrice}
                                            </span>
                                            <Badge
                                              className="text-xs"
                                              variant="destructive"
                                            >
                                              {Math.round(
                                                ((parseFloat(course.price) -
                                                  parseFloat(
                                                    course.discountPrice
                                                  )) /
                                                  parseFloat(course.price)) *
                                                  100
                                              )}
                                              % OFF
                                            </Badge>
                                          </div>

                                          <Button
                                            size="sm"
                                            className="gradient-primary text-white text-xs px-2 md:px-3 py-1 h-6 md:h-7"
                                          >
                                            <BookOpen className="mr-1 h-3 w-3" />{" "}
                                            <span className="hidden md:inline">
                                              Enroll Now
                                            </span>
                                            <span className="md:hidden">
                                              Enroll
                                            </span>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
