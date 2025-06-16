import express, {Response} from 'express';

const app = express();
app.use(express.json());

app.get("/", (_req, resp: Response) => {
  resp.status(200).json({ text: "test" });
});

export default app;