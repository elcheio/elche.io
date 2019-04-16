<template>
    <div class="o-stage">
        <div class="o-stage__media t-skew t-skew--bottom-left">
            <div class="t-skew__inner">
                <a-video
                    src="rhein-background.mp4"
                    :autoplay="true"
                    :loop="true"
                    :full-screen="true"
                >
                </a-video>
            </div>
        </div>
        <div class="o-stage__text">
            <ul class="t-inner">
                <li class="o-stage__box">
                    <p>¡Hola! We are two <strong>Frontend developers</strong> from <a-link-box href="http://www.elche.es" target="_blank" color="primary">Elche</a-link-box> and <a-link-box href="https://www.koeln.de" target="_blank" color="cologne">Cologne</a-link-box>.</p>
                </li>
                <li class="o-stage__box">
                    <p>We like to work with <a-link-box href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" color="js">ES6+</a-link-box>, <a-link-box href="https://reactjs.org/" target="_blank" color="react">React</a-link-box>, <a-link-box href="https://vuejs.org/" target="_blank" color="vue">Vue</a-link-box>, <a-link-box href="https://sass-lang.com/" target="_blank" color="sass">Sass</a-link-box> and <a-link-box href="https://webpack.js.org/" target="_blank" color="webpack">Webpack</a-link-box> with <strong>Accessibility</strong> in mind.</p>
                </li>
            </ul>
        </div>
    </div>
</template>
