import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/theme-provider";
import { JourneyProvider } from "@/components/journey/journey-provider";
import { ElevationRail } from "@/components/journey/elevation-rail";
import { TrailMap } from "@/components/journey/trail-map";
import { TopProgressBar } from "@/components/journey/top-progress-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Rohan — AI & Software Engineer",
  description:
    "The journey of an AI & Software Engineer, told as a trail through Yosemite. Explore experience, projects, skills, and milestones.",
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Machine Learning",
    "Portfolio",
    "Full-Stack",
  ],
  openGraph: {
    title: "Rohan — AI & Software Engineer",
    description:
      "The journey of an AI & Software Engineer, told as a trail through Yosemite.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Set theme before paint to avoid a flash of the wrong scene. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <JourneyProvider>
            <Navbar />
            <TopProgressBar />
            <ElevationRail />
            <TrailMap />
            <main className="flex-1">{children}</main>
            <Footer />
          </JourneyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
