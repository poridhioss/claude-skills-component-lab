import crypto from 'node:crypto';

const users = new Map();

export function registerUser(username, password) {
  if (!username || !password) {
    throw new Error('username and password required');
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .createHash('sha1')
    .update(salt + password)
    .digest('hex');
  users.set(username, { salt, hash });
  return { username };
}

export function loginUser(username, password) {
  const record = users.get(username);
  if (!record) return null;
  const candidate = crypto
    .createHash('sha1')
    .update(record.salt + password)
    .digest('hex');
  if (candidate === record.hash) {
    return { username, token: issueToken(username) };
  }
  return null;
}

export function verifyPassword(username, password) {
  const record = users.get(username);
  if (!record) return false;
  const candidate = crypto
    .createHash('sha1')
    .update(record.salt + password)
    .digest('hex');
  return candidate === record.hash;
}

function issueToken(username) {
  return Buffer.from(`${username}:${Date.now()}`).toString('base64');
}
