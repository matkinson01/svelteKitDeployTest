<script>
    import { goto } from '$app/navigation'
    // lifecycle, afterNavigate, beforeNavigate
    // disableScrollHandling - disables SvelteKit's built in scroll handling
    // goto -> programically routing
    // invalidate -> load functions on active page re-run
    // invalidateAll -> causes all load functions to re-run
    // preloadCode -> load js code for given routes
    // preloadData -> load the data from load functions for given routes 
    import { env } from '$env/dynamic/public'
    import { PUBLIC_LUT_PUB_KEY } from '$env/static/public';
    // console.log('PUBLIC_LUT_PUB_KEY', PUBLIC_LUT_PUB_KEY);


    import { browser, building, dev, version } from '$app/environment'
    import { navigating } from '$app/stores';
	import Episodes from './Episodes.svelte';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import './styles.css';

    export let data;
    $: ({ all_episodes } = data);
    // console.log(browser, building, dev, version)
    // browser -> boolean, if browser is running
    // building -P boolean, true, if currently building for production
    // dev -> boolean, true, if in development mode
    // version -> config.kit.version.name
</script>

<Header />

<!-- {#if !!$navigating}
    <div class="loading">Loading</div>
{/if} -->

<main>
    <div class="main verticle_scroll">
        <!-- <button on:click={() => goto('/contact')}>Change Page</button> -->
        <slot />
        <Footer />
    </div>
    <aside class="vertical_scroll">
        <Episodes episodes={all_episodes} />
    </aside>
</main>


<!-- The lang can be set to any preprocessed css language
     because we have added svelte preprocessing to the page
     svelte.config file
 -->
<style lang='postcss'>
    main {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 20px;
        height: calc(100vh - var(--header_height))
    }

    aside {
        order: -1;
    }

    .vertical_scroll {
        overflow: scroll;
    }
    /* .loading {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blue;
        color: white;
    } */
</style>