function getUser(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ id: userId, name: 'John' });
        }, 1000);
    });
}
function getUserPosts(user) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    });
}
getUser(123)
    .then(function (user) {
    console.log('User: ', user);
    return getUserPosts(user);
})
    .then(function (posts) {
    console.log('Posts: ', posts);
})
    .then(function (error) {
    console.error('Error: ', error);
});
