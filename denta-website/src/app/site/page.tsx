/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   SVG ICONS
   ============================================================ */
const ToothIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
    <path d="M12 2C8.5 2 5 5 5 8c0 2 1 4 1 7s1 5 2.5 5 2-2 3.5-2 2 2 3.5 2S17 17 17 15s1-5 1-7c0-3-3.5-6-6-6z"/>
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.07 1.2 2 2 0 012.04 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.13 7.85a16 16 0 006 6l1.21-1.22a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth={1.5} width={16} height={16}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

/* ============================================================
   SERVICES DATA WITH AUTHENTIC MATCHING DENTAL IMAGERY
   ============================================================ */
export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  imageAlt: string;
  color: string;
  iconColor: string;
  tag: string;
  benefits: string[];
  procedureSteps: string[];
  duration: string;
  recovery: string;
}

export const dentalServices: ServiceItem[] = [
  {
    id: "preventive-care",
    title: "Preventive Care",
    shortDesc: "Routine ultrasonic hygiene, thorough examination, and digital imaging to keep your teeth permanently healthy.",
    fullDesc: "Our comprehensive preventive protocol includes low-radiation digital scans, gentle ultrasonic plaque scaling, tooth remineralization, and early-stage cavity detection before problems arise.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Dentist performing gentle preventive teeth cleaning and oral examination with precision mirror",
    color: "#f0fdf4",
    iconColor: "#16a34a",
    tag: "Hygiene & Checkup",
    benefits: ["Gentle ultrasonic cleaning", "Early cavity & gum disease detection", "Enamel-strengthening fluoridation"],
    procedureSteps: ["Diagnostic digital imaging", "Precision periodontal pocket charting", "Gentle polish & protective fluoride coat"],
    duration: "45 Minutes",
    recovery: "Immediate normal eating & activity",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent, bio-compatible titanium tooth roots capped with custom zirconia crowns that feel and look 100% natural.",
    fullDesc: "Restore missing teeth with 3D computer-guided dental implantology. Titanium osseointegration fuses directly into the jawbone, preserving facial structure and lifetime chewing efficiency.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Precision dental implant model restoration showing biocompatible titanium post and ceramic crown",
    color: "#eff6ff",
    iconColor: "#2563eb",
    tag: "Permanent Tooth Replacement",
    benefits: ["Prevents bone resorption", "Chew all foods with 100% confidence", "Matches natural tooth shade and contour"],
    procedureSteps: ["3D CBCT bone scan analysis", "Computer-guided micro-incision placement", "Custom handcrafted ceramic crown attachment"],
    duration: "60–90 Minutes per stage",
    recovery: "24–48 hours mild healing period",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDesc: "Handcrafted ultra-thin porcelain veneers, composite bonding, and aesthetic smile contouring designed for your facial symmetry.",
    fullDesc: "Transform uneven, chipped, or discolored teeth into a luminous, harmonious smile. Every veneer is custom-milled to capture the subtle translucency of natural enamel.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Patient with radiant porcelain veneers showcasing cosmetic aesthetic dentistry results",
    color: "#fdf2f8",
    iconColor: "#9333ea",
    tag: "Smile Makeover",
    benefits: ["Flawless shade and shape symmetry", "Stain-resistant porcelain surface", "Minimal conservative tooth preparation"],
    procedureSteps: ["Digital smile design simulation", "Precision 3D intraoral impression", "Artisan veneer bonding and bite calibration"],
    duration: "2 Comprehensive Visits",
    recovery: "Zero downtime, instant radiant confidence",
  },
  {
    id: "restorative-care",
    title: "Restorative Care",
    shortDesc: "Tooth-colored composite fillings, monolithic zirconia crowns, and root canal therapy that rebuild structural tooth integrity.",
    fullDesc: "Eliminate dental pain, arrest decay, and rebuild fractured teeth with biomimetic restorative materials that match the tensile strength and coloration of healthy tooth structure.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Dentist performing precision restorative dental procedure with dental operating light and loupes",
    color: "#fffbeb",
    iconColor: "#d97706",
    tag: "Decay Repair & Crowns",
    benefits: ["100% metal-free tooth colored materials", "Pain-free gentle local anesthesia", "Strengthens compromised dental anatomy"],
    procedureSteps: ["Isolation and microscopic decay removal", "Biocompatible composite layering", "High-gloss polish and occlusion check"],
    duration: "45–60 Minutes",
    recovery: "Same-day normal mastication",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "In-office blue light laser whitening delivering up to 8 shades lighter in just 45 minutes with zero enamel sensitivity.",
    fullDesc: "Safely dissolve years of stubborn coffee, tea, and tobacco stains. Our clinical-grade whitening gel incorporates potassium nitrate desensitizers for comfortable, dazzling results.",
    image: "https://images.unsplash.com/photo-1571772930222-f2184c427f9f?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Teeth whitening shade guide comparison demonstrating luminous white dental enamel",
    color: "#f0f9ff",
    iconColor: "#0891b2",
    tag: "In-Office Laser Treatment",
    benefits: ["Up to 8 shades lighter in one visit", "Clinically formulated anti-sensitivity gel", "Long-lasting luminous brightness"],
    procedureSteps: ["Protective gingival barrier application", "High-potency hydrogen peroxide activation", "Fluoride soothing treatment"],
    duration: "45 Minutes",
    recovery: "Immediate results; avoid dark liquids for 48h",
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    shortDesc: "Virtually invisible, removable orthodontic aligners that discreetly straighten teeth and correct bite misalignment comfortably.",
    fullDesc: "Achieve optimal dental alignment without bulky metal brackets. Our medical-grade clear aligner series applies gentle, targeted pressure to guide teeth into their ideal dental arch.",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Clear orthodontic aligner tray and patient with straightened teeth",
    color: "#f5f3ff",
    iconColor: "#6366f1",
    tag: "Discreet Orthodontics",
    benefits: ["Completely removable for eating and flossing", "No painful metal wires or mouth abrasions", "Predictable 3D digital progress tracking"],
    procedureSteps: ["Digital 3D intraoral bite scan", "Custom aligner series 3D printing", "Fortnightly aligner stage progression"],
    duration: "6–14 Months total therapy",
    recovery: "Discreet daily wear; normal lifestyle",
  },
];

