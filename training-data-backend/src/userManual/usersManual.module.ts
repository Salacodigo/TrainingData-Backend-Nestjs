import { Module } from '@nestjs/common';
import { UsersController } from './usersManual.controller';
import { UsersService } from './usersManual.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersManualModule {}
