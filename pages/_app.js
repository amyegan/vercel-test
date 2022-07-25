import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    <!-- Cloudflare Web Analytics -->
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "9aa5387698cd4a1793172da9f6f21040"}'></script>
  )
}
