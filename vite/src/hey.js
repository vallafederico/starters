import mitt from "mitt";

export function useHey(name = "hey") {
  window[name] = mitt();
  window[name].get = {};

  window[name] = new Proxy(window[name], {
    set: function (target, property, value, receiver) {
      target.emit(property, value);
      return Reflect.set(target.get, property, value, receiver);
    },
  });
}

useHey();
