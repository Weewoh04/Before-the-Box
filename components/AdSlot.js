import Script from 'next/script';

const adScriptUrl = 'https://pl29684488.effectivecpmnetwork.com/259ee804c72f8e05cfe30a2f648a5063/invoke.js';
const adContainerId = 'container-259ee804c72f8e05cfe30a2f648a5063';

export default function AdSlot({ label = 'Ad space', network = false }) {
  if (network) {
    return (
      <div className="ad-slot network-ad no-print" aria-label={label}>
        <Script
          async
          data-cfasync="false"
          src={adScriptUrl}
          strategy="afterInteractive"
        />
        <div id={adContainerId} />
      </div>
    );
  }

  return (
    <div className="ad-slot no-print" aria-label={label}>
      {label} - connect Google AdSense, Mediavine Journey, or your ad network here.
    </div>
  );
}
