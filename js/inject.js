const bindEventListener = function (type) {
  const historyEvent = history[type];
  return function () {
    const newEvent = historyEvent.apply(this, arguments);
    const e = new Event(type);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return newEvent;
  };
};
history.pushState = bindEventListener("pushState");
history.replaceState = bindEventListener("replaceState");