import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-contact-list',
  templateUrl: './view-contact-list.component.html',
  styleUrls: ['./view-contact-list.component.css']
})
export class ViewContactListComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewList().subscribe(
      (data)=>{
        this.contactList=data
      }
    )
  }

  contactList:any=[]

  ngOnInit(): void {
  }

}
