-- DropForeignKey
ALTER TABLE `CategoryToPost` DROP FOREIGN KEY `CategoryToPost_postId_fkey`;

-- AddForeignKey
ALTER TABLE `CategoryToPost` ADD CONSTRAINT `CategoryToPost_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
