import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/interfaces/skill';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  form: FormGroup
  closeResult = ''
  skill:Skill = Object()

  @Output() newSkill: EventEmitter<any> = new EventEmitter()
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
    (
      {
        name: '',
        progress: ''
      }
    )
  }

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addSkill() {
    this.skill.name = this.form.get("name")!.value
    this.skill.progress = this.form.get("progress")?.value + '%'
    this.profileService.saveSkill(this.skill).subscribe(() => {this.newSkill.emit(this.skill), this.modalService.dismissAll()})
  }

}
