import express, {Request, Response} from 'express';
import router from './router';
const app = express();
app.use(express.json());
app.use(router)

app.get('/', (_req: Request, res: Response) => {
    res.status(200).send('API rolando');
})
export default app;