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
  checkboxForm: FormGroup;

  documents: Documents[];
  selectedDocument: Documents;
  checkedDocuments = {}; //List of checked off documents for download

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getDocuments(); //'+' to parse to number

    this.checkboxForm = this.fb.group({
      value: [false, Validators.required]
    });

    this.documentForm = this.fb.group({
      file: ['', Validators.required]
    });
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   * @param document document to be shown in the modal
   */
  openModal(template: TemplateRef<any>, document: Documents) {
    this.modalRef = this.modalService.show(template);
    this.selectedDocument = document;
  }

  /**
   * Close the modal again and reset the form
   */
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
        +this.route.snapshot.paramMap.get('componentypeid'), //+ to correctly cast string to number
        +this.route.snapshot.paramMap.get('projectid'), //+ to correctly cast string to number
        this.documentForm.value.file
      )
        .subscribe(documents => this.documents = documents);
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
        .subscribe(documents => this.documents = documents);
    }
    this.closeModal();
  }

  onDeleteDocument() {
    this.documentService.deleteDocument(
      this.selectedDocument.id,
      this.selectedDocument.componenttypeId,
      this.selectedDocument.projectId)
      .subscribe(documents => this.documents = documents);
    this.closeModal();
  }

  onDownloadFile(documentId: number) {
    this.documentService.downloadFile(documentId);
  }

  onDownloadChecked() {
    console.log(this.checkedDocuments);
    for (let document in this.checkedDocuments) {
      if(this.checkedDocuments[document]){
        this.documentService.downloadFile(this.checkedDocuments[document]);
      }
     
    }
  }
}
