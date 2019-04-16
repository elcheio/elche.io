<template functional>
    <component
        :is="props.tag"
        class="a-headline"
        :class="[
            data.class,
            data.staticClass,
            `a-headline--${props.size}`,
            { 'a-headline--border': props.border }
            ]"
    >
        <slot />
    </component>
</template>

<script>
    export default {
        functional: true,
        props: {
            tag: {
                type: String,
                default: 'h1',
                validator(value) {
                    // The value must match one of these strings
                    return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'].indexOf(value) !== -1;
                },
            },
            size: {
                type: Number,
                default: 2,
                validator(value) {
                    return value >= 1 && value <= 6;
                },
            },
            border: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>
