import { Injectable, Scope } from '@nestjs/common';
import { Partner } from '@prisma/client';

@Injectable({
  scope: Scope.REQUEST,
})
export class TenantService {
  private tentant: Partner;

  setTenant(tenant: Partner) {
    this.tentant = tenant;
  }

  getTenant() {
    return this.tentant;
  }
}
