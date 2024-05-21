const os = require('os')

// info abut current user
const user = os.userInfo()
console.log(user)
// method returns the uptime of system in secs
console.log(`the system uptime is ${os.uptime()} secs`)

const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currOS)
