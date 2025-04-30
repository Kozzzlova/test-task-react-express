const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // или адрес твоего фронтенда
}));




app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
