// Vue base
import Vue from 'vue';
import Elx from './globals/elx/elx.vue';

// Vue initialization
new Vue({
    el: '#elx',
    render: h => h(Elx),
});