/* ============================================================
   BEFORE & AFTER CLINICAL TREATMENT CASES
   ============================================================ */
export interface BeforeAfterCase {
  id: string;
  serviceTitle: string;
  category: string;
  caseDescription: string;
  treatmentDetails: string;
  duration: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  beforeNote: string;
  afterNote: string;
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-whitening",
    serviceTitle: "In-Office Laser Whitening",
    category: "Teeth Whitening",
    caseDescription: "Patient presented with severe intrinsic & extrinsic enamel discoloration and deep chromogenic yellow staining (Shade A4) from years of daily coffee and tea.",
    treatmentDetails: "Single-visit medical in-office laser whitening session with protective gingival barrier and remineralizing fluoride sealant.",
    duration: "45 Minutes Single Visit",
    beforeImage: "/images/before-after/whitening-before.jpg",
    beforeAlt: "Before whitening treatment: Clinical photo showing heavy yellow chromogenic staining and enamel discoloration (Shade A4)",
    afterImage: "/images/before-after/whitening-after.jpg",
    afterAlt: "After whitening treatment: Clinical photo showing gleaming, bright white dental enamel 8 shades lighter (Shade BL1)",
    beforeNote: "Before: Heavy enamel staining (Shade A4)",
    afterNote: "After: Luminous bright smile (Shade BL1)",
  },
  {
    id: "case-veneers",
    serviceTitle: "Porcelain Veneer Smile Makeover",
    category: "Cosmetic Dentistry",
    caseDescription: "Patient presented with severe enamel attrition, dark tooth wear, brown staining, and irregular incisal edges across upper and lower arches.",
    treatmentDetails: "Custom hand-layered porcelain veneers and aesthetic crowns restoring ideal tooth length, golden proportion symmetry, and natural vitality.",
    duration: "2 Visits across 10 Days",
    beforeImage: "/images/before-after/veneers-before.jpg",
    beforeAlt: "Before veneer treatment: Clinical photo showing severe enamel erosion, brown staining, and irregular worn incisal edges",
    afterImage: "/images/before-after/veneers-after.jpg",
    afterAlt: "After veneer treatment: Clinical photo showing radiant, handcrafted translucent porcelain veneers with natural smile arc",
    beforeNote: "Before: Severe enamel erosion & dark stains",
    afterNote: "After: Flawless translucent porcelain veneers",
  },
  {
    id: "case-aligners",
    serviceTitle: "Clear Aligner Orthodontic Correction",
    category: "Clear Aligners",
    caseDescription: "Patient presented with moderate anterior crowding, rotated lateral and central incisors, and an uneven smile arc.",
    treatmentDetails: "Custom digitally planned clear aligner therapy gently guiding teeth into an expansive, harmonious dental arch.",
    duration: "7 Months Active Treatment",
    beforeImage: "/images/before-after/aligners-before.jpg",
    beforeAlt: "Before clear aligner treatment: Clinical photo showing crowded, rotated front incisors and constricted dental arch",
    afterImage: "/images/before-after/aligners-after.jpg",
    afterAlt: "After clear aligner treatment: Clinical photo showing straightened incisors and a harmonious, aligned dental arch",
    beforeNote: "Before: Crowded, rotated incisors",
    afterNote: "After: Smoothly aligned dental arch",
  },
  {
    id: "case-implants",
    serviceTitle: "Full Arch Dental Implant Reconstruction",
    category: "Dental Implants",
    caseDescription: "Patient presented with terminal dentition, broken and decayed roots, missing teeth, and severe collapse of vertical occlusion.",
    treatmentDetails: "Computer-guided All-on-X dental implant placement with immediate load fixed zirconia bridge restoring full mastication and facial aesthetics.",
    duration: "Immediate Function Protocol",
    beforeImage: "/images/before-after/implants-before.jpg",
    beforeAlt: "Before dental implant treatment: Clinical photo showing multiple missing teeth, broken decayed roots, and bite collapse",
    afterImage: "/images/before-after/implants-after.jpg",
    afterAlt: "After dental implant treatment: Clinical photo showing permanent full arch zirconia implant prosthesis restoring complete smile and bite",
    beforeNote: "Before: Broken dentition & severe tooth loss",
    afterNote: "After: Fixed permanent zirconia implant bridge",
  },
];

/* ============================================================
   DOCTORS DATA
   ============================================================ */
