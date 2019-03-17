<template functional>
    <video
        class="a-video"
        :class="{ 'a-video--full-screen': props.fullScreen }"
        :autoplay="props.autoplay"
        :loop="props.loop"
    >
        <source :src="`/content/videos/${props.src}`" type="video/mp4">
    </video>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
            autoplay: {
                type: Boolean,
                required: false,
                default: false,
            },
            loop: {
                type: Boolean,
                required: false,
                default: false,
            },
            fullScreen: {
                type: Boolean,
                required: false,
                default: false,
            },
        }
    };
</script>
