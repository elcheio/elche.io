<template functional>
    <a
        :href="props.href"
        :target="props.target"
        class="a-link-box"
        :class="[
            `a-link-box--size-${props.size}`,
            `a-link-box--color-${props.color}`,
            {'a-link-box--hover': props.hover},
        ]"
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
            size: {
                type: String,
                validator(size) {
                    // The value must match one of these strings
                    return ['xs', 's', 'm', 'l', 'xl'].indexOf(size) !== -1;
                },
                default: 'm',
            },
            color: {
                type: String,
                validator(size) {
                    // The value must match one of these strings
                    return [
                        'light',
                        'dark',
                        'primary',
                        'secondary',
                        'js',
                        'vue',
                        'react',
                        'sass',
                        'webpack',
                        'cologne',
                    ].indexOf(size) !== -1;
                },
                default: 'light',
            },
            hover: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>

