const magnifier = document.getElementById("magnifier");
const sourceImage = document.getElementById("sourceImage");
const lens = document.getElementById("lens");

const zoom = 2.2;
const minLensSize = 120;
const maxLensSize = 180;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateLens(event) {
  const rect = magnifier.getBoundingClientRect();
  const x = clamp(event.clientX - rect.left, 0, rect.width);
  const y = clamp(event.clientY - rect.top, 0, rect.height);

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const normalizedDistance = Math.hypot(x - centerX, y - centerY) / Math.hypot(centerX, centerY);
  const lensSize = maxLensSize - (maxLensSize - minLensSize) * normalizedDistance;

  const left = x - lensSize / 2;
  const top = y - lensSize / 2;
  const boundedLeft = clamp(left, 0, rect.width - lensSize);
  const boundedTop = clamp(top, 0, rect.height - lensSize);

  lens.style.setProperty("--size", `${lensSize}px`);
  lens.style.transform = `translate(${boundedLeft}px, ${boundedTop}px)`;
  lens.style.backgroundImage = `url("${sourceImage.src}")`;
  lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
  lens.style.backgroundPosition = `-${x * zoom - lensSize / 2}px -${y * zoom - lensSize / 2}px`;
}

function showLens(event) {
  magnifier.classList.add("active");
  updateLens(event);
}

function hideLens() {
  magnifier.classList.remove("active");
}

magnifier.addEventListener("mouseenter", showLens);
magnifier.addEventListener("mousemove", updateLens);
magnifier.addEventListener("mouseleave", hideLens);
