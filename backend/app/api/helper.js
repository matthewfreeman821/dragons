const Session = require('../account/session');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');

const setSession = ({ username, res }) => {
    const session = new Session({ username });
    const sessionString = session.toString();

    AccountTable.updateSessionId({ 
        sessionId: session.id, 
        usernameHash: hash(username)
    });

    res.cookie('sessionString', sessionString, {
        expire: Date.now() + 3600000,
        httpOnly: true,
        // secure: true //should be used with https
    });
}