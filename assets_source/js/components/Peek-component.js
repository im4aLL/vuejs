var Vue = require('vue');

Vue.component('counter', {
    template: '#counter-template',

    props: ['title'],

    data: function() {
        return {
            counter: 0
        }
    }
});

new Vue({
    el: '#app',
    // data: {
    //     message: 'peek component',
    //     counter: 0
    // },
    // methods: {
    //     increment: function(event) {
    //         this.counter = this.counter + 1;
    //     }
    // }
})
