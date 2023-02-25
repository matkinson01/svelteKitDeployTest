import { writable } from "svelte/store";

interface SearchState {
  status: 'OPEN' | 'CLOSED';
  text: string;
}

function new_search() {
  const { subscribe, update, set } = writable<SearchState>({
    status: 'CLOSED',
    text: ''
  });

  function toggle_status() {
    update((prev) => ({
      ...prev, 
      status: prev.status === 'CLOSED' ? 'OPEN' : 'CLOSED'
    }));
  }

  return { subscribe, update, set, toggle_status };
}

export const search = new_search();
