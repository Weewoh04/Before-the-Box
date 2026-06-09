import Script from 'next/script';

const adScriptUrl = 'https://pl29684488.effectivecpmnetwork.com/259ee804c72f8e05cfe30a2f648a5063/invoke.js';
const adContainerId = 'container-259ee804c72f8e05cfe30a2f648a5063';

export default function NativeBanner() {
  return (
    <div className="native-banner no-print" aria-label="Advertisement">
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
