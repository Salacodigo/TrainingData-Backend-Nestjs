import { Module } from '@nestjs/common';
import { UsersModule } from './userManual/usersManual.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
