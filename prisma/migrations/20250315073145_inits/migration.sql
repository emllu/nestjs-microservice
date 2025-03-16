/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_name_key` ON `user`(`name`);

-- AddForeignKey
ALTER TABLE `Avatars` ADD CONSTRAINT `Avatars_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_key` TO `user_email_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_phone_number_key` TO `user_email_phone_number_key`;
