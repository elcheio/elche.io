<template functional>
    <a
        :href="props.href"
        :target="props.target"
        class="a-text-link"
    >
        <slot/>
    </a>
</template>

<script>
    export default {
        props: {
            href: {
                type: String,
            },
            target: {
                type: String,
            },
        },
    };
</script>

