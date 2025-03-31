export class Observable {
  #observers = [];

  notify() {
    for (const observer of this.#observers) {
      observer.emit();
    }
  }

  subscribe(observer) {
    this.#observers.push(observer);
  }
}

export class Observer {
  #emit;
  constructor(emit) {
    this.#emit = emit;
  }

  emit() {
    this.#emit();
  }
}
