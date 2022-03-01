import express from 'express';
// rest of the code remains same
const app = express();
const PORT = 9999;
app.get('/', (req: any, res: any): any => {
    res.send('Testing....................')
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})