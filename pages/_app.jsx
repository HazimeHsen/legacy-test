import { appWithTranslation } from "next-i18next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "../styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(MyApp)

