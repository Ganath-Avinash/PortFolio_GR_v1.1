import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PersonSchema from "@/components/PersonSchema";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ganathavinash.site"),
  title: {
    default: "Ganath Avinash G R | Official",
    template: "%s | Ganath Avinash G R"
  },
  description: "UG CSE - Full Stack & AI Integration. Computer Science Undergraduate at Amrita Vishwa Vidyapeetham focusing on Artificial Intelligence, Machine Learning, and Software Engineering.",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "Full Stack Development",
    "React",
    "Next.js",
    "Python",
    "Database Management Systems",
    "Ganath Avinash G R",
    "Ganath Avinash"
  ],
  authors: [{ name: "Ganath Avinash G R", url: "https://ganathavinash.site" }],
  creator: "Ganath Avinash G R",
  publisher: "Ganath Avinash G R",
  alternates: {
    canonical: "https://ganathavinash.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ganathavinash.site",
    title: "Ganath Avinash G R | Official",
    description: "UG CSE - Full Stack & AI Integration. Computer Science Undergraduate at Amrita Vishwa Vidyapeetham.",
    siteName: "Ganath Avinash G R",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Ganath Avinash G R",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganath Avinash G R | Official",
    description: "UG CSE - Full Stack & AI Integration. Computer Science Undergraduate at Amrita Vishwa Vidyapeetham.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased min-h-screen flex flex-col font-sans overflow-x-hidden transition-colors duration-500`} suppressHydrationWarning>
        <PersonSchema />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
