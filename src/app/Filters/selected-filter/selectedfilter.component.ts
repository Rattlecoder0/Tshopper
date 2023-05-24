import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-selectedfilter',
  templateUrl: './selectedfilter.component.html',
  styleUrls: ['./selectedfilter.component.css']
})
export class SelectedfilterComponent implements OnInit {

  constructor(private param:ActivatedRoute, private serv:DataService) { }

  filtertype:any

  ngOnInit(): void {
    this.param.params.subscribe((data)=>{
      this.filtertype = data['id']
    })
    
    this.serv.setData(this.filtertype)
}



}
