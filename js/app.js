//basic vue capabilities
const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

//using v-bind:title="message" to interpolate messages on the page
const app2 = new Vue({
    el: '#app2',
    data: {
        message: `You loaded this page on ${new Date().toLocaleString()}`
    }
})

//using v-if="seen" to hide and show parts of the dom
//added css and <transition> tag to animate showing
const app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

//using v-for to iterate over an array and display it as a list on the page
const app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text : 'Keep doing this intro' },
            { text : 'learn the syntax as you go' },
            { text : 'get comfortable with this framework' },
            { text : 'build apps, papa' },
        ]
    }
})

//using v-on directive to attach event listeners that invoke methods on the vue instance
const app5 = new Vue({
    el: '#app5',
    data: {
        message: '! racecar'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

//using v-model directive that makes two-way binding btwn form input and app state ezpz
const app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hey change this'
    }
})

//registering a vue component
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

const app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'meat' },
            { id: 1, text: 'milk' },
            { id: 2, text: 'bread' },
        ]
    }
})

