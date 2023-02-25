import type { Writable } from "svelte/store";

export interface CurrentPositionContext {
  value: number;
  text: Writable<string>;
}