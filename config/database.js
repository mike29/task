/**
 * Created by Michael M. Simon on 6/8/2018.
 */
let secret;
const crypto = require('crypto');

try {
    secret = crypto.randomBytes(256).toString('hex');
} catch (err) {
    console.log('ERROR' + err.message);
}

const hashedSecret = crypto.createHmac('sha256', secret)
    .update('DB')
    .digest('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/tasks',
    secret: hashedSecret,
    tokenSecret: secret,
    db: 'tasks'
};