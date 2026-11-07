
export function createRipple(event) {
  const element = event.currentTarget;

  if (event.button !== undefined && event.button !== 0) return;

  const rect = element.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const ripple = document.createElement('span');

  ripple.className = 'ripple__effect';
  ripple.style.width = `${diameter}px`;
  ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`;

  element.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  }, { once: true });
}
