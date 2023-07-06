function updateRedditPosts(posts) {
    const redditSection = document.getElementById('Reddit');
    redditSection.innerHTML = ''; // Clear previous content

    posts.forEach((post, index) => {
        const articleElement = document.createElement('article');

        articleElement.innerHTML = `
            <h4><a href="${post.url}">${post.title}</a></h4>
            <p>${post.selftext.slice(0, 50)}.....</p>
            <p>r/${post.subreddit}</p>
            <p>Author: ${post.author}</p>
        `;
        redditSection.appendChild(articleElement);


    });
}

export default updateRedditPosts;
