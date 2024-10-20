// app/layout.tsx
import './globals.css'; // Ensure you import your global styles
import Footer from '@/app/components/Footer'; // Import the Footer component
import { ReactNode } from 'react'; // Import ReactNode for typing

export const metadata = {
  title: 'Governor NextJS',
  description: 'Welcome to Governor NextJS',
};

interface RootLayoutProps {
  children: ReactNode; // Define the children prop type
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen">
        {children} {/* This renders the current page */}
        <Footer /> {/* Render the Footer here */}
      </body>
    </html>
  );
}




