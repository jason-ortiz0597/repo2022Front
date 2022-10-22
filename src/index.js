import express from 'express';
import {Server as SocketServer} from 'socket.io'
import http from 'http';
import "dotenv/config";
import "./database/db_connect.js"
import authRoutes from "./routes/users/authRoutes.js";
import userRoutes from "./routes/users/userRoutes.js";
import pointRoutes from "./routes/points/pointRoutes.js";
import typeProvaiderRoutes from "./routes/products/typeProvaiderRoutes.js";
import provaiderRoutes from "./routes/products/provaiderRoutes.js";
import typeProductRoutes from "./routes/products/typeProductRoutes.js";
import warehouseRoutes from "./routes/products/warehouseRoutes.js";
import productRoutes from "./routes/products/productRoutes.js";
import entriesRoutes from "./routes/products/entriesRoutes.js";
import categoryRoutes from "./routes/products/categoryRoutes.js";
import unitRoutes from "./routes/products/unitRoutes.js";
import exitsRoutes from "./routes/products/exitsRoutes.js";
import orderRoutes from "./routes/order/orderRoutes.js";
import serveStatic from 'serve-static';
import history from 'connect-history-api-fallback';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";
import morgan from "morgan";
const app = express();



app.use(cors());
app.use(morgan("dev"));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/point', pointRoutes);

app.use('/api/typeProvaider', typeProvaiderRoutes);
app.use('/api/provaider', provaiderRoutes);
app.use('/api/typeProduct', typeProductRoutes);
app.use('/api/warehouse', warehouseRoutes);
app.use('/api/product', productRoutes);
app.use('/api/entries', entriesRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/unit', unitRoutes);

app.use('/api/exits', exitsRoutes);

app.use('/api/order', orderRoutes);

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))

const server = http.createServer(app);
const io = new SocketServer(server);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});







