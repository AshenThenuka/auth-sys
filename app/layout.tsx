import type { Metadata } from "next";
import localFont from "next/font/local";
import { Onest } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const onest = Onest({
  variable: "--font-onest",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Authentication System",
  description: "Authenctication System built with Next.js and TypeScript by Ashen Thenuka",
  authors: {
    name: "Ashen Thenuka",
    url: 'https://ashenthenuka.vercel.app/'
  },
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="dark"
        >
          {children}
          <div className="fixed bottom-3 right-3 z-50">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
