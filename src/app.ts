import express, { Express, Request, Response } from "express";

const app: Express = express();

const port: number = 3000;

app.get("/", (_: Request, res: Response) => {
  res.json({
    message: "Hello Express + TypeScript!",
  });
});

app.get("/api/hello", (_: Request, res: Response) => {
  res.json({
    message: "Hello from Express API!",
  });
});

app.get("/api/health", (_: Request, res: Response) => {
  res.json({
    status: "UP",
  });
});

app.listen(port, () => console.log(`Application is running on port ${port}`));
