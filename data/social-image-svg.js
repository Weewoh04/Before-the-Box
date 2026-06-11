function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapText(value = '', maxLineLength = 24) {
  const words = value.split(/\s+/).filter(Boolean);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length > maxLineLength && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = nextLine;
    }
  }

  if (currentLine) lines.push(currentLine);

  return lines.slice(0, 3);
}

function titleLines(title, maxLineLength, startY, lineHeight, fontSize) {
  return wrapText(title, maxLineLength)
    .map((line, index) => `<text x="50%" y="${startY + index * lineHeight}" text-anchor="middle" font-family="Georgia, serif" font-size="${fontSize}" font-weight="700" fill="#2f2a24">${escapeXml(line)}</text>`)
    .join('');
}

export function createOgImageSvg({ title, imageUrl }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img">
  <defs>
    <linearGradient id="overlay" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#fff8ec" stop-opacity="0.88"/>
      <stop offset="0.58" stop-color="#fffdf8" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#eadbc4" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#eadbc4"/>
  <image href="${escapeXml(imageUrl)}" width="1200" height="630" preserveAspectRatio="xMidYMid slice" opacity="0.52"/>
  <rect width="1200" height="630" fill="url(#overlay)"/>
  <rect x="88" y="72" width="1024" height="486" rx="28" fill="#fffdf8" opacity="0.82"/>
  <text x="50%" y="152" text-anchor="middle" font-family="Georgia, serif" font-size="48" fill="#53604e">Before the Box</text>
  ${titleLines(title, 28, 286, 76, 70)}
  <text x="50%" y="496" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#b87957">Make the Thing. Skip the Label.</text>
</svg>`;
}

export function createPinterestImageSvg({ title, imageUrl }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1500" viewBox="0 0 1000 1500" role="img">
  <defs>
    <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fffdf8" stop-opacity="0.08"/>
      <stop offset="0.55" stop-color="#fffdf8" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#fff8ec" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1500" fill="#eadbc4"/>
  <image href="${escapeXml(imageUrl)}" width="1000" height="1500" preserveAspectRatio="xMidYMid slice"/>
  <rect width="1000" height="1500" fill="url(#fade)"/>
  <text x="50%" y="126" text-anchor="middle" font-family="Georgia, serif" font-size="54" fill="#fffdf8" stroke="#2f2a24" stroke-width="2" paint-order="stroke">Before the Box</text>
  <rect x="88" y="1048" width="824" height="294" rx="24" fill="#fffdf8" opacity="0.9"/>
  ${titleLines(title, 22, 1148, 72, 62)}
  <text x="50%" y="1294" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#53604e">Make the Thing. Skip the Label.</text>
</svg>`;
}
