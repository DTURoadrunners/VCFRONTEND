import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Member } from "../../models/member";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { MemberService } from "../../service/member.service";
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-project-memberlist',
  templateUrl: './project-memberlist.component.html',
  styleUrls: ['./project-memberlist.component.css']
})
export class ProjectMemberlistComponent implements OnInit {

  members: Member[];
  modalRef: BsModalRef;
  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private modalService: BsModalService,
    private memberService: MemberService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getMembers();

    this.memberForm = this.fb.group({
      memberId: ['', Validators.required]
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide()
    this.memberForm = this.fb.group({ //Clear the form
      memberId: ['']
    });
  }

  getMembers() {
    this.memberService.getAll(+this.route.snapshot.paramMap.get('id')) //'+' to parse to number
      .subscribe(members => this.members = members);
  }

  onAddMember() {
    if (this.memberForm.valid) {
      let members = this.memberForm.value.memberId;
      members = members.split(","); 
      for(let member of members){
        this.memberService.add(
          member.trim(),
          +this.route.snapshot.paramMap.get('id'))
          .subscribe(members => this.members = members); //Assign retrieved data to variable
      }
      /*
      
        */
    }
    this.closeModal();
  }

  onRemoveMember() {
    this.memberService.remove(
      this.memberForm.value.memberId,
      +this.route.snapshot.paramMap.get('id'))
      .subscribe(members => this.members = members); //Assign retrieved data to variable
    this.closeModal();
  }

}
