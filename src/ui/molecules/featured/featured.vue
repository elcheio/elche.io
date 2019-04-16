<template>
    <div class="m-featured">
        <a-headline tag="h2" :size="2">Featured project</a-headline>

        <div class="m-featured__box">
             <div class="m-featured__image t-skew t-skew--top-left">
                <a-image src="/content/work/felixwiedemann.jpg" class="t-skew__inner"></a-image>
            </div>

            <div class="m-featured__text">
                <a-link-box size="l" href="#" :hover="true">
                    <m-ticker>Felix Wiedemann</m-ticker>
                </a-link-box>
            </div>
        </div>

        <a-link-box color="primary" size="s" class="m-articles__more">Show more work</a-link-box>
    </div>
</template>

