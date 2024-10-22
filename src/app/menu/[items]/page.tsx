// src/app/menu/[items]/page.tsx

// Mark the component as a Client Component
"use client"; // This line enables the component to use client-side features like hooks.

import { useParams } from 'next/navigation'; // Importing useParams from next/navigation

// This is the default export of the 'ItemPage' component, which will be rendered for each dynamic menu item.
const ItemPage = () => {
    // Using useParams to access dynamic route parameters
    const { items } = useParams(); // 'items' corresponds to the dynamic part of your route

    return (
        <div>
            <h1>Details about menu item {items} will come soon</h1>
        </div>
    );
}

export default ItemPage;

