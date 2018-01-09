import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENTS } from '../../mock/mock-documents'; 
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { DocumentService } from './../../service/document.service'



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  modalRef: BsModalRef;
  documentForm: FormGroup;
  folderForm: FormGroup;

  mydocuments = DOCUMENTS;

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private modalService: BsModalService,
    private documentService: DocumentService
  ) { 
  }

  ngOnInit() {
    this.documentForm = this.fb.group({
      title: ['', Validators.required],
      file: ['', Validators.required]
    });
    this.folderForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  onUploadComponent() {
    if (this.documentForm.valid) {
      this.documentService.createDocument(
        1,
        this.documentForm.value.title,
        this.documentForm.value.file,
        false,
        null
      )
        .subscribe(documents => this.mydocuments = documents); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }
  
  onCreateFolder() {
    if (this.folderForm.valid) {
      this.documentService.createDocument(
        1,
        this.folderForm.value.title,
        null,
        true,
        null
      )
        .subscribe(documents => this.mydocuments = documents); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }
}
