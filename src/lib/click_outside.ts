import type { Action } from 'svelte/action';

interface Attributes {
  'on:cilck-outside'? : (event: CustomEvent) => void;
}

export const click_outside: Action<HTMLElement, any, Attributes> = function(node) {
  const handle_click = function (event: MouseEvent) {
    if(event.target instanceof Element) {
      if(!node.contains(event.target)) {
        node.dispatchEvent(
          new CustomEvent('click-outside', { detail: 'Detects a click outside'})
        )
        // console.log('clicked');
      }
    }
    // console.log('click'); **runs anywhere on document
  };

  document.addEventListener('click', handle_click, true);

  return {
    destroy() {
      // runs when action is distroyed
      document.removeEventListener('click', handle_click, true);
    }
  }
}