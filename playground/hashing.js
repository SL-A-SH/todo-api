const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$Sd.xn0JXpLYnMky9vgu9euAKnk6X3eRXk2NIRmpFNH4Zsqq/RggFK';

bcrypt.compare('12', hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 5
// };

// var token = jwt.sign(data, '123ac');
// console.log(token);

// var decoded = jwt.verify(token, '123ac');
// console.log('decoded', decoded);

// var message = 'I am user number 2';
// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed');
// }
