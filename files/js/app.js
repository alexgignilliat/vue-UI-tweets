const app = new Vue({
    el: '#app',
    data: {
      username: 'vuedev',
      newTweet: '',
      tweets: [
        'Vue seems way easier than React so far', 
        'The syntax is dope tbh', 
        'Directives!!!! :D'
      ],
      bio: 'Front End Web Developer'
    }
  });