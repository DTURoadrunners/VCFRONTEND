import { Injectable } from '@angular/core';
import { IBreadcrumb } from '../models/Ibreadcrumps';

/**
 * Handles breadcrumbs
 */
@Injectable()
export class BreadcrumpService {

  private breadcrumps: IBreadcrumb[];


  constructor() { }

  public storeBreadcrumps(breadcrumps: IBreadcrumb){
    
  }


  public getBreadcrumps() {
    return this.breadcrumps;
  }

}
