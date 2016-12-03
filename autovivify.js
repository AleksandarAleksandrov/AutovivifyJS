function Autovivify() {
  let target = {};
  let handle = handlers();
  return new Proxy(target, handle);
}

function handlers() {

  let handlers = {};

  handlers.get = function get(target,key,receiver) {
      if (Reflect.has( target, key )) {
          return Reflect.get(target, key, receiver);
      } else {
          let subObj = Autovivify();
          Reflect.set(target, key, subObj);
          return subObj;
      }
    }

    return handlers;
}
