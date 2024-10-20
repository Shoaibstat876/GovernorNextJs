// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Governor NextJS. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/privacy" className="text-gray-400 hover:text-gray-200">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="text-gray-400 hover:text-gray-200">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
