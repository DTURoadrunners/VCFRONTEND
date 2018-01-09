import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENTS } from '../../mock/mock-documents'; 
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

  mydocuments = DOCUMENTS;

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private modalService: BsModalService,
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit() {
    this.documentForm = this.fb.group({
      title: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  onUploadComponent() {
    if (this.documentForm.valid) {
      this.documentService.createDocument(
        Number.parseInt(this.route.snapshot.paramMap.get('id')), //Get id from url
        this.documentForm.value.title,
        this.documentForm.value.file
      )
        .subscribe(documents => this.mydocuments = documents); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }

  onDownloadFile(documentId: number) {
    this.documentService.downloadFile(documentId);
  }
}
