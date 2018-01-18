import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Member } from "../../models/member";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { MemberService } from "../../service/member.service";
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { User } from "../../models/user";


@Component({
  selector: 'app-project-memberlist',
  templateUrl: './project-memberlist.component.html',
  styleUrls: ['./project-memberlist.component.css']
})
export class ProjectMemberlistComponent implements OnInit {

  members: User[];
  searchText: string;
  modalRef: BsModalRef;
  memberForm: FormGroup;
  alerts: any = []; //List of alerts, to let them linger for a while

  constructor(
    private fb: FormBuilder,
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

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  /**
   * Close the modal and reset input form
   */
  closeModal() {
    this.modalRef.hide()
    this.memberForm = this.fb.group({ //Clear the form
      memberId: ['']
    });
  }

  getMembers() {
    this.memberService.getAll(+this.route.snapshot.paramMap.get('id')) //'+' to parse to number
      .subscribe(result => this.members = result);
  }

  onAddMember() {
    if (this.memberForm.valid) {
      let members = this.memberForm.value.memberId;
      members = members.split(","); 
      for(let member of members){
        this.memberService.add(
          member.trim(),
          +this.route.snapshot.paramMap.get('id'), //+ to parse the id to a number
          1)
          .subscribe(members => this.members = members);
      }
      this.closeModal();
    }

  }

  onRemoveMember() {
    if (this.memberForm.valid) {
      this.memberService.remove(
        this.memberForm.value.memberId,
        +this.route.snapshot.paramMap.get('id')) //+ to parse the id to a number
        .subscribe(members => this.members = members);
      this.closeModal();
    }
  }

}
