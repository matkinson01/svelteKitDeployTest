<script lang="ts">
  // This is a reqired prop now
  export let name: string;
  // Optional props need a default value
  export let expanded: boolean = false;
  export let list: string[] = [];

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

<input type="text" on:input={() => on_input} />

{#if expanded}
  <div>Is Expanded</div>
{/if}

{#each list as item}
  <p>{item}</p>
{/each}