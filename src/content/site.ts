export type SiteSection =
  | "hero"
  | "services"
  | "testimonials"
  | "gallery"
  | "galleryCarousel"
  | "cta"
  | "contact";
export type SiteFeature =
  "stickyNav" | "scrollReveal" | "parallax" | "lightbox" | "themeSwitcher";

export interface SiteConfig {
  company: string;
  tagline: string;
  description: string;
  theme: string;
  themeOptions: Array<{
    name: string;
    label: string;
  }>;
  language: string;
  phone: string;
  email: string;
  address: string;
  sections: SiteSection[];
  features: SiteFeature[];
  navigation: {
    actionLabel: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primaryAction: string;
    secondaryAction: string;
    signature: string;
    image: {
      src: string;
      alt: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    text: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    text: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
  };
  galleryCarousel: {
    eyebrow: string;
    title: string;
    text: string;
    slides: Array<{
      src: string;
      alt: string;
      title: string;
      text: string;
      meta: string;
    }>;
  };
  cta: {
    title: string;
    text: string;
    action: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
  };
}

export const site: SiteConfig = {
  company: "Northline Studio",
  tagline: "Interiéry na míru, rychle a spolehlivě",
  description:
    "Vzorový web pro lokální podnikání, řízený jedním typovaným konfiguračním souborem.",
  theme: "corporate",
  themeOptions: [
    { name: "light", label: "Light" },
    { name: "dark", label: "Dark" },
    { name: "cupcake", label: "Cupcake" },
    { name: "bumblebee", label: "Bumblebee" },
    { name: "emerald", label: "Emerald" },
    { name: "corporate", label: "Corporate" },
    { name: "synthwave", label: "Synthwave" },
    { name: "retro", label: "Retro" },
    { name: "cyberpunk", label: "Cyberpunk" },
    { name: "valentine", label: "Valentine" },
    { name: "halloween", label: "Halloween" },
    { name: "garden", label: "Garden" },
    { name: "forest", label: "Forest" },
    { name: "aqua", label: "Aqua" },
    { name: "lofi", label: "Lofi" },
    { name: "pastel", label: "Pastel" },
    { name: "fantasy", label: "Fantasy" },
    { name: "wireframe", label: "Wireframe" },
    { name: "black", label: "Black" },
    { name: "luxury", label: "Luxury" },
    { name: "dracula", label: "Dracula" },
    { name: "cmyk", label: "CMYK" },
    { name: "autumn", label: "Autumn" },
    { name: "business", label: "Business" },
    { name: "acid", label: "Acid" },
    { name: "lemonade", label: "Lemonade" },
    { name: "night", label: "Night" },
    { name: "coffee", label: "Coffee" },
    { name: "winter", label: "Winter" },
    { name: "dim", label: "Dim" },
    { name: "nord", label: "Nord" },
    { name: "sunset", label: "Sunset" },
    { name: "caramellatte", label: "Caramellatte" },
    { name: "abyss", label: "Abyss" },
    { name: "silk", label: "Silk" },
  ],
  language: "cs",
  phone: "+420 777 123 456",
  email: "hello@example.com",
  address: "Praha, Česká republika",
  sections: [
    "hero",
    "services",
    "testimonials",
    "gallery",
    "galleryCarousel",
    "cta",
    "contact",
  ],
  features: ["stickyNav", "scrollReveal", "themeSwitcher"],
  navigation: {
    actionLabel: "Domluvit hovor",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  seo: {
    title: "Northline Studio | Interiéry na míru",
    description:
      "Konfigurovatelná Astro šablona pro malé firemní weby s Tailwind CSS a daisyUI.",
  },
  hero: {
    eyebrow: "Webová dílna pro lokální značky",
    title:
      "Malý web, který působí jako ruční práce, ale vyrábí se jako systém.",
    text: "Šablona drží řemeslný první dojem, jasnou strukturu a rychlé spuštění. Pro každého klienta se mění obsah, fotky, téma a rytmus stránky, ne celý základ.",
    primaryAction: "Chci nabídku",
    secondaryAction: "Jak to funguje",
    signature: "Brief -> obsah -> statický web -> nasazení",
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82",
      alt: "Moderní interiér s dřevěným nábytkem na míru",
    },
  },
  services: {
    eyebrow: "Proces",
    title: "Tři kroky, jeden pevný výrobní rytmus.",
    items: [
      {
        title: "Brief bez mlhy",
        text: "Z klientského zadání vytáhneme nabídku, tón značky, lokální SEO a důkazní materiál.",
      },
      {
        title: "Konfigurace místo chaosu",
        text: "Sekce, texty, fotky a téma se mění v jednom souboru. Kód zůstává stabilní a snadno udržovatelný.",
      },
      {
        title: "Rychlé ostré spuštění",
        text: "Astro vygeneruje lehký statický web připravený pro Cloudflare Pages a další klientskou doménu.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Reference",
    title: "Krátké věty, které prodávají důvěru rychleji než dlouhý odstavec.",
    text: "V šabloně necháváme místo pro konkrétní hlas zákazníků. U lokálních služeb často rozhodne pocit, že za webem stojí skutečná práce a lidé.",
    items: [
      {
        quote:
          "Konečně web, který vypadá jako naše práce. Není přeplácaný, ale zákazníci hned pochopí, co děláme a jak nás kontaktovat.",
        name: "Jana K.",
        role: "majitelka ateliéru",
      },
      {
        quote:
          "Nejvíc pomohlo, že jsme nemuseli řešit systém. Dodali jsme fotky, pár vět, a za chvíli byl připravený web k nasazení.",
        name: "Petr M.",
        role: "řemeslná výroba",
      },
      {
        quote:
          "Šablona má jasný řád, ale pořád působí osobně. To je přesně kombinace, kterou u malých firem hledáme.",
        name: "Lucie V.",
        role: "lokální služby",
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Vizuální důkaz připravený k výměně.",
    text: "Tyto fotografie nahraďte reálnými ukázkami klienta. Rozvržení drží první dojem konkrétní a důvěryhodný.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
        alt: "Světlý interiér malé provozovny s čistými detaily",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
        alt: "Detail řemeslné práce v moderní místnosti",
      },
      {
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
        alt: "Dokončený interiérový projekt s přírodními materiály",
      },
    ],
  },
  galleryCarousel: {
    eyebrow: "Detailní galerie",
    title: "Alternativní sekce pro projekty, kde má fotografie vyprávět víc.",
    text: "Tahle varianta používá daisyUI carousel. Hodí se pro realizace, produkty, proměny před a po nebo detailní ukázky práce.",
    slides: [
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82",
        alt: "Detail zakázkového interiéru s pracovním stolem",
        title: "První dojem",
        text: "Hero fotografie, která ukáže materiál, prostor a typ práce bez zbytečného vysvětlování.",
        meta: "01 / atmosféra",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=82",
        alt: "Moderní kuchyňský detail s čistou linkou",
        title: "Detail řemesla",
        text: "Slide pro blízké záběry, struktury, povrchy a drobnosti, které zvyšují důvěryhodnost.",
        meta: "02 / detail",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=82",
        alt: "Dokončený obývací prostor s nábytkem na míru",
        title: "Hotová realizace",
        text: "Závěrečný slide nechává prostor pro výsledek, kontext zakázky a krátký dopad pro klienta.",
        meta: "03 / výsledek",
      },
    ],
  },
  cta: {
    title: "Každý další web má stejný motor, ale vlastní otisk.",
    text: "Vyměňte konfiguraci, nahraďte fotografie, zvolte daisyUI téma a pošlete ven web, který nepůsobí jako kopie z katalogu.",
    action: "Začít projekt",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Jednoduchý kontakt bez CMS.",
    text: "První verze šablony používá e-mail a telefon. Formulář lze později přidat jako volitelnou funkci.",
  },
};
