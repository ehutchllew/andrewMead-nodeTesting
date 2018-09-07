module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(this.add(a, b));
    }, 1000);
} 

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(this.square(x));
    }, 1000);
}

module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
}