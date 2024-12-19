import prisma from "../lib/prisma";
import {Request, Response} from "express"

const getAllPost = async (req:Request, res:Response):Promise<void> => {
    try{
        const posts = await prisma.post.findMany({where: {}})
        res.status(201).json(posts)
    }catch(error){
        console.log("Error from getting Posts", error)
        res.status(500).json({error: "Error from getting Posts"})
    }
}

const createPost = async (req:Request, res:Response):Promise<void> => {
    try{
        const {authorId, title, publised} = req.body
        const newPost = await prisma.post.create({data: {authorId, title, publised}})
        res.status(201).json(newPost)
    }catch(error){
        console.log("Failed from create new Post", error)
        res.status(500).json({error: "Failded from create new Post"})
    }
}

interface postBody {
    title: string
    authorId: number
}

const updatePost = async ({params}: {params: {id: string}},req:Request, res:Response) => {
    try{
        const {title, authorId}: postBody = req.body
        const data = await prisma.post.update({
            where: {
                id: +params.id
            },
            data: {
                title: title
            }
        })
        res.status(201).json(data)
    }
    catch(error){
        console.log("Failed to update Post", error)
        res.status(500).json({error: "Error from update Post"})
    }
}

const paginationQuery = async (req:Request, res:Response):Promise<void> => {
    try{
        const {searchParams} = new URL(req.url)
        const pgnum = +(searchParams.get("pgnum")??0)
        const pgsize = +(searchParams.get("pgsize")??10)
        const posts = await prisma.post.findMany({
            skip: pgnum * pgsize,
            take: pgsize
        })
        res.status(201).json(posts)
    }
    catch(error){
        console.log("Failed to get data (Pagination)", error)
        res.status(500).json({error: "Failed to get data (Pagination)"})
    }
}



export {getAllPost, createPost, paginationQuery}