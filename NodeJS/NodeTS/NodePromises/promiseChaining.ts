function getUser(userId: number): Promise<number> {
    return new Promise((resolve: Function, reject: Function) => {
        setTimeout(() => {
            resolve({id: userId, name: 'John'});
        }, 1000);
    });
}

function getUserPosts(user: number): Promise<number> {
    return new Promise((resolve: Function, reject: Function) => {
        setTimeout(()=>{
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    });
} 

getUser(123)
    .then(user => {
        console.log('User: ', user);
        return getUserPosts(user);
    })
    .then(posts => {
        console.log('Posts: ', posts);
    })
    .then(error => {
        console.error('Error: ', error);
    });