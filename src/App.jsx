import { useEffect, useState } from "react"
import SmoothScroll from "./components/SmoothScroll.jsx"
import CustomCursor from "./components/CustomCursor.jsx"
import Grain from "./components/Grain.jsx"
import Preloader from "./components/Preloader.jsx"
import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import DataTicker from "./components/DataTicker.jsx"
import About from "./components/About.jsx"
import Products from "./components/Products.jsx"
import Industries from "./components/Industries.jsx"
import HowItWorks from "./components/HowItWorks.jsx"
import FAQ from "./components/FAQ.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import ProductDetail from "./components/ProductDetail.jsx"
import Blogs from "./components/Blogs.jsx"
import BlogPost from "./components/BlogPost.jsx"
import BlogPrototype from "./prototypes/blog/BlogPrototype.jsx"
import { products } from "./data.jsx"

const PRODUCT_IDS = new Set(products.map((p) => p.id))

function getRoute() {
  const path = window.location.pathname
  if (path === "/about") return { name: "about" }
  const m = path.match(/^\/products\/([a-z0-9-]+)/)
  if (m && PRODUCT_IDS.has(m[1])) return { name: "product", id: m[1] }
  const b = path.match(/^\/blog\/([a-z0-9-]+)/)
  if (b) return { name: "blog", id: b[1] }
  if (path === "/blog") return { name: "blogs" }
  if (path === "/prototypes/blog") return { name: "prototype-blog" }
  return { name: "home" }
}

function Landing({ ready }) {
  return (
    <div id="top" className="relative min-h-screen bg-ink-950 text-fore">
      <main>
        <Hero ready={ready} />
        <DataTicker />
        <Products />
        <Industries />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function AboutPage() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-fore">
      <main>
        <About />
      </main>
      <Footer />
    </div>
  )
}

function ProductPage({ id }) {
  return (
    <div className="relative min-h-screen bg-ink-950 text-fore">
      <main>
        <ProductDetail id={id} />
      </main>
      <Footer />
    </div>
  )
}

function BlogsPage() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-fore">
      <main>
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}

function BlogPostPage({ id }) {
  return (
    <div className="relative min-h-screen bg-ink-950 text-fore">
      <main>
        <BlogPost id={id} />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const applyRoute = (target) => {
      const next = getRoute()
      setRoute(next)
      if (next.name === "home") {
        const hash = target ?? window.location.hash
        if (hash === "#top" || hash === "" || hash === "#" || !hash) {
          window.__lenis?.scrollTo(0, { duration: 0 })
        } else if (hash.startsWith("#")) {
          setTimeout(() => {
            const el = document.querySelector(hash)
            if (el) {
              window.__lenis?.scrollTo(el, { offset: 0, duration: 1.2 })
            }
          }, 60)
        }
      } else {
        window.__lenis?.scrollTo(0, { duration: 0 })
      }
    }

    const onClick = (e) => {
      const a = e.target.closest('a[href]')
      if (!a) return
      const href = a.getAttribute("href")
      if (!href) return

      if (href.startsWith("/")) {
        e.preventDefault()
        if (href === window.location.pathname + window.location.search) return
        window.history.pushState({}, "", href)
        applyRoute()
        return
      }

      if (href.startsWith("#") && href !== "#") {
        if (document.querySelector(href)) return
        e.preventDefault()
        window.history.pushState({}, "", "/" + href)
        applyRoute(href)
      }
    }
    const onPop = () => applyRoute()

    document.addEventListener("click", onClick)
    window.addEventListener("popstate", onPop)
    return () => {
      document.removeEventListener("click", onClick)
      window.removeEventListener("popstate", onPop)
    }
  }, [])

  if (route.name === "prototype-blog") return <BlogPrototype />

  return (
    <SmoothScroll>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <Grain />
      <Nav />
      {route.name === "about" && <AboutPage />}
      {route.name === "product" && <ProductPage id={route.id} />}
      {route.name === "blogs" && <BlogsPage />}
      {route.name === "blog" && <BlogPostPage id={route.id} />}
      {route.name === "home" && <Landing ready={loaded} />}
    </SmoothScroll>
  )
}