<script lang="ts">
    import { fade } from 'svelte/transition';

    export let name: string;
    export let description: string;
    export let href: string;
</script>

<a {href} target="_blanck">
    {name}

    <p transition:fade>
        {description}
    </p>
</a>

<style lang="scss">
    a {
        font-size: 2.4rem;
        font-weight: normal;

        opacity: 0.8;

        /* position: relative; */

        transition: opacity 0.15s;

        p {
            opacity: 0;

            font-size: 2rem;

            position: absolute;
            bottom: 2rem;
            left: 0;
            right: 0;

            margin-inline: auto;
            padding: 1rem 1.5rem;

            text-align: center;

            transition: opacity 0.15s;

            width: fit-content;
            max-width: 30rem;
            border-radius: 4px;

            background-color: $dark-light-color;

            @media (hover: none) {
                display: none;
            }
        }

        @media (hover: hover) {
            &:hover {
                opacity: 1;

                p {
                    opacity: 1;
                }
            }
        }
    }
</style>
