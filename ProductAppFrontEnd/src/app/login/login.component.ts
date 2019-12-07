import { Component, OnInit, Inject} from '@angular/core';
import {ProductsService} from '../products.service'
import {Router} from '@angular/router'
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  key:Boolean=false;
  constructor(public router:Router,public service:ProductsService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) {}

  ngOnInit() {
      this.key=this.storage.get('key')
      if(this.key==null)
      {
        this.key==false;
      }
      console.log(this.key)
         if(this.key==true)
         {
          this.router.navigate(["view"]);
         }
  }

  onSubmit()
  {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
      this.service.get_user(this.model)
      .subscribe((data)=>{
         console.log(data);
        if(JSON.parse(JSON.stringify(data)).Status=="success")
        {
          alert("login success :-)");
          this.storage.set('key',true); 
          this.router.navigate(["view"]);
        }
        else{
          alert("please try again !!");
        }
      })
  }

}
