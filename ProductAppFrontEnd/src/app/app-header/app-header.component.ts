import { Component, OnInit,Inject} from '@angular/core';
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
   key;
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,public router:Router) { }

  ngOnInit() {
     this.key=this.storage.get('key');
     this.key=this.storage.get('key')
      if(this.key==null)
      {
        this.key=false;
      }
    console.log(this.key)
  }
     
  log_out()
  {
    
      this.storage.set('key',false);  
    this.router.navigate([""]);
    alert("logout succes ");
    this.ngOnInit();
  }
}
