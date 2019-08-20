const bcrypt = require('bcrypt');

const pass = 'rakieta1234';
console.log(`Aktualne haslo to: ${pass}`);

const hash = async p => {
  const result = await bcrypt.hash(p, 10);
  return result;
};
const h = hash(pass);
setTimeout(async () => {
  let hashed = await h;
  let result = await bcrypt.compare('asdf', hashed);
  console.log(result);
}, 2000);
