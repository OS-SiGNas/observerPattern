import { $ } from "../selector.js"
import type { Subscriber } from "../observable.js";

export class $GeoLocation implements Subscriber {
  #element = $<HTMLDivElement>("#geolocation")
  render = (state: unknown): void => {
    this.#element.innerHTML = JSON.stringify(state)
  }
}

