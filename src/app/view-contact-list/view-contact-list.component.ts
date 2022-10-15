import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-contact-list',
  templateUrl: './view-contact-list.component.html',
  styleUrls: ['./view-contact-list.component.css']
})
export class ViewContactListComponent implements OnInit {

  constructor() { }

  contactList=[]

  ngOnInit(): void {
  }

}
