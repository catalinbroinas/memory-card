
export async function preloadImages(images) {
  return Promise.all(
    images.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
}
