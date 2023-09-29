import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">&copy; 2030 Ricardo. All rights reserved</small>
      <p className="text-xs">
        <span>
          About this website:
          <span className="font-samibold">
            built with React & Next.js (App Router & Server Actions), Typescript
            Tailwind CS, Framer Motion, React Email & Resend, Vercel hosting
          </span>
        </span>
      </p>
    </footer>
  );
}