const doctors = [
  {
    name: "Dr. Neha Sharma",
    spec: "Dental Specialist & Surgeon",
    exp: "10+ Years Experience",
    bio: "Specializing in painless oral surgery and advanced preventive care. Known for her gentle approach with anxious patients.",
    img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&auto=format&fit=crop&q=80",
    imgAlt: "Dr. Neha Sharma, Senior Dental Specialist",
  },
  {
    name: "Dr. Rahul Kapoor",
    spec: "Chief Implantologist",
    exp: "12+ Years Experience",
    bio: "Fellow of International Congress of Oral Implantologists with over 2,500 successful computer-guided implant restorations.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
    imgAlt: "Dr. Rahul Kapoor, Chief Dental Implantologist",
  },
  {
    name: "Dr. Pooja Mehta",
    spec: "Orthodontist & Aligner Specialist",
    exp: "8+ Years Experience",
    bio: "Certified clear aligner specialist dedicated to discreet orthodontic treatments and functional occlusion harmonization.",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=80",
    imgAlt: "Dr. Pooja Mehta, Orthodontist and Aligner Specialist",
  },
  {
    name: "Dr. Vivek Bansal",
    spec: "Aesthetic & Cosmetic Dentist",
    exp: "11+ Years Experience",
    bio: "Master ceramist collaborator crafting bespoke porcelain veneers and comprehensive digital smile designs.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
    imgAlt: "Dr. Vivek Bansal, Aesthetic and Cosmetic Dentist",
  },
];

/* ============================================================
   PROCESS STEPS
   ============================================================ */
const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Meet our specialists for a thorough, relaxed discussion of your dental goals and medical history.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Digital Diagnosis",
    desc: "Low-radiation 3D imaging, intraoral camera photography, and digital bite scans.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Custom Plan",
    desc: "Transparent treatment options, clear visual simulations, and all-inclusive pricing with zero surprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Gentle Procedure",
    desc: "Painless treatment administered with modern technology and patient-comfort amenities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M12 2C8.5 2 5 5 5 8c0 2 1 4 1 7s1 5 2.5 5 2-2 3.5-2 2 2 3.5 2S17 17 17 15s1-5 1-7c0-3-3.5-6-6-6z"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Lasting Follow-Up",
    desc: "Dedicated post-treatment check-ins, warranty assurance, and routine hygiene guidance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

/* ============================================================
   REVIEWS DATA
   ============================================================ */
const reviews = [
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    avatar: "P",
    text: "The team at Denta is incredibly professional and caring. My dental implants look and feel completely natural. I couldn't be happier with the results!",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Software Engineer",
    avatar: "A",
    text: "I had severe dental anxiety, but the staff made me feel completely at ease. The modern technology they use is impressive, and the whitening results are fantastic.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Teacher",
    avatar: "S",
    text: "Best dental clinic I've ever visited. Dr. Pooja Mehta worked wonders on my clear aligner treatment. The entire process was smooth and pain-free. Highly recommended!",
    rating: 5,
  },
];

/* ============================================================
   FAQS DATA
   ============================================================ */
const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "We recommend visiting the dentist every 6 months for routine check-ups and cleanings. However, if you have specific dental concerns or conditions, your dentist may recommend more frequent visits.",
  },
  {
    q: "Are dental implants painful?",
    a: "Dental implant procedures are performed under local anesthesia, so you shouldn't feel pain during the procedure. Some discomfort and swelling may occur afterward, which can be managed with standard over-the-counter pain medications.",
  },
  {
    q: "What is the cost of teeth whitening?",
    a: "The cost varies depending on the whitening method chosen. In-office professional laser whitening typically ranges from ₹8,000 to ₹15,000. We offer transparent payment plans to make treatment accessible.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes, we accept most major dental insurance plans. Our front-desk coordinator will help you navigate your insurance benefits and maximize your coverage with minimal paperwork.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can request an appointment online through our website showcase booking button, by calling us at +91 987 654 3210, or by visiting our clinic directly.",
  },
];

/* ============================================================
   MAIN SITE COMPONENT
   ============================================================ */
