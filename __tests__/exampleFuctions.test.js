const { getTotalLikes, getMostPopularBlog, getUsers } = require('../exampleFunctions');
const user = require('../data/user')

describe('getTotalLikes', () => {
    test('should return the total likes of a user', () => {
        expect(getTotalLikes(user)).toBe(420)
    })
})

describe('getMostPopularBlog', () => {
    test('should return the most popular blog of a user', () => {
        const output = user.blogs[0];
        expect(getMostPopularBlog(user)).toEqual(output);
    })
})

describe('getUsers', () => {
    test('should return user object', async () => {
        const output = user;
        expect(await getUsers()).toEqual(output)
    })
})