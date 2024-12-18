import {PrismaClient} from "@prisma/client"
import { profile } from "console"

const prisma = new PrismaClient()


async function main(){
    // const student = await prisma.student.create({data: {studentName: "Alex", classId: 3}})
    // const user = await prisma.class.createMany({data: [{className: "22BOIT01"}, {className: "22BOIT02"}, {className: "22BOIT03"}]})
    // const user = await prisma.user.update({where: {id: 1}, data: {class: "12B2"}})


    // const student = await prisma.student.findFirst({where: {studentName: "Alex"}})
    // const classRes = await prisma.class.findFirst({where: {id: student?.classId}})
    // console.log({...student, ...classRes})

    // await prisma.student.deleteMany({where:{}})

    // const user_1 = await prisma.user.create({data: {name: "Alex"}})
    // const profile_1 = await prisma.profile.create({data: {address: "HCM", userId: 1}})

    //-------------------------------------------------------------------------------------

    // const user = await prisma.user.create({data: {email: "nhiCute@gmail.com", name: "Nhi", role: "User"}})
    // const profile = await prisma.profile.create({data: {userId: 1, bio: "Challenger"}})
    // console.log(profile)


    // const post = await prisma.post.create({data: {authorId: 2, title: "Wall Street", publised: true}})
    // console.log(post)

    // const categories = await prisma.categories.createMany({data: [
    //     {name: "food"},
    //     {name: "sport"},
    //     {name: "technology"},
    //     {name: "financial"}
    // ]})
    // console.log(categories)

    // const categoryToPost = await prisma.categoryToPost.createMany({data: [
    //     {postId: 1, categoryId: 4},
    //     {postId: 3, categoryId: 3},
    //     {postId: 4, categoryId: 4}
    // ]})
    // console.log(categoryToPost)
}

main()
    .catch((e) => {
        console.log("error", e)
    })

    .finally( async () => {
        await prisma.$disconnect()
    })