const USER = 'murvat';
const PASSWORD = 'murvatdb';
const URL  ='first.ucsm7.mongodb.net/first.ucsm7.mongodb.net'
module.exports = {
    uri: `mongodb+srv://${USER}:${PASSWORD}@${URL}?retryWrites=true&w=majority`
};