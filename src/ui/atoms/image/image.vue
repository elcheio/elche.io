<template functional>
    <picture>
        <img
            :src="props.src"
            class="a-image"
            :class="[
                data.class,
                data.staticClass,
            ]"
        >
    </picture>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
        }
    };
</script>
