<template>
    <span
        class="m-ticker"
        ref="ticker"
    >
        {{ content }}
        <span
            class="m-ticker__initial"
            :class="{ 'm-ticker__initial--play': play }"
            v-if="!end">&nbsp;</span>
    </span>
</template>

<script>
    export default {
        props: {
            speed: {
                type: Number,
                default: 100,
            },
            delay: {
                type: Number,
                default: 1500,
            },
        },
        data() {
            return {
                content: '',
                play: false,
                end: false,
            }
        },
        computed: {
            letters() {
                return this.$slots.default[0].text.split('');
            },
        },
        methods: {
            animate() {
                setTimeout(() => {
                    this.play = true;
                    this.letters.forEach((letter, index) => {
                        setTimeout(() => {
                            this.content += letter;
                            if (index + 1 >= this.letters.length) {
                                this.end = true;
                            }
                        }, this.speed * (index + 1));
                    });
                }, this.delay);
            }
        },
        mounted() {
            this.animate();
        },
    };
</script>
