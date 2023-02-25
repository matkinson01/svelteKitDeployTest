<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import type { CurrentPositionContext } from "./types";
  const dispatch = createEventDispatcher<{ play: { player_status: 'PLAY' | 'STOP' }}>();
  // This is a reqired prop now
  export let name: string;
  // Optional props need a default value
  export let expanded: boolean = false;
  export let list: string[] = [];

  export let is_nav_open: Writable<boolean>;

  const { value, text } = getContext<CurrentPositionContext>('current_position') 

  // FIRST SOLUTION
  // function on_click(event: Event) {
  //   const target = event.currentTarget as HTMLButtonElement;
  //   console.log(target?.innerText);
  // }

  // // SECOND SOLUTION
  function on_click(event: Event & {currentTarget: EventTarget & HTMLButtonElement}) {
    console.log(event.currentTarget.innerText);
  }

  function on_input(event: Event & {currentTarget: EventTarget & HTMLInputElement}) {
    console.log(event.currentTarget.value);
  }
</script>

<h1>Test {name}</h1>

<button on:click={on_click}>Click Me</button>
<button on:click={() => dispatch('play', {
  player_status: 'PLAY'
})}>Dispatch Me</button>

<input type="text" on:input={on_input} />

{#if expanded}
  <div>Is Expanded</div>
{/if}

{#each list as item}
  <p>{item}</p>
{/each}

<h4>
  {value}
  {$text}
</h4>