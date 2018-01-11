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
    this.getDocuments(); //'+' to parse to number
    this.documentForm = this.fb.group({
      file: ['', Validators.required]
    });
  }

  openModal(template: TemplateRef<any>, document: Documents) {
    this.modalRef = this.modalService.show(template);
    this.selectedDocument = document;
  }

  closeModal() {
    this.modalRef.hide()
    this.documentForm = this.fb.group({ //Clear the form
      file: ['', Validators.required]
    });
  }

  getDocuments() {
    this.documentService.getAllDocuments(+this.route.snapshot.paramMap.get('componentypeid'), +this.route.snapshot.paramMap.get('projectid')) //'+' to parse to number
      .subscribe(documents => this.documents = documents);
  }

  onCreateDocument() {
    if (this.documentForm.valid) {
      this.documentService.createDocument(
        +this.route.snapshot.paramMap.get('componentypeid'), //Get id from url, '+' to parse to number
        +this.route.snapshot.paramMap.get('projectid'),
        this.documentForm.value.file
      )
        .subscribe(documents => this.documents = documents); //Assign retrieved data to variable
    }
    this.closeModal();
  }

  onUpdateDocument() {
    if (this.documentForm.valid) {
      this.documentService.updateDocument(
        this.selectedDocument.id,
        this.selectedDocument.componenttypeId,
        this.selectedDocument.projectId,
        this.documentForm.value.file)
        .subscribe(documents => this.documents = documents); //Assign retrieved data to variable
    }
    this.closeModal();
  }

  onDeleteDocument() {
    this.documentService.deleteDocument(
      this.selectedDocument.id,
      this.selectedDocument.componenttypeId,
      this.selectedDocument.projectId)
      .subscribe(documents => this.documents = documents); //Assign retrieved data to variable
    this.closeModal();
  }

  onDownloadFile(documentId: number) {
    this.documentService.downloadFile(documentId);
  }
}
