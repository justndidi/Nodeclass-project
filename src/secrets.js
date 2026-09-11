import crypto from 'crypto'

const JWT = crypto.randomBytes(64).toString("hex")
console.log(JWT)
