import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const { user } = new PrismaClient();
const salt = bcrypt.genSaltSync(15);

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await user.findMany();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  try {
    const emailValid = await user.findUnique({ where: { email } });
    if (emailValid) return res.send("Email already register");
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await user.create({
      data: { email, name, password: hashPassword },
    });
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const userExists = await user.findUnique({
      where: { email: userData.email },
    });
    if (!userExists) return res.send("User was not found!");
    const checkPassword = bcrypt.compareSync(
      userData.password,
      userExists.password
    );
    if (!checkPassword) return res.send("Invalid credentials!");
    res.send(userExists);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const userExists = await user.findUnique({ where: { id: userId } });
    if (!userExists) return res.send("User is not exists");
    await user.delete({ where: { id: userId } });
    res.send("User delete!");
  } catch (error) {
          console.log(error)
  }
};

export const editUser = async (req: Request, res: Response) => {
        const userId = req.params.id;
        const userData = req.body
        try {
          const userExists = await user.findUnique({ where: { id: userId } });
          if (!userExists) return res.send("User is not exists");
          const userEdit = await user.update({ where: { id: userId },data:userData });
          res.json(userEdit);
        } catch (error) {}
      };
      
