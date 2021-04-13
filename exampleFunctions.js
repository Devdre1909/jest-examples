const getTotalLikes = (user) =>
  user.blogs.reduce((total, blog) => total + blog.likes, 0);


// Weird script write?
// This is for future self, or anyone reading this code
// So, I decided to write the function in one line
// I reduced the array, using max which initially and object
// with index and likes of 0, at each iteration, I am checking if
// the present max.likes if greater than the present users blog like.

const getMostPopularBlog = (user) =>
  user.blogs[user.blogs.reduce(
    (max, blog, index) =>
      blog.likes > max.likes ? { index, likes: blog.likes } : max,
    { index: undefined, likes: 0 }
  ).index];

const getUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(require('./data/user'))
    })
}

module.exports = { getTotalLikes, getMostPopularBlog, getUsers };
