import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const { supplier } = new PrismaClient();

export const getSupplier = async (req: Request, res: Response) => {
  try {
    const suppliers = await supplier.findMany({include:{products:true}});
    res.send(suppliers);
  } catch (error) {
    console.log(error);
  }
};

export const createSupplier = async (req: Request, res: Response) => {
  const supplierData = req.body;

  try {
    const newSupplier = await supplier.create({ data: supplierData });
    res.send(newSupplier);
  } catch (error) {
    console.log(error);
  }
};
