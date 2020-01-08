new Vue({
    el: "#app",
    data: {
        title: "The VueJS Instance"
    },
    beforeCreate: () => {
        console.log("Before Create");
    },
    created: () => {
        console.log("Creted");
    },
    beforeMount: () => {
        console.log("Before Mount");
    },
    mounted: () => {
        console.log("Mounted");
    },
    beforeUpdated: () => {
        console.log("Before Updated");
    },
    updated: () => {
        console.log("Updated");
    },
    beforeDestroy: () => {
        console.log("Before Destroy");
    },
    destroyed: () => {
        console.log("Destroyed");
    },
    methods: {
        destroy: function() {
            console.log('destroyed by click');
            this.$destroy();
        }
    }
});