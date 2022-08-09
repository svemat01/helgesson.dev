<script lang="ts">
    import edgeGraphics from '$lib/assets/edgeGraphics.svg';
</script>

<img src={edgeGraphics} alt="">

<style lang="scss">
    img {
        position: absolute;
        top: 0;
        left: 0;

        height: min(20vw, 34rem);

        z-index: -1;

        @media screen and (max-width: $breakpoint-md) {
            display: none;
        }
    }
</style>