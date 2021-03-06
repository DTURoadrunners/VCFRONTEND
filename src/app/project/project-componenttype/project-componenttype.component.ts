import { Component, OnInit, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// componenttype
import { Componenttypes } from '../../models/componentTypes';
import { ComponenttypeService }  from '../../service/componenttype.service';

// category
import { Category } from '../../models/category';
import { CategoryService } from '../../service/category.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-project-componenttype',
  templateUrl: './project-componenttype.component.html',
  styleUrls: ['./project-componenttype.component.css']
})
export class ProjectComponenttypeComponent implements OnInit {
  modalRef: BsModalRef;

  componenttypeForm: FormGroup;
  searchText: string;
  typeaheadNoResults: boolean; //Value depends on whether or not a category matches input

  componenttypes: Componenttypes[];
  categories: Category[];

  projectId: number; //current project

  constructor(
    private fb: FormBuilder,
    private componenttypeService: ComponenttypeService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {
    /**
     * init the form inside the constructor 
     */
    this.componenttypeForm = this.fb.group({
      name:         ['', Validators.required],
      description:  [''], //Optional
      storage:      ['', Validators.required],
      category:   [''] //Optional
    });
  }




  ngOnInit() {
    this.projectId = +this.route.snapshot.paramMap.get('id') // bind the project id from the route
    this.getComponenttypes(this.projectId);
  }


  /**
   * link the template from the html to the method
   * @param template ng-template from the HTML
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.getCategories();
  }

    /**
   * Close modal and reset input form
   */
  closeModal() {
    this.modalRef.hide()
    this.componenttypeForm = this.fb.group({ //Clear the form
      status: [''],
      comment: [''],
    });
  }

  /**
   * create category from the categoryService 
   * subcribe on the observerable object
   */
  createCategory(): void{
    this.categoryService.createCategory(this.componenttypeForm.value.category).subscribe(categories => this.categories = categories);
    console.log(this.categories);
  }


  /**
   * check if the category exist
   * @param e 
   */
  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  /**
   * get all the componentstypes from the componenttype service. 
   */
  getComponenttypes(projectId: number): void {
    this.componenttypeService.getAll(projectId).subscribe(componenttypes => this.componenttypes = componenttypes);
  }

  /**
   * subscribe to the categories from the categoryService
   */
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  /**
   * is being called in the form on the submit, it will create componenttypes from the componenttypeService
   */
  createComponenttype(): void{
    if(this.componenttypeForm.valid){
      this.componenttypeService.create(
        this.projectId,
        this.componenttypeForm.value.name,
        this.componenttypeForm.value.description,
        this.componenttypeForm.value.category,
        this.componenttypeForm.value.storage)
        .subscribe(componenttypes => this.componenttypes = componenttypes);
    }
    this.modalRef.hide();
  }

}
