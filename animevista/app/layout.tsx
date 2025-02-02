import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VoyceMe - Home of Creativity",
  description: "Connect with your favorite authors and share your stories",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}