<template>
    <div class="m-articles">
        <div class="m-articles__box">
            <a-headline tag="h2" :size="3" :border="true">Recent articles</a-headline>
            <ul class="m-articles__list">
                <li class="m-articles__item">
                    <a-text-link href="#">Accessible SPA focus handling</a-text-link>
                </li>
                <li class="m-articles__item">
                    <a-text-link href="#">Webpack 4 Sass to inline CSS setup</a-text-link>
                </li>
            </ul>
            <a-link-box color="primary" size="s" class="m-articles__more">More blog entries</a-link-box>
        </div>
    </div>
</template>

