import article from "./myLoader/my-loader.js"
import { msg1 } from './b.js'
import { msg2 } from './a.js'
document.write("Hello")

console.log(article)

document.write(article)


function print() {
  console.log(`输出：${msg1}, ${msg2}`)
}

print()
