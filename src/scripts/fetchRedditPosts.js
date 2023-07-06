async function fetchRedditPosts(keyword) {
    const url = `https://www.reddit.com/search.json?q=${keyword}&sort=new`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.children.map(post => post.data);
}

export default fetchRedditPosts;
