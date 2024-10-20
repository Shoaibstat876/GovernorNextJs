//src>app>page.tsx as homepage
// Importing 'Link' from Next.js. The 'Link' component is used to handle navigation between different pages in a Next.js application.
import Link from "next/link";

// This is the default export of the 'Home' component, which will be rendered when a user visits the homepage ('/').
export default function Home() {
  return (
    // The outermost <div> element defines a full-page container for the homepage.
    // 'min-h-screen' ensures that the div takes up at least the full viewport height.
    // 'bg-gray-100 dark:bg-gray-900' applies light and dark mode background colors.
    // 'p-8' adds padding around the content to ensure spacing from the edges of the screen.
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      
      {/* Header Section */}
      {/* This <header> contains the main heading and subtitle for the homepage. It is centered on the page using 'text-center' and 'py-6' to add vertical padding. */}
      <header className="text-center py-6">
        {/* Main heading (H1) */}
        {/* 'text-5xl' defines the large font size, and 'font-bold' makes it bold. Color changes with light mode (text-gray-900) and dark mode (text-gray-100). */}
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Welcome to Governor NextJS</h1>
        
        {/* A small subtitle beneath the main heading */}
        {/* 'mt-4' adds a margin-top for spacing, and text color changes based on the mode (gray-600 for light, gray-300 for dark). */}
        <p className="mt-4 text-gray-600 dark:text-gray-300">Explore the sections below</p>
      </header>

      {/* Links Section */}
      {/* This <div> creates a grid layout for the links, which will display them as tiles/cards. */}
      {/* 'grid' enables grid layout, 'grid-cols-1' makes it a single column on small screens, and 'sm:grid-cols-2' and 'lg:grid-cols-3' set 2 or 3 columns on larger screens. */}
      {/* 'gap-8' creates spacing between the grid items, and 'mt-12' adds margin at the top to separate it from the header. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        
        {/* Link 1: Electronics */}
        {/* Each <Link> component wraps around a <div> that acts as a clickable card. */}
        {/* 'group' is used for hover animations, applying styles when the user hovers over the card. */}
        <Link href="/electronics" className="group">
          {/* The content of the card */}
          {/* 'p-6' adds padding inside the card, 'bg-white dark:bg-gray-800' sets background colors for light and dark modes. */}
          {/* 'rounded-lg' gives the card rounded corners, 'shadow' adds a small shadow, and 'hover:shadow-lg' makes the shadow bigger when hovered. */}
          {/* 'transition' ensures smooth transition animations when hovering over the card. */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            {/* Card title */}
            {/* 'text-2xl' sets the font size, and 'font-semibold' makes the text slightly bold. */}
            {/* The text color switches between light (gray-900) and dark (white) modes. */}
            {/* 'group-hover:text-blue-600' changes the text color to blue when the card is hovered over. */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
              Electronics
            </h2>
          </div>
        </Link>

        {/* Repeat the same structure for the other links */}
        
        {/* Link 2: Category */}
        <Link href="/category" className="group">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
              Category
            </h2>
          </div>
        </Link>

        {/* Link 3: Crypto */}
        <Link href="/category/crypto" className="group">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
              Crypto
            </h2>
          </div>
        </Link>

        {/* Link 4: Products */}
        <Link href="/products" className="group">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
              Products
            </h2>
          </div>
        </Link>

        {/* Link 5: Students */}
        <Link href="/students" className="group">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
              Students
            </h2>
          </div>
        </Link>

        {/* Link 6: Employees */}
        <Link href="/employees" className="group">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
              Employees
            </h2>
          </div>
        </Link>

      </div>
    </div>
  );
}

