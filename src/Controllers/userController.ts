import prisma from "../lib/prisma";
import { Request, Response } from "express";

const createUser = async (req: Request, res:Response):Promise<void> => {
    try {
        const {email, name, role} = req.body
    
        const newUser = await prisma.user.create({
          data: {email, name, role},
        });
    
        res.status(201).json(newUser); 
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
      }
}

const getAllUser = async (req:Request, res:Response):Promise<void> => {
    try {
        const data = await prisma.user.findMany({where: {}})
        res.status(201).json(data)
    }
    catch(error){
        console.log("Error from getting users:", error)
        res.status(500).json({error: "Failed to get users"})
    }
}

const test = async (req: Request, res:Response):Promise<void> => {
  // try{
  //   const data = await prisma.profile.findMany({
  //     include: {
  //       user: true
  //     }
  //   })
  //   res.status(201).json(data)
  // }catch(error){
  //   console.log("Erro from Testing Route ", error)
  //   res.status(500).json({error: "Faild to Testing"})
  // }


  // try{
  //   const data = await prisma.post.aggregate({
  //     _count: {
  //       likes_num: true
  //     },
  //     where: {
  //       authorId: 2
  //     }
  //   })
  //   res.status(201).json(data)
  // }catch(error){
  //   console.log("Failed to aggregate", error)
  //   res.status(500).json({error: "Failed to aggregate"})
  // }


  // try{
  //   const data = await prisma.post.groupBy({
  //     by: ["authorId"],
  //     _sum: {
  //       likes_num: true
  //     },
  //     _count: {
  //       likes_num: true
  //     },
  //     _min:{
  //       likes_num: true
  //     },
  //   })
  //   res.status(201).json(data)
  // }
  // catch(error){
  //   console.log("Faild to groupby", error)
  //   res.status(500).json({error: "Failed to groupby"})
  // }

  try{
    const posts = await prisma.post.findMany({
      orderBy: {
        likes_num: "asc"
      },
    })
    res.status(201).json(posts)
  }
  catch(error){
    console.log("Failed to Fetching by OrderBy", error)
    res.status(500).json({error: "Faild to Fetching by OrderBy"})
  }
}


export {createUser, getAllUser, test}