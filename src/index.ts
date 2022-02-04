import express from "express";
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './routes/user'
import categoryRoute from './routes/category'
import productRoute from './routes/product'
import supplierRoute from './routes/supplier'

const app = express();
const port = 5000;

app.use(cors({
  origin: '*'
}));
app.use(morgan('dev'))
app.use(express.json())
app.use('/users',userRoute)
app.use('/categories',categoryRoute)
app.use('/products',productRoute)
app.use('/suppliers',supplierRoute)

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
