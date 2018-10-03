import express from 'express'; 

const app = express();
app.get('/', (req, res) => {
  res.send('Oh hi World')
})
app.listen(4000, () => {
  console.log('Listening');
});