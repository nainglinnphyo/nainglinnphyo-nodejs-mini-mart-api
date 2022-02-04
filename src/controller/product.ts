import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const { product } = new PrismaClient();

export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await product.findMany({
      select:{
        id:true,
        name:true,
        image:true,
        unitPrice:true,
        countInStock:true,
        category:true,
        supplier:true
        }
    });
    res.send(products);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;

  try {
    const newProduct = await product.create({ data: productData });
    res.send(newProduct);
  } catch (error) {
    console.log(error);
  }
};


export const editProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const productData = req.body
  try {
    const productExist = await product.findUnique({ where: { id: productId } });
    if (!productExist) return res.send("Product is not exists");
    const productEdit = await product.update({ where: { id: productId },data:productData });
    res.json(productEdit);
  } catch (error) {}
};

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const productExist = await product.findUnique({ where: { id: productId } });
    if (!productExist) return res.send("User is not exists");
    await product.delete({ where: { id: productId } });
    res.send("Product delete!");
  } catch (error) {
          console.log(error)
  }
};