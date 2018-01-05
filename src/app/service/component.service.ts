import { Injectable } from '@angular/core';
import { Component } from './../models/component';
import { COMPONENTS } from './../mock/mock-components';

@Injectable()
export class ComponentService {

  constructor() { }

  get(id: number): Component {
    return COMPONENTS[id-1];
  }

  create(component: Component): boolean {
    COMPONENTS.push(component);
    return true;
  }

  update(id: number, component: Component): boolean {
    COMPONENTS[id] = component;
    return true;
  }

  delete(id: number): boolean{
    delete COMPONENTS[id];
    return true;
  }
}
