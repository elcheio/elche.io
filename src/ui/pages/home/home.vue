<template>
    <div class="p-home">
        <m-stage>
            <template v-slot:media>
                <a-video
                    src="rhein-background.mp4"
                    :autoplay="true"
                    :loop="true"
                    :full-screen="true"
                >
                </a-video>
            </template>

            <template v-slot:text>
                <p>¡Hola! We are two <a-link-box>Frontend developers</a-link-box> from <a-link-box href="http://www.elche.es" target="_blank" color="secondary">Elche</a-link-box> and <a-link-box href="https://www.koeln.de" target="_blank" color="dark">Cologne</a-link-box>.</p>
                <p>We like to work with <a-link-box href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" color="js">ES6+</a-link-box>, <a-link-box href="https://reactjs.org/" target="_blank" color="react">React</a-link-box>, <a-link-box href="https://vuejs.org/" target="_blank" color="vue">Vue</a-link-box>, <a-link-box href="https://sass-lang.com/" target="_blank" color="sass">Sass</a-link-box> and <a-link-box href="https://webpack.js.org/" target="_blank" color="webpack">Webpack</a-link-box> with <a-link-box>Accessibility</a-link-box> in mind.</p>
            </template>
        </m-stage>
    </div>
</template>
