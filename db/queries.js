const pool = require('./pool');

async function getMessages() {
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM messages');
  client.release();
  return result.rows;
}

async function getMessage(id) {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM messages WHERE id = $1', [id]);
    client.release();
    return result.rows[0];
}

async function addMessage(message) {
    const client = await pool.connect();
    await client.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [message.text, message.username, message.added]);
    client.release();
}

async function deleteMessage(id) {
    const client = await pool.connect();
    await client.query('DELETE FROM messages WHERE id = $1', [id]);
    client.release();
}

module.exports = {
    getMessages,
    getMessage,
    addMessage,
    deleteMessage,
};

