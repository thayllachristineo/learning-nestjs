import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { AuthGuard } from '../auth/auth.guard';
import { TenantInterceptor } from '../tenant/tenant.interceptor';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { UserRoles } from '../auth/users/user-roles';

@UseInterceptors(TenantInterceptor)
@UseGuards(AuthGuard, RolesGuard)
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Roles(UserRoles.PARTNER)
  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    console.log(createEventDto);
    return this.eventsService.create(createEventDto);
  }

  @Roles(UserRoles.PARTNER)
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }
}
