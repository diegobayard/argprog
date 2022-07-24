import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { ViewProfileService } from 'src/app/services/view-profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  person:Person = Object()

  constructor(private viewProfileService: ViewProfileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.viewProfileService.viewPerson(parseInt(id!)).subscribe(res => {this.person = res})
  }

}
