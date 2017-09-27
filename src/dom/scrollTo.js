const getNow = function() {
  return 'now' in window.performance ? performance.now() : new Date().getTime();
};

export default function(destination, { duration = 300, offset = 0 } = {}) {
  return new Promise((resolve, reject) => {
    if (typeof destination !== 'object' || !destination.offsetTop) {
      reject(new Error('Can\'t get element position'));
    }

    const start = window.pageYOffset;
    const startTime = getNow();
    const docElem = document.documentElement;
    const destinationOffset = destination.offsetTop + offset;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      docElem.clientHeight,
      docElem.scrollHeight,
      docElem.offsetHeight
    );
    const windowHeight = window.innerHeight || docElem.clientHeight
      || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight
      ? documentHeight - windowHeight
      : destinationOffset
    );

    if (!window.requestAnimationFrame) {
      window.scroll(0, destinationOffsetToScroll);
      return resolve();
    }

    function scroll() {
      const time = Math.min(1, ((getNow() - startTime) / duration));
      window.scroll(0, Math.ceil((time * (destinationOffsetToScroll - start)) + start));

      if (window.pageYOffset === destinationOffsetToScroll) {
        return resolve();
      }

      return requestAnimationFrame(scroll);
    }

    return scroll();
  });
}
