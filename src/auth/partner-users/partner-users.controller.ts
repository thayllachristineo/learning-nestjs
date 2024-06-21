import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserPresenter } from '../users/user.presenter';
import { UsersService } from '../users/users.service';

@Controller('partner/users')
export class PartnerUsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.createPartnerUser(data);
    return new UserPresenter(user);
  }
}
