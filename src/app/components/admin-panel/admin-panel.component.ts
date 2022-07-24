import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { ViewProfileService } from 'src/app/services/view-profile.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {

  persons!:Array<Person>

  constructor(private route: ActivatedRoute, private viewProfileService: ViewProfileService ) { }

  ngOnInit(): void {
    this.persons = this.route.snapshot.data['persons']
  }

  deletePerson(id:number):any {
    this.viewProfileService.deletePerson(id).subscribe(() => {window.location.reload()}, () => {alert('YOU SHALL NOT PASS')})
  }

}
