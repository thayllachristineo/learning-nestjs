import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PartnerUsersController } from './partner-users/partner-users.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'abc123',
      signOptions: { expiresIn: '10000s' },
    }),
  ],
  controllers: [UsersController, PartnerUsersController, AuthController],
  providers: [UsersService, AuthService],
})
export class AuthModule {}
