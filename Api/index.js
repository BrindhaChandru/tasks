async function fetchAndFilterPosts(titleKeyword) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        
        const posts = await response.json();
        
        const filteredPosts = posts.filter(post => post.title.includes(titleKeyword));
        
        console.log('Filtered Posts:');
        console.log(filteredPosts);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}
fetchAndFilterPosts('magnam');
