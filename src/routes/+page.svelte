<script lang="ts">
    import { navigating, page, updated, getStores } from '$app/stores'
    import Test from '$lib/Test.svelte';
    import '$db/start.js';
    export let data;
    
    let name: string = "Bananas";

    // $: console.log($navigating, $page)
    $: ({ latest_episode } = data)

    function on_play(event: CustomEvent<{ player_status: 'PLAY' | 'STOP' }>) {
        console.log('event', event);
    }
</script>

<h2>Latest Episodes</h2>
<h3>{latest_episode.title}</h3>

<Test name={name} on:play={on_play}/>