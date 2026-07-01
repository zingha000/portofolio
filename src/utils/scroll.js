export function smoothScrollTo(id) {
  const target = document.querySelector(id);
  if (!target) return;

  const navbarOffset = 96;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - navbarOffset;
  const distance = targetY - startY;
  const duration = 700;
  let startTime = null;

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const step = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}