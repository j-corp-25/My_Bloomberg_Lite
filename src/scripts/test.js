const axios = require('axios');
const keyword = 'apple';
const postLimit = ;


axios.get(`https://www.reddit.com/search.json?q=${keyword}&sort=hot&limit=${postLimit}`)
  .then(response => {
    const posts = response.data.data.children;
    posts.forEach(post => {
      const { title, url, selftext, author_fullname} = post.data;
      let postBody = '';

        postBody = selftext.slice(0, 100) + '...';


      console.log('Title:', title);
      console.log('URL:', url);
      console.log('Body:', postBody);
      console.log('Author:', author_fullname);
      console.log('-------------------------------------------------------------------');
    });
})
