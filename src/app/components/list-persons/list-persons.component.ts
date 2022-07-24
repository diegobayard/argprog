import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  persons!:Array<Person>

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.persons = this.route.snapshot.data['persons']
  }

}
