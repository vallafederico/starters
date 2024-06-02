// import mitt from "mitt";

// export function useHey(name = "hey") {
//   window[name] = mitt();
//   window[name].get = {};

//   window[name] = new Proxy(window[name], {
//     set: function (target, property, value, receiver) {
//       target.emit(property, value);
//       return Reflect.set(target.get, property, value, receiver);
//     },
//   });
// }

// useHey();

class SimpleEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Register an event handler for a given event.
   * @param {string} event - The name of the event.
   * @param {Function} handler - The callback function to handle the event.
   */
  on(event, handler) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(handler);
  }

  /**
   * Unregister an event handler for a given event.
   * @param {string} event - The name of the event.
   * @param {Function} handler - The callback function to remove.
   */
  off(event, handler) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((h) => h !== handler);
  }

  /**
   * Emit an event, calling all registered handlers.
   * @param {string} event - The name of the event.
   * @param {*} data - The data to pass to the event handlers.
   */
  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach((handler) => handler(data));
  }
}

class State {
  /**
   * @type {SimpleEmitter}
   * @static
   * @private
   */
  static emitter = new SimpleEmitter();

  /**
   * @type {Object}
   * @static
   * @private
   */
  static state = {};

  /**
   * Create a proxy for an object to enable nested reactivity.
   * @param {Object} obj - The object to create a proxy for.
   * @returns {Proxy} - The proxied object.
   * @private
   */
  static createProxy(obj) {
    return new Proxy(obj, {
      set: function (target, property, value, receiver) {
        State.emitter.emit(property, value); // Emit event on property change
        return Reflect.set(target, property, value, receiver); // Set the property using Reflect
      },
    });
  }

  /**
   * @type {Proxy}
   * @static
   * @private
   */
  static proxy = new Proxy(State.state, {
    set: function (target, property, value, receiver) {
      if (typeof value === "object" && value !== null) {
        // Create a proxy for each property if the value is an object
        value = State.createProxy(value);
      }
      State.emitter.emit(property, value); // Emit event on property change
      return Reflect.set(target, property, value, receiver); // Set the property using Reflect
    },
  });

  /**
   * Register an event handler for a given event.
   * @param {string} event - The name of the event.
   * @param {Function} handler - The callback function to handle the event.
   */
  static on(event, handler) {
    this.emitter.on(event, handler);
  }

  /**
   * Unregister an event handler for a given event.
   * @param {string} event - The name of the event.
   * @param {Function} handler - The callback function to remove.
   */
  static off(event, handler) {
    this.emitter.off(event, handler);
  }
}

const proxyHandler = {
  /**
   * Proxy handler to intercept property access.
   * @param {Object} target - The target object.
   * @param {string|symbol} property - The name of the property to get.
   * @returns {*} - The value of the property.
   */
  get(target, property) {
    // Delegate method calls to the State class itself
    if (property in State) {
      return State[property].bind(State);
    }
    // Delegate property access to the proxy state
    return target[property];
  },

  /**
   * Proxy handler to intercept property setting.
   * @param {Object} target - The target object.
   * @param {string|symbol} property - The name of the property to set.
   * @param {*} value - The new value of the property.
   * @param {Object} receiver - The proxy or object that initially received the request.
   * @returns {boolean} - True if the property was set successfully, false otherwise.
   */
  set(target, property, value, receiver) {
    // Delegate property setting to the proxy state
    return Reflect.set(State.proxy, property, value, receiver);
  },
};

/**
 * @typedef {Object} State
 * @property {Function} on - Register an event handler for a given event.
 * @property {Function} off - Unregister an event handler for a given event.
 */

export default new Proxy(State.proxy, proxyHandler);
