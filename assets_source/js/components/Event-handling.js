var Vue = require('vue');

new Vue({
    el: '#app',
    data: {
        message: 'test',
        counter: 0
    },
    methods: {
        handleIt() {
            this.counter += 1;   
        }
    }
})