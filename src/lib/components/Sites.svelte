<script lang="ts">
    import { sites } from '$lib/data/sites';

    import Site from './Site.svelte';
</script>

<div class="sites">
    {#each sites as site}
        <Site {...site} />
    {/each}
</div>

<style lang="scss">
    .sites {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;

        height: 100%;

        margin-top: 1.5rem;
    }
</style>
