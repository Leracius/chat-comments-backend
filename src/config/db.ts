import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
  models: [__dirname + "/../models/**/*.ts"],
});

export async function connectDB(): Promise<void> {
  try {
    await db.authenticate();
    db.sync();
    console.log("conexion exitosa");
  } catch (error) {
    console.log(error);
    console.log("hubo un error al conectar a la base de datos");
  }
}

// export default connectDB;
