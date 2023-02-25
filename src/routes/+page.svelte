<script lang="ts">
    import { navigating, page, updated, getStores} from '$app/stores'
    import { writable } from 'svelte/store';
    import Test from '$lib/Test.svelte';
    import '$db/start.js';
    export let data;

    const is_nav_open = writable<boolean>();
    // const player_status = writable<'PLAY' | 'STOP'>();
    // $player_status = 'PAUSE';
    
    let name: string = "Bananas";

    // $: console.log($navigating, $page)
    $: ({ latest_episode } = data)

    function on_play(event: CustomEvent<{ player_status: 'PLAY' | 'STOP' }>) {
        console.log('event', event.detail.player_status);
    }
</script>

<h2>Latest Episodes</h2>
<h3>{latest_episode.title}</h3>

<Test name={name} on:play={on_play} {is_nav_open}/>

{#if $is_nav_open}
    <div><h3>Im open</h3></div>
{/if}