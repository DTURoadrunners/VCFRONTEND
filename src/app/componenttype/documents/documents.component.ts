import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Documents } from '../../models/documents'; 
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { DocumentService } from './../../service/document.service'
import { ActivatedRoute } from '@angular/router';

 


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  modalRef: BsModalRef;
  documentForm: FormGroup;

  documents: Documents[];
  selectedDocument: Documents;

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private modalService: BsModalService,
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit() {
    this.getDocuments(+this.route.snapshot.paramMap.get('componentypeid')); //'+' to parse to number

    this.documentForm = this.fb.group({
      title: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  openModal(template: TemplateRef<any>, document : Documents) {
    this.modalRef = this.modalService.show(template);
    this.selectedDocument = document;
  }

  getDocuments(componentTypeId: number) {
    this.documentService.getAllDocuments(+this.route.snapshot.paramMap.get('componentypeid')) //'+' to parse to number
      .subscribe(documents => this.documents = documents);
  }
  
  onUploadDocument() {
    if (this.documentForm.valid) {
      this.documentService.createDocument(
        +this.route.snapshot.paramMap.get('componentypeid'), //Get id from url, '+' to parse to number
        this.documentForm.value.title,
        this.documentForm.value.file
      )
        .subscribe(documents => this.documents = documents); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }

  onUpdateDocument() {
    if (this.documentForm.valid) {
      this.documentService.updateDocument(
        this.selectedDocument.id,
        this.selectedDocument.componenttypeId,
        this.documentForm.value.title,
        this.documentForm.value.file
      )
        .subscribe(documents => this.documents = documents); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }

  onDeleteDocument() {
    if (this.documentForm.valid) {
      this.documentService.deleteDocument(
        this.selectedDocument.id,
        this.selectedDocument.componenttypeId)
        .subscribe(documents => this.documents = documents); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }

  onDownloadFile(documentId: number) {
    this.documentService.downloadFile(documentId);
  }
}
