import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PivotTrack — Track and Visualize Startup Pivot Decisions",
  description: "Create visual timelines of your product pivots with before/after metrics for pattern recognition. Built for serial entrepreneurs and accelerator mentors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2616f613-5248-4691-802e-92147aefa0fd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
