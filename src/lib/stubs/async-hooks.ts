// Browser stub for node:async_hooks
export class AsyncLocalStorage {
  getStore() {
    return undefined;
  }
  run(_store: any, callback: () => any) {
    return callback();
  }
  enterWith(_store: any) {}
  disable() {}
}
