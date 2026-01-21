
export const animateCounter = (element: HTMLElement, start: number, end: number, duration: number) => {
  let startTime: number | null = null;
  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current + (end > 2 ? '' : '');
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = end + (end > 2 ? '' : '');
    }
  };
  requestAnimationFrame(step);
};