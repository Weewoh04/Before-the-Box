export default function AdSlot({ label = 'Ad space' }) {
  return (
    <div className="ad-slot no-print" aria-label={label}>
      {label} — connect Google AdSense, Mediavine Journey, or your ad network here.
    </div>
  );
}
