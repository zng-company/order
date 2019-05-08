import Vue from 'vue';
import Components from './components.vue';

window.$ = $;

$( '#btn' ).mouseenter( function () {
    $('.circule').addClass('circule-active');
} ).mouseleave( function () {
    $('.circule').removeClass('circule-active');
} );




Vue.component('components',Components)


new Vue({
    el:'#app',
    // render:h=>h(App)
})