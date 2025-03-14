const useObserver = ({
  components = [],
  onVisible = () => {},
  onInvisible = () => {},
  threshold = 1,
  root = null,
}) => {
  const options = {
    root: root,
    threshold: threshold, // Use the passed threshold
  };

  const watcher = new IntersectionObserver(intersectionHandler, options);

  function intersectionHandler(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onVisible(entry);
      } else if (entry.intersectionRatio === 0) {
        onInvisible(entry); // Only trigger if completely invisible
      }
    });
  }

  const observe = () => {
    if (components.length === 0) {
      console.warn("No components provided for observation.");
      return;
    }

    components.forEach((component) => {
      if (component instanceof Element) {
        watcher.observe(component);
      } else {
        console.warn("Invalid component, must be a DOM element:", component);
      }
    });
  };

  const unobserve = () => {
    components.forEach((component) => {
      watcher.unobserve(component);
    });
  };

  const disconnect = () => {
    watcher.disconnect();
  };

  const observer = {
    observe,
    unobserve,
    disconnect,
  };

  return {
    observer,
  };
};

export default useObserver;