Vue.component('hello', {
    template: '<h1>Hello</h1>'
})

var vm1 = new Vue({
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

vm1.$mount("#app1");
// vm1.$refs.heading.innerText = "Something Else";

setTimeout(() => {
    vm1.title = "Changed by timer";
    console.log('changed');
}, 3000)

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: " The Second Instance"
    },
    methods: {
        onChange: function() {
            vm1.title = 'Changed!';
        }
    }
})
var vm3 = new Vue({
    template: '<h1>Hello</h1>'
});

vm3.$mount("#app3");



window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = vm1.constructor;
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = vm2.constructor;