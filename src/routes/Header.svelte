<script lang="ts">
    import { click_outside } from "$lib/click_outside";

    let header_element: HTMLElement | undefined;
    $: console.log('header_element', header_element);

    function click(e: CustomEvent) {
        console.log('e', e);
    }


</script>

<header use:click_outside on:click-outside={click} bind:this={header_element}>
    <h1><a href="/">Syntax Podcast</a></h1>
    <input type="text" >
</header>

<style>
    header {
        height: var(--header_height);
        display: flex;
        align-items: center;
        background: var(--black);
        color: var(--white);
        padding: 0 1rem;
    }

    h1 {
        font-size: 16px;
        margin: 0;
    }
    a {
        color: var(--white);
        text-decoration: none;
    }
</style>