
import React from 'react';
import { 
  Shield, 
  QrCode, 
  Fingerprint, 
  Cpu,
  Mic,
  Scan,
  Database,
  AlertTriangle,
  Zap,
  Lock,
  Smartphone,
  MessageSquare
} from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
}

export interface Scenario {
  danger: string;
  what: string;
  reality: string;
  protection: string;
  image: string;
}

export interface Plan {
  name: string;
  description: string;
  price: string;
  period?: string;
  highlighted?: boolean;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export const CORE_FEATURES: Feature[] = [
  {
    title: "Neural Scanning",
    description: "Multi-layered cognitive analysis of data packets to identify synthetic patterns in real-time.",
    icon: Cpu,
    accent: "text-cyan-400"
  },
  {
    title: "AI Voice Biometrics",
    description: "Enterprise-grade acoustic signature verification protecting against deepfake clones.",
    icon: Mic,
    accent: "text-blue-400"
  },
  {
    title: "Secure QR Gateway",
    description: "Isolated sandbox execution for all scanned links to neutralize hidden payload redirects.",
    icon: Scan,
    accent: "text-cyan-500"
  },
  {
    title: "Global Threat Intel",
    description: "Live synchronization with worldwide fraud databases updating your defense every 30 seconds.",
    icon: Database,
    accent: "text-blue-500"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Thorne",
    role: "Head of Digital Security",
    company: "Global Nexus Bank",
    content: "The neural scanning capabilities solved our deepfake crisis in weeks. It's the only platform we've found that handles voice-cloning detection with sub-millisecond latency.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "CTO",
    company: "Sentry Logistics",
    content: "Infrastructure deployment was seamless. The QR Sandbox alone has reduced our internal phishing success rate by over 94% across our entire global fleet.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Simon Kael",
    role: "Director of Operations",
    company: "Vanguard FinTech",
    content: "A professional-grade suite that actually delivers on its AI promises. The real-time reporting gives our executive team peace of mind in a high-risk landscape.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export const SCENARIOS: Scenario[] = [
  {
    danger: "Phone Call",
    what: "This is your bank. We need to verify unusual activity. Please confirm your PIN and card details now.",
    reality: "A voice designed to sound calm, professional, trustworthy. But it's a scammer recording your every word.",
    protection: "FraudShield detects suspicious caller patterns and flags known scam numbers instantly.",
    image: "/images/vectors/phone-scam.jpg",
  },
  {
    danger: "QR Code",
    what: "You're at a parking meter. The QR code looks official. You scan it and enter your payment details.",
    reality: "It's a fake sticker placed over the real one. Your card information is now in a criminal's hands.",
    protection: "FraudShield analyzes the destination URL before you enter any sensitive information.",
    image: "/images/vectors/qr-scam.jpg",
  },
  {
    danger: "Text Message",
    what: "Your package delivery failed. Click this link to reschedule immediately or your parcel will be returned.",
    reality: "The link installs malware. Your contacts, photos, banking apps—all compromised in seconds.",
    protection: "FraudShield scans every link for known phishing patterns and malicious behavior.",
    image: "/images/vectors/sms-scam.jpg",
  }
];

export const PLANS: Plan[] = [
  {
    name: "Free",
    description: "For occasional checks and awareness",
    price: "Free",
    features: [
      "Basic fraud checks",
      "Scam awareness content",
      "Community reporting",
      "Limited daily checks"
    ]
  },
  {
    name: "Shield",
    description: "For complete peace of mind, every day",
    price: "$4.99",
    period: "/month",
    highlighted: true,
    features: [
      "Unlimited fraud checks",
      "Advanced AI detection",
      "QR & link scanning",
      "Priority risk analysis",
      "Real-time scam alerts",
      "Scam news feed"
    ]
  },
  {
    name: "Guardian",
    description: "For protecting everyone you care about",
    price: "$9.99",
    period: "/month",
    features: [
      "Everything in Shield",
      "Family account sharing (up to 5)",
      "Enhanced detection intelligence",
      "Premium support",
      "Monthly security reports",
      "Priority updates"
    ]
  }
];
