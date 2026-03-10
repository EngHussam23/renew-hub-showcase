import { useEffect, useRef, useState } from "react";
import ecoLogo from "@/assets/Eco_Green_Energy.png";
import growattLogo from "@/assets/Growatt.png";
import kacstLogo from "@/assets/KACST.png";
import nomacLogo from "@/assets/NOMAC.png";
import schneiderLogo from "@/assets/schneider-electric.png";
import enelLogo from "@/assets/enel.png";
import orstedLogo from "@/assets/orsted.png";
import firstSolarLogo from "@/assets/firstsolar.png";
import vestasLogo from "@/assets/vestas.png";
import geLogo from "@/assets/ge.png";
import siemensLogo from "@/assets/siemens.png";
import teslaLogo from "@/assets/tesla.png";

/**
 * Client data structure for company logos and information
 */
interface Client {
  name: string;
  logo: string;
}

/**
 * List of client companies with their logos
 * All logos are imported as local assets for better performance and reliability
 */
const clients: Client[] = [
  {
    name: "Tesla Energy",
    logo: teslaLogo,
  },
  {
    name: "Siemens",
    logo: siemensLogo,
  },
  {
    name: "General Electric",
    logo: geLogo,
  },
  {
    name: "Vestas",
    logo: vestasLogo,
  },
  {
    name: "First Solar",
    logo: firstSolarLogo,
  },
  {
    name: "Orsted",
    logo: orstedLogo,
  },
  {
    name: "Enel Green Power",
    logo: enelLogo,
  },
  {
    name: "Schneider Electric",
    logo: schneiderLogo,
  },
  {
    name: "Eco Green Energy",
    logo: ecoLogo,
  },
  {
    name: "Growatt",
    logo: growattLogo,
  },
  {
    name: "KACST",
    logo: kacstLogo,
  },
  {
    name: "NOMAC",
    logo: nomacLogo,
  },
];

/**
 * ClientsSection Component
 *
 * Displays a scrolling carousel of client logos with business metrics.
 * Features:
 * - Auto-scrolling carousel with manual scroll support
 * - Seamless infinite loop
 * - Pause on hover/touch interaction
 * - Visual index counter
 * - Business metrics display
 * - Responsive design
 */
export const ClientsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const totalUniqueWidth = scrollContainer.scrollWidth / 2 || 0;

    const children = Array.from(scrollContainer.children) as HTMLElement[];

    const computeItemFullWidth = () => {
      const first = children[0];
      const second = children[1];
      if (!first) return 1;
      const rect0 = first.getBoundingClientRect();
      if (!second) return rect0.width;
      const rect1 = second.getBoundingClientRect();
      const gap = rect1.left - rect0.left - rect0.width;
      return rect0.width + (gap > 0 ? gap : 0);
    };

    let itemWidth = computeItemFullWidth();

    const updateIndex = () => {
      if (!scrollContainer) return;
      const eff = totalUniqueWidth
        ? scrollContainer.scrollLeft % totalUniqueWidth
        : scrollContainer.scrollLeft;
      const idx = Math.round(eff / (itemWidth || 1));
      setVisibleIndex(idx % clients.length);
    };

    const scrollStep = () => {
      if (!scrollContainer || isInteractingRef.current) return;
      if (scrollContainer.scrollLeft >= totalUniqueWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      updateIndex();
    };

    const onPointerEnter = () => (isInteractingRef.current = true);
    const onPointerLeave = () => (isInteractingRef.current = false);

    const interval = setInterval(scrollStep, 30);
    scrollContainer.addEventListener("scroll", updateIndex, { passive: true });
    scrollContainer.addEventListener("pointerenter", onPointerEnter);
    scrollContainer.addEventListener("pointerleave", onPointerLeave);
    scrollContainer.addEventListener("touchstart", onPointerEnter, {
      passive: true,
    });
    scrollContainer.addEventListener("touchend", onPointerLeave);

    // initial compute
    setTimeout(() => {
      itemWidth = computeItemFullWidth();
      updateIndex();
    }, 50);

    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener("scroll", updateIndex);
      scrollContainer.removeEventListener("pointerenter", onPointerEnter);
      scrollContainer.removeEventListener("pointerleave", onPointerLeave);
      scrollContainer.removeEventListener("touchstart", onPointerEnter);
      scrollContainer.removeEventListener("touchend", onPointerLeave);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Clients & Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading renewable energy companies and organizations
            worldwide for professional development and training programs.
          </p>
        </div>

        {/* Logos Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-12 overflow-hidden whitespace-nowrap animate-slide-in"
            style={{ width: "calc(200% + 3rem)" }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className =
                        "text-sm font-semibold text-muted-foreground text-center px-4";
                      fallback.textContent = client.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className =
                        "text-sm font-semibold text-muted-foreground text-center px-4";
                      fallback.textContent = client.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        {/* Business Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="bg-white/5 rounded-lg px-4 py-3">
              <div className="text-sm text-muted-foreground">
                Enterprise Partners
              </div>
              <div className="text-2xl md:text-3xl font-bold">500+</div>
            </div>
            <div className="bg-white/5 rounded-lg px-4 py-3">
              <div className="text-sm text-muted-foreground">
                Countries Reached
              </div>
              <div className="text-2xl md:text-3xl font-bold">50+</div>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Programs</div>
              <div className="text-3xl font-bold">120+</div>
              <div className="text-sm text-muted-foreground">
                (Short courses, Certifications)
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-end">
            <div className="bg-white/5 rounded-lg px-4 py-3">
              <div className="text-sm text-muted-foreground">
                Professionals Trained
              </div>
              <div className="text-2xl md:text-3xl font-bold">10,000+</div>
            </div>
            <div className="bg-white/5 rounded-lg px-4 py-3">
              <div className="text-sm text-muted-foreground">Satisfaction</div>
              <div className="text-2xl md:text-3xl font-bold">95%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