export default function DentalWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string>("");
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [bookingRef, setBookingRef] = useState("DEN-2026-8491");

  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll listener for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (menuOpen || appointmentModalOpen || selectedService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, appointmentModalOpen, selectedService]);

  // Handle ESC key to close modals and menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setAppointmentModalOpen(false);
        setSelectedService(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Before / After Slider Drag Calculation
  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSliderMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleSliderMove(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleSliderMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleSliderMove]);

  // Open Appointment with specific service pre-selected
  const handleOpenAppointment = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreSelectedService(serviceTitle);
      setFormData((prev) => ({ ...prev, service: serviceTitle }));
    }
    setSelectedService(null);
    setAppointmentModalOpen(true);
    setFormSuccess(false);
    setFormError("");
  };

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError("Please enter your name and phone number.");
      return;
    }
    setFormSubmitting(true);
    setFormError("");
    setBookingRef(`DEN-2026-${Math.floor(1000 + Math.random() * 9000)}`);

    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
    }, 900);
  };

  const currentCase = beforeAfterCases[activeCaseIndex] || beforeAfterCases[0];

  return (
    <>
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* JSON-LD Structured Data Schema for LocalBusiness & FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Dentist",
                "@id": "https://denta-clinic.example.com/#clinic",
                "name": "Denta Clinic",
                "description": "Comprehensive, compassionate dental care and modern technology. Specializing in preventive dental hygiene, dental implants, porcelain veneers, clear aligners, and teeth whitening.",
                "url": "https://denta-clinic.example.com",
                "telephone": "+91 987 654 3210",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Dental Care Street",
                  "addressLocality": "Smile City",
                  "postalCode": "12345",
                  "addressCountry": "IN"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "20:00"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://denta-clinic.example.com/#faq",
                "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                  }
                }))
              }
            ]
          }),
        }}
      />

      {/* GLOBAL VIDEO BACKGROUND WITH OPTIMIZED POSTER FALLBACK */}
      <div className="video-background" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1200&auto=format&fit=crop&q=80"
        >
          <source src="/dental-bg.mp4" type="video/mp4" />
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* AMBIENT GRADIENT OVERLAY */}
      <div className="video-overlay" aria-hidden="true" />

      {/* ============================================================
         HEADER & NAVIGATION
         ============================================================ */}
      <header className={`header ${scrolled ? "scrolled" : ""}`} role="banner">
        <a href="#home" className="header-logo" aria-label="Denta Clinic Homepage">
          <div className="header-logo-icon" aria-hidden="true">
            <ToothIcon />
          </div>
          Denta
        </a>

        <nav aria-label="Primary Navigation">
          <ul className="header-nav">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Before & After", href: "#before-after" },
              { label: "About Us", href: "#about" },
              { label: "Our Doctors", href: "#doctors" },
              { label: "Process", href: "#process" },
              { label: "Reviews", href: "#reviews" },
              { label: "FAQs", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="btn-book"
            onClick={() => handleOpenAppointment()}
            aria-label="Book a dental consultation appointment"
          >
            Book Appointment <ArrowRight />
          </button>
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <button
          type="button"
          className="mobile-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close mobile navigation"
        >
          ✕
        </button>
        <ul className="mobile-menu-nav">
          {[
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "Before & After", href: "#before-after" },
            { label: "About Us", href: "#about" },
            { label: "Our Doctors", href: "#doctors" },
            { label: "Our Process", href: "#process" },
            { label: "Patient Reviews", href: "#reviews" },
            { label: "FAQs", href: "#faq" },
            { label: "Clinic Location", href: "#contact" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  setTimeout(() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: 24 }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setMenuOpen(false);
                handleOpenAppointment();
              }}
              style={{ display: "inline-flex", width: "100%", justifyContent: "center" }}
            >
              Book Appointment <ArrowRight />
            </button>
          </li>
        </ul>
      </div>

      {/* ============================================================
         PAGE CONTENT
         ============================================================ */}
      <main id="main-content" className="page-wrapper" role="main">
        {/* HERO SECTION */}
        <section id="home" className="hero-section" aria-labelledby="hero-title-id">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                Advanced Dental Care
              </div>
              <h1 id="hero-title-id" className="hero-title">
                Your <em className="accent-word">Smile</em><br />
                in Expert<br />
                <strong>Hands</strong>
              </h1>
              <p className="hero-subtitle">
                Personalized treatment. Modern technology.<br />
                A comfortable experience. Because your<br />
                smile deserves the best.
              </p>
              <div className="hero-buttons">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleOpenAppointment()}
                >
                  Book Appointment <ArrowRight />
                </button>
                <a href="#about" className="btn-secondary">
                  <span className="play-icon" aria-hidden="true">
                    <PlayIcon />
                  </span>
                  Explore Our Story
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-icon">
                    <ShieldIcon />
                  </div>
                  <div>
                    <div className="hero-stat-number">15+</div>
                    <div className="hero-stat-label">Years of Excellence</div>
                  </div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-icon">
                    <ToothIcon />
                  </div>
                  <div>
                    <div className="hero-stat-number">10K+</div>
                    <div className="hero-stat-label">Happy Patients</div>
                  </div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-icon">
                    <StarIcon filled />
                  </div>
                  <div>
                    <div className="hero-stat-number">98%</div>
                    <div className="hero-stat-label">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-image-main">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop&q=80"
                  alt="Senior dental surgeon performing gentle clinical dental care"
                  loading="eager"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="hero-float-card hero-float-card-top">
                <div className="hero-float-card-icon">
                  <CheckIcon />
                </div>
                <div>
                  <div className="hero-float-card-title">Gentle. Precise.</div>
                  <div className="hero-float-card-text">Care You Can Trust.</div>
                </div>
              </div>

              <div className="hero-float-card hero-float-card-bottom">
                <div className="hero-float-card-icon">
                  <ClockIcon />
                </div>
                <div>
                  <div className="hero-float-card-title">Modern Technology</div>
                  <div className="hero-float-card-text">Safer Treatments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
           SERVICES SECTION (WITH AUTHENTIC IMAGERY MATCHING SERVICES)
           ============================================================ */}
        <section id="services" className="services-section section-overlap" aria-labelledby="services-heading-id">
          <div className="services-header">
            <div className="section-label">Our Services</div>
            <h2 id="services-heading-id" className="section-heading">
              Complete Dental Care<br />
              for Every <em>Smile</em>
            </h2>
            <p className="section-subtext">
              From preventive hygiene to advanced implantology, every treatment is delivered with biological precision and patient comfort. Click any service card to view clinical details.
            </p>
          </div>

          <div className="services-grid">
            {dentalServices.map((service) => (
              <article
                key={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
                aria-label={`View clinical details for ${service.title}`}
              >
                <div className="service-card-media">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="service-card-img"
                  />
                  <span className="service-card-pill">{service.tag}</span>
                </div>
                <div className="service-card-body">
                  <div className="service-card-title">{service.title}</div>
                  <p className="service-card-desc">{service.shortDesc}</p>
                  <div className="service-card-footer">
                    <span className="service-explore-text">Explore Treatment</span>
                    <div className="service-card-arrow" aria-hidden="true">
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================================================
           BEFORE & AFTER CLINICAL TRANSFORMATIONS (TOUCH & KEYBOARD ACCESSIBLE)
           ============================================================ */}
        <section id="before-after" className="before-after-section section-overlap" aria-labelledby="ba-heading">
          <div className="before-after-header">
            <div className="section-label">Real Patient Transformations</div>
            <h2 id="ba-heading" className="section-heading">
              Before & After <em>Results</em>
            </h2>
            <p className="section-subtext">
              Inspect genuine clinical outcomes across our dental treatments. Drag the slider or use your keyboard arrow keys to compare the before and after transformation.
            </p>
          </div>

          {/* CASE TABS */}
          <div className="ba-tabs" role="tablist" aria-label="Clinical Treatment Cases">
            {beforeAfterCases.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={activeCaseIndex === idx}
                className={`ba-tab-btn ${activeCaseIndex === idx ? "active" : ""}`}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
              >
                {c.category}
              </button>
            ))}
          </div>

          {/* INTERACTIVE COMPARISON VIEWER */}
          <div className="ba-stage">
            <div
              ref={sliderRef}
              className="ba-comparison-container"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              role="slider"
              aria-label="Before and after clinical comparison slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  setSliderPosition((prev) => Math.max(0, prev - 5));
                } else if (e.key === "ArrowRight") {
                  setSliderPosition((prev) => Math.min(100, prev + 5));
                } else if (e.key === "Home") {
                  setSliderPosition(0);
                } else if (e.key === "End") {
                  setSliderPosition(100);
                }
              }}
            >
              {/* BEFORE IMAGE (Full Background) */}
              <div className="ba-image-layer ba-layer-before">
                <img
                  src={currentCase.beforeImage}
                  alt={currentCase.beforeAlt}
                  loading="lazy"
                  className="ba-img"
                />
                <span className="ba-label ba-label-before">Before Treatment</span>
              </div>

              {/* AFTER IMAGE (Clipped Overlay) */}
              <div
                className="ba-image-layer ba-layer-after"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={currentCase.afterImage}
                  alt={currentCase.afterAlt}
                  loading="lazy"
                  className="ba-img"
                />
                <span className="ba-label ba-label-after">After Treatment</span>
              </div>

              {/* SLIDER DIVIDER LINE & HANDLE */}
              <div
                className="ba-handle-line"
                style={{ left: `${sliderPosition}%` }}
                aria-hidden="true"
              >
                <div className="ba-handle-circle">
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <polyline points="15 18 9 12 15 6" />
                    <polyline points="9 18 3 12 9 6" style={{ transform: "rotate(180deg) translate(-24px, -24px)" }} />
                  </svg>
                </div>
              </div>
            </div>

            {/* CASE SUMMARY CARD */}
            <div className="ba-details-card">
              <div className="ba-details-top">
                <div>
                  <span className="ba-details-badge">{currentCase.category}</span>
                  <h3 className="ba-details-title">{currentCase.serviceTitle}</h3>
                </div>
                <div className="ba-duration-badge">
                  <ClockIcon /> {currentCase.duration}
                </div>
              </div>
              <p className="ba-details-desc">{currentCase.caseDescription}</p>
              <div className="ba-treatment-note">
                <strong>Protocol:</strong> {currentCase.treatmentDetails}
              </div>
              <div className="ba-comparison-legend">
                <div className="ba-legend-item">
                  <span className="ba-legend-dot before-dot" />
                  <span>{currentCase.beforeNote}</span>
                </div>
                <div className="ba-legend-item">
                  <span className="ba-legend-dot after-dot" />
                  <span>{currentCase.afterNote}</span>
                </div>
              </div>
              <div className="ba-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleOpenAppointment(currentCase.category)}
                >
                  Book Consultation for {currentCase.category} <ArrowRight />
                </button>
              </div>
              <p className="ba-disclaimer-note">
                * Clinical showcase demonstration. Individual patient treatment outcomes vary based on individual physiological conditions and diagnosis.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
           ABOUT SECTION
           ============================================================ */}
        <section id="about" className="about-section section-overlap" aria-labelledby="about-heading">
          <div className="about-grid">
            <div className="about-left">
              <div className="section-label">About Denta</div>
              <h2 id="about-heading" className="section-heading">
                More Than<br />
                Just <em>Dental Care</em>
              </h2>
              <p className="about-desc">
                At Denta, we combine digital accuracy, compassionate chairside care, and biological dentistry to give you the healthiest possible smile. Your physical comfort and long-term oral vitality are always our primary priority.
              </p>
              <button
                type="button"
                className="about-learn-btn"
                onClick={() => handleOpenAppointment()}
              >
                Schedule Clinic Tour & Consultation <ArrowRight />
              </button>
              <div className="about-patients">
                <div className="about-patient-avatars" aria-hidden="true">
                  {["A", "B", "C", "D"].map((l) => (
                    <div key={l} className="about-patient-avatar">{l}</div>
                  ))}
                </div>
                <div className="about-patients-text">
                  <strong>10,000+</strong>
                  Happy Smiles Restored
                </div>
              </div>
            </div>

            <div className="about-right">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=80"
                  alt="Smiling patient with healthy natural dental aesthetics"
                  loading="lazy"
                />
              </div>
              <div className="about-img-overlay">
                <img
                  src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=600&auto=format&fit=crop&q=80"
                  alt="Modern ergonomic dental operatory chair and clinical equipment"
                  loading="lazy"
                />
              </div>
              <div className="about-float-badge">
                <div className="about-float-badge-title">Beautiful Smiles.<br />Better Lives.</div>
              </div>
              <div className="about-img-corner">
                <div className="about-img-corner-icon">
                  <ToothIcon />
                </div>
                <div className="about-img-corner-text">Modern Equipment<br />For Precise Treatment</div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {[
              { num: "10K+", label: "Happy Patients" },
              { num: "50+", label: "Advanced Procedures" },
              { num: "15+", label: "Years of Experience" },
              { num: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="about-stat-item">
                <div className="about-stat-number">{stat.num}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
           WHY CHOOSE / SAFETY SECTION
           ============================================================ */}
        <section className="safety-section section-overlap" aria-label="Why Choose Denta Clinic">
          <div className="safety-inner">
            <div className="safety-layout">
              <div>
                <div className="section-label" style={{ color: "rgba(74,222,128,0.8)" }}>Why Choose Denta</div>
                <h2 className="safety-heading">
                  Advanced Care<br />
                  for Healthier <em style={{ fontStyle: "italic" }}>Smiles</em>
                </h2>
              </div>
              <div className="safety-features">
                {[
                  {
                    title: "Advanced Technology",
                    desc: "Digital 3D intraoral scanning and computer-guided implant planning for surgical accuracy.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Hospital-Grade Hygiene",
                    desc: "Multi-stage autoclaving and strict sterilization protocols matching global infection control standards.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Safety Protocols",
                    desc: "Strict pre-procedural screenings, disposable barriers, and clean HEPA-filtered air circulation.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Certified Specialists",
                    desc: "Board-certified implantologists, orthodontists, and cosmetic dentists with continuous training.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                      </svg>
                    ),
                  },
                ].map((f) => (
                  <div key={f.title} className="safety-feature">
                    <div className="safety-feature-icon">{f.icon}</div>
                    <div className="safety-feature-title">{f.title}</div>
                    <div className="safety-feature-desc">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
           DOCTORS SECTION
           ============================================================ */}
        <section id="doctors" className="doctors-section section-overlap" aria-labelledby="doctors-heading">
          <div className="doctors-header">
            <div className="doctors-header-left">
              <div className="section-label">Our Doctors</div>
              <h2 id="doctors-heading" className="section-heading">Meet Our Specialists</h2>
              <p className="doctors-header-sub">Experienced. Caring. Dedicated to Your Smile.</p>
            </div>
            <button
              type="button"
              className="doctors-view-btn"
              onClick={() => handleOpenAppointment()}
            >
              Book Specialist Consultation <ArrowRight />
            </button>
          </div>

          <div className="doctors-grid">
            {doctors.map((doc) => (
              <div key={doc.name} className="doctor-card">
                <div className="doctor-card-image">
                  <img src={doc.img} alt={doc.imgAlt} loading="lazy" />
                </div>
                <div className="doctor-card-info">
                  <div>
                    <div className="doctor-name">{doc.name}</div>
                    <div className="doctor-spec">{doc.spec}</div>
                    <div className="doctor-exp">{doc.exp}</div>
                    <p style={{ fontSize: 13, color: "#6b7280", marginTop: 8, lineHeight: 1.5 }}>
                      {doc.bio}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="doctor-arrow"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, doctor: doc.name }));
                      handleOpenAppointment();
                    }}
                    aria-label={`Book an appointment with ${doc.name}`}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
           PROCESS SECTION
           ============================================================ */}
        <section id="process" className="process-section section-overlap" aria-labelledby="process-heading">
          <div className="process-header">
            <div className="section-label">Our Process</div>
            <h2 id="process-heading" className="section-heading">
              Your Journey to<br />
              a <em>Healthier Smile</em>
            </h2>
          </div>
          <div className="process-steps">
            {steps.map((step) => (
              <div key={step.num} className="process-step">
                <div className="process-step-num">{step.num}</div>
                <div className="process-step-icon">{step.icon}</div>
                <div className="process-step-title">{step.title}</div>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
           PATIENT REVIEWS
           ============================================================ */}
        <section id="reviews" className="reviews-section section-overlap" aria-labelledby="reviews-heading">
          <div className="reviews-header">
            <div className="section-label">Patient Reviews</div>
            <h2 id="reviews-heading" className="section-heading">
              Real Stories,<br />
              Real <em>Smiles</em>
            </h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.name} className="review-card">
                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} filled />
                  ))}
                </div>
                <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                <div className="review-author">
                  <div className="review-avatar" aria-hidden="true">{review.avatar}</div>
                  <div>
                    <div className="review-author-name">{review.name}</div>
                    <div className="review-author-role">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
           CALL TO ACTION BANNER
           ============================================================ */}
        <section className="cta-section section-overlap" aria-label="Book your dental appointment">
          <div className="cta-inner">
            <div>
              <div className="section-label" style={{ color: "rgba(74,222,128,0.7)" }}>
                Ready for a Healthier Smile?
              </div>
              <h2 className="cta-heading">
                Let&apos;s Find the Right<br />
                Treatment for You
              </h2>
            </div>

            <div className="cta-contact">
              <div className="cta-phone-label">
                <PhoneIcon /> Call Us Today
              </div>
              <a href="tel:+919876543210" className="cta-phone-num" style={{ textDecoration: "none", color: "inherit" }}>
                +91 987 654 3210
              </a>
              <div className="cta-hours">Mon – Sat: 9:00 AM – 8:00 PM</div>
            </div>

            <div className="cta-right">
              <button
                type="button"
                className="cta-book-btn"
                onClick={() => handleOpenAppointment()}
              >
                Book Appointment <ArrowRight />
              </button>
              <div className="cta-book-note">Quick. Easy. Convenient.</div>
            </div>
          </div>
        </section>

        {/* ============================================================
           FAQS & CLINIC LOCATION
           ============================================================ */}
        <section id="faq" className="faq-section section-overlap" aria-labelledby="faq-heading">
          <div className="faq-layout">
            <div className="faq-left">
              <div className="section-label">FAQs</div>
              <h2 id="faq-heading" className="section-heading">
                Frequently<br />
                Asked <em>Questions</em>
              </h2>
              <p className="section-subtext" style={{ marginBottom: 32 }}>
                Have questions about procedures, insurance, or recovery? Browse our answers or get in touch with our team.
              </p>
              <button
                type="button"
                className="faq-ask-btn"
                onClick={() => handleOpenAppointment()}
              >
                Ask a Question <ArrowRight />
              </button>

              {/* Location Card */}
              <div className="faq-location" id="contact">
                <div className="faq-location-title">Visit Our Clinic</div>
                <div className="faq-location-item">
                  <div className="faq-location-icon"><MapPinIcon /></div>
                  <div className="faq-location-text">
                    <strong>123 Dental Care Street</strong>
                    Smile City, SC 12345
                  </div>
                </div>
                <div className="faq-location-item">
                  <div className="faq-location-icon"><PhoneIcon /></div>
                  <div className="faq-location-text">
                    <strong>+91 987 654 3210</strong>
                    Call or WhatsApp
                  </div>
                </div>
                <div className="faq-location-item">
                  <div className="faq-location-icon"><ClockIcon /></div>
                  <div className="faq-location-text">
                    <strong>Mon – Sat: 9:00 AM – 8:00 PM</strong>
                    Sunday: Closed (Emergency on call)
                  </div>
                </div>
                <div className="faq-map">
                  📍 Map View – 123 Dental Care Street, Smile City
                </div>
              </div>
            </div>

            <div className="faq-accordion">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${activeFaq === i ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    aria-expanded={activeFaq === i}
                  >
                    {faq.q}
                    <span className="faq-icon" aria-hidden="true">{activeFaq === i ? "−" : "+"}</span>
                  </button>
                  {activeFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
         FOOTER & LEGAL COMPLIANCE
         ============================================================ */}
      <footer className="footer" role="contentinfo">
        <div className="footer-grid">
          <div>
            <a href="#home" className="footer-brand-logo">
              <div className="footer-brand-logo-icon">
                <ToothIcon />
              </div>
              Denta
            </a>
            <p className="footer-brand-desc">
              Advanced dental care with a personal touch. Serving patients since 2009 with hospital-grade sterilization and modern digital dentistry.
            </p>
            <div className="footer-socials">
              <button type="button" className="footer-social-btn" aria-label="Follow us on Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/></svg>
              </button>
              <button type="button" className="footer-social-btn" aria-label="Follow us on Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </button>
              <button type="button" className="footer-social-btn" aria-label="Follow us on Twitter">
                <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </button>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#before-after">Before & After</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#doctors">Our Specialists</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Our Services</div>
            <ul className="footer-links">
              {dentalServices.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedService(s)}
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", font: "inherit", padding: 0 }}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact Us</div>
            <ul className="footer-links">
              <li>123 Dental Care Street, Smile City</li>
              <li><a href="tel:+919876543210">+91 987 654 3210</a></li>
              <li><a href="mailto:hello@denta.com">hello@denta.com</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Working Hours</div>
            <div className="footer-hours">
              <div className="footer-hour-row"><span>Mon – Fri</span><span>9AM – 8PM</span></div>
              <div className="footer-hour-row"><span>Saturday</span><span>9AM – 6PM</span></div>
              <div className="footer-hour-row"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Denta Clinic. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms of Service</Link>
            <Link href="/medical-disclaimer">Medical Disclaimer</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/appointment-policy">Appointment Policy</Link>
          </div>
        </div>
      </footer>

      {/* ============================================================
         SERVICE DETAIL MODAL
         ============================================================ */}
      {selectedService && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details modal"
            >
              ✕
            </button>

            <div className="service-modal-media">
              <img
                src={selectedService.image}
                alt={selectedService.imageAlt}
                className="service-modal-img"
              />
              <span className="service-modal-tag">{selectedService.tag}</span>
            </div>

            <div className="service-modal-body">
              <h2 id="service-modal-title" className="service-modal-title">
                {selectedService.title}
              </h2>
              <p className="service-modal-desc">{selectedService.fullDesc}</p>

              <div className="service-modal-meta">
                <div className="service-meta-item">
                  <strong>Estimated Duration:</strong> {selectedService.duration}
                </div>
                <div className="service-meta-item">
                  <strong>Recovery:</strong> {selectedService.recovery}
                </div>
              </div>

              <div className="service-modal-section">
                <h3>Key Clinical Benefits</h3>
                <ul className="service-benefits-list">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i}>
                      <span className="benefit-check" aria-hidden="true"><CheckIcon /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-modal-section">
                <h3>Treatment Procedure Steps</h3>
                <ol className="service-steps-list">
                  {selectedService.procedureSteps.map((step, idx) => (
                    <li key={idx}>
                      <strong>Step {idx + 1}:</strong> {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="service-modal-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleOpenAppointment(selectedService.title)}
                >
                  Book {selectedService.title} <ArrowRight />
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setSelectedService(null)}
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
         DEMO APPOINTMENT SHOWCASE MODAL (WCAG 2.2 COMPLIANT)
         ============================================================ */}
      {appointmentModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setAppointmentModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="appointment-modal-title"
        >
          <div
            className="appointment-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setAppointmentModalOpen(false)}
              aria-label="Close appointment showcase modal"
            >
              ✕
            </button>

            {formSuccess ? (
              <div className="appointment-success-card">
                <div className="appointment-success-icon" aria-hidden="true">
                  <CheckIcon />
                </div>
                <h3 className="appointment-success-title">Appointment Request Received</h3>
                <p className="appointment-success-sub">
                  Thank you, <strong>{formData.name}</strong>. Your showcase consultation request has been registered.
                </p>

                <div className="appointment-summary-box">
                  <div className="summary-row">
                    <span>Service:</span>
                    <strong>{formData.service || "General Dental Consultation"}</strong>
                  </div>
                  {formData.doctor && (
                    <div className="summary-row">
                      <span>Specialist:</span>
                      <strong>{formData.doctor}</strong>
                    </div>
                  )}
                  {formData.date && (
                    <div className="summary-row">
                      <span>Preferred Date:</span>
                      <strong>{formData.date} {formData.time ? `at ${formData.time}` : ""}</strong>
                    </div>
                  )}
                  <div className="summary-row">
                    <span>Contact Phone:</span>
                    <strong>{formData.phone}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Booking Ref:</span>
                    <code>{bookingRef}</code>
                  </div>
                </div>

                <div className="appointment-demo-disclaimer">
                  📢 <strong>Showcase Demonstration:</strong> This is a public website demo flow. In production, this instantly notifies the dental clinic reception and synchronizes with your electronic appointment book.
                </div>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setAppointmentModalOpen(false)}
                  style={{ width: "100%", justifyContent: "center", marginTop: 20 }}
                >
                  Return to Website
                </button>
              </div>
            ) : (
              <div>
                <div className="appointment-demo-banner">
                  <span>Demo Appointment Flow</span>
                  <p>This showcase demonstrates the public patient booking interface. No payment is required.</p>
                </div>

                <h2 id="appointment-modal-title" className="appointment-modal-heading">
                  Schedule Your Consultation
                </h2>
                <p className="appointment-modal-sub">
                  Select your treatment and specialist, and our patient coordinator will confirm your visit.
                </p>

                {formError && (
                  <div className="appointment-error-banner" role="alert">
                    {formError}
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="appointment-form">
                  <div className="form-group-grid">
                    <div>
                      <label htmlFor="service-select">Dental Treatment</label>
                      <select
                        id="service-select"
                        value={formData.service || preSelectedService}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Select Treatment (Optional)</option>
                        {dentalServices.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="doctor-select">Preferred Specialist</label>
                      <select
                        id="doctor-select"
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Any Available Specialist</option>
                        {doctors.map((d) => (
                          <option key={d.name} value={d.name}>{d.name} ({d.spec})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group-grid">
                    <div>
                      <label htmlFor="pref-date">Preferred Date</label>
                      <input
                        type="date"
                        id="pref-date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="pref-time">Preferred Time</label>
                      <select
                        id="pref-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Select Preferred Time</option>
                        <option value="09:00 AM">09:00 AM (Morning)</option>
                        <option value="11:30 AM">11:30 AM (Late Morning)</option>
                        <option value="02:30 PM">02:30 PM (Afternoon)</option>
                        <option value="05:00 PM">05:00 PM (Evening)</option>
                        <option value="07:00 PM">07:00 PM (Night)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-grid">
                    <div>
                      <label htmlFor="patient-name">Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                      <input
                        type="text"
                        id="patient-name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="patient-phone">Phone Number <span style={{ color: "#ef4444" }}>*</span></label>
                      <input
                        type="tel"
                        id="patient-phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="patient-email">Email Address</label>
                    <input
                      type="email"
                      id="patient-email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="patient-notes">Additional Notes or Dental Concerns</label>
                    <textarea
                      id="patient-notes"
                      rows={3}
                      placeholder="Describe any sensitivity, dental pain, or specific questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={formSubmitting}
                    style={{ width: "100%", justifyContent: "center", padding: "14px" }}
                  >
                    {formSubmitting ? "Processing Showcase Request..." : "Confirm Consultation Request"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
