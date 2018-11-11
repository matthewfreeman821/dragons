const Session = require('../account/session');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');

const setSession = ({ username, res, sessionId }) => {
    return new Promise((resolve, reject) => {
        let session, sessionString;

        if (sessionId) {
            sessionString = Session.sessionString({ username, id: sessionId })

            setSessionCookie({ sessionString, res });

            resolve({ message: 'session restored'});
        } else {
            session = new Session({ username });
            sessionString = session.toString();
            AccountTable.updateSessionId({ 
                sessionId: session.id, 
                usernameHash: hash(username)
            })
            .then(() => {
                setSessionCookie({ sessionString, res });
                resolve({ message: 'session created' });
            })
            .catch(error => reject(error));
        }
    });
}

const setSessionCookie = ({ sessionString, res }) => {
    res.cookie('sessionString', sessionString, {
        expire: Date.now() + 3600000,
        httpOnly: true,
        // secure: true //should be used with https
    });
}

const authenticatedAccount = ({ sessionString }) => {
    return new Promise((resolve, reject) => {
        if (!sessionString || !Session.verify(sessionString)) {
            const error = new Error('Invalid session');
    
            error.statusCode = 400;
    
            return next(error);
        } else {
            const { username, id } = Session.parse(sessionString);
    
            AccountTable.getAccount({ usernameHash: hash(username) })
                .then(({ account }) => {
                    const authenticated = account.sessionId === id;
    
                    res.json({ authenticated });
                })
                .catch(error => next(error));
        }
    })
};

module.exports = { setSession };