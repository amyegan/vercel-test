import 'nextra-theme-docs/style.css'
import { Analytics } from '@vercel/analytics/react';

useEffect(() => {
  const script = document.createElement('script');

  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.data-cf-beacon = '{"token": "9aa5387698cd4a1793172da9f6f21040"}';

  document.body.appendChild(script);
}, []);

export default function Nextra({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    <Analytics />
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "9aa5387698cd4a1793172da9f6f21040"}'></script>
  )
}
