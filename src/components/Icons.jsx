import {
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  Code2,
  Send,
  ChevronRight,
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-3.9c.04-1-.34-1.98-1.05-2.69 3.5-.39 7.18-1.72 7.18-7.83a6.13 6.13 0 0 0-1.63-4.25 5.7 5.7 0 0 0-.16-4.2s-1.33-.43-4.35 1.62a15 15 0 0 0-7.92 0C4.05-1.3 2.72-.87 2.72-.87a5.7 5.7 0 0 0-.16 4.2A6.1 6.1 0 0 0 .93 7.58c0 6.1 3.67 7.43 7.17 7.83a3.82 3.82 0 0 0-1.05 2.69V22" />
    <path d="M5.5 17.3c-1.42.46-2.55-.17-3.1-1.17" />
  </svg>
);
const Linkedin = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v6M8 7v.01M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16M12 10v6" />
  </svg>
);
export {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  Code2,
  Send,
  ChevronRight,
};
