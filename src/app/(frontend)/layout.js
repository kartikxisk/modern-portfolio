import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@base/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kartik Kumar | Frontend Developer | JS | Reactjs | Nextjs | SEO",
  description:
    "As a Frontend Developer with +1 year of experience, I am dedicated to creating visually appealing and user-friendly web applications. With a solid understanding of web development principles and experience in HTML, CSS, and JavaScript, I am committed to delivering high-quality work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00186e" />
        <meta name="msapplication-TileColor" content="#1939ac" />
        <meta name="theme-color" content="#00186e" />
      </head>
      <body
        className={`${inter.className} text-black bg-white dark:text-white dark:bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
