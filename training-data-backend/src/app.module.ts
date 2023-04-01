import { Module } from '@nestjs/common';
import { UsersModule } from './userManual/usersManual.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
