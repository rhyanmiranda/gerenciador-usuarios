const app = require('./src/app.js')

const PORT = 3333 || process.env.PORT

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})