const reqEvent = (event) => require(`../ek/${event}`);
module.exports = client => {
  client.on('message', reqEvent('mesaj'));
};
