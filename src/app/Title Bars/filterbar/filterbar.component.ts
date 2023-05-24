import { Component, Input, OnInit  } from '@angular/core';
import { DataService } from '../../data.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  constructor(private service:DataService,private router: Router){}


  @Input() getFilterName:any
  // getFilterType:any

  ngOnInit(): void {
    // this.service.getData().subscribe((data)=>{
    //   this.getFilterType = data
    // })

    // this code makes the Filter Name to null when switched back to home 
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     if (event.url === '/') {
    //       this.getFilterName = undefined;
    //     }
    //   }
    // });

  }


  
}
