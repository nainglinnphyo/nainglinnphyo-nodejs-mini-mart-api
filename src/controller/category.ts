import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const { category } = new PrismaClient();

export const getCategory = async (req: Request, res: Response) => {
  try {
    const categories = await category.findMany({include:{products:true}});
    res.send(categories);
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const categoryData = req.body;

  try {
    const newCategory = await category.create({ data: categoryData });
    res.send(newCategory);
  } catch (error) {
    console.log(error);
  }
};
