var Vue = require('vue');

new Vue({
    el: '#app',

    data: {
        points: 50
    },

    computed: {
        skill: function(){
            if(this.points >= 100) {
                return 'Advanced';
            }
            
            return 'Beginner';
        }
    }
})
