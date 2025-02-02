import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { AuthModal } from "@/components/auth-modal"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-pink-300 to-white dark:from-pink-600 dark:via-pink-900 dark:to-black">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6">
            <Image src="/placeholder.svg" alt="Vista Logo" width={32} height={32} className="h-8 w-8" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/originals" className="text-foreground/60 transition-colors hover:text-foreground">
              Originals
            </Link>
            <Link href="/trending" className="text-foreground/60 transition-colors hover:text-foreground">
              Trending
            </Link>
            <Link href="/discover" className="text-foreground/60 transition-colors hover:text-foreground">
              Discover
            </Link>
            <Link href="/contest" className="text-foreground/60 transition-colors hover:text-foreground">
              ✨ Contest
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <AuthModal />
            <Link href="/publish">
              <Button size="sm">Publish</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <section className="relative mb-12 rounded-lg bg-black/20 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm uppercase tracking-wider text-muted-foreground">COMICS NOVELS MANGA</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to AnimeVista,
                  <br />
                  Home of Creativity!
                </h1>
              </div>
              <p className="text-muted-foreground">
                AnimeVista lets you connect with your favorite authors and interact with fellow fans. For authors: build
                engaging from your original series, monetize your stories, engage your fan base, and share your AnimeVista.
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Browse Stories</Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7e7ca06f1843450b2c49565bbeb2d13f-zxlv83eJvULmPOQO1B5DQS53GZIMa6.webp`}
                alt="Featured Story"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold">Weekly Spotlight</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Link key={i} href="#" className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/placeholder.svg"
                  alt={`Spotlight Story ${i + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-sm font-medium text-white">Story Title</h3>
                  <p className="text-xs text-gray-300">4.8k ❤ 74,197</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">New & Trending</h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Link
                key={i}
                href="#"
                className="flex items-center gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted"
              >
                <div className="relative aspect-square w-16 overflow-hidden rounded-lg">
                  <Image src="/placeholder.svg" alt={`Trending Story ${i + 1}`} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">Story Title {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">4.8k ❤ 74,197</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-muted/20 p-6">
            <div className="mb-4 space-y-2">
              <h2 className="text-2xl font-bold">Publish your stories and reach millions.</h2>
              <p className="text-muted-foreground">Join our growing community of creators.</p>
            </div>
            <Button>Start Creating</Button>
          </div>
          <div className="rounded-lg bg-muted/20 p-6">
            <div className="mb-4 space-y-2">
              <h2 className="text-2xl font-bold">Read stories on the go.</h2>
              <p className="text-muted-foreground">Download our app!</p>
            </div>
            <div className="flex gap-4">
              <Link href="#">
                <Image
                  src="/placeholder.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </Link>
              <Link href="#">
                <Image src="/placeholder.svg" alt="Get it on Google Play" width={120} height={40} className="h-10" />
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="Vista Logo" width={24} height={24} className="h-6 w-6" />
              <span className="font-semibold">AnimeVista</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms and Conditions
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}