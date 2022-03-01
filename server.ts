import app from './src/app'
import { PORT } from './src/config'

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  })