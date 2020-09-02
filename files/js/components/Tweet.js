// Similar to React, Vue allows components to be reused instead of having to write out the same component over and over. Also like React, Vue utilizes props which allows data to be passed into components with ease.
const Tweet = Vue.component('tweet', {
    props: ['message', 'author'],
    template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
});