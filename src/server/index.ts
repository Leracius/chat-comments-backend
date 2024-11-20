import express, { Express } from "express";
import msgRoute from "../routes/msg";
import otherRoute from "../routes/postImg";
import { connectDB } from "../config/db";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

export class Server {
  app: Express;
  port: string | number | undefined;
  msgPath: string;
  otherPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.msgPath = "/api/msg";
    this.otherPath = "/api/upload";

    this.dbConection();
    this.middlewares();
    this.routes();
  }

  dbConection() {
    connectDB();
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes(): void {
    this.app.use(this.msgPath, msgRoute);
    this.app.use(this.otherPath, otherRoute);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`running in ${this.port} port`);
    });
  }
}
