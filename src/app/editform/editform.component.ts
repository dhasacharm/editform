import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent {
  constructor(private route:ActivatedRoute,private loginser:LoginService,private routepath:Router) {}
  id:any;
  formValues :any = []
  editForm:any
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.loaddata()
    this.editForm = new FormGroup({
      _id:new FormControl(""),
      empMobile:new FormControl(""),
      empName: new FormControl(""),
      empEmail: new FormControl(""),
      password: new FormControl("")
    });
    console.log(this.formValues)
  }


  loaddata(){
    this.loginser.table().subscribe((data:any) => {

      data.forEach((element:any) => {
        if(element.empEmail === this.id){
          // console.log("++++++")
          // console.log(element)
          this.formValues.push(element)
        }
        
      });
      // this.route.navigateByUrl("/home")
    },
    (error) => {
      // this.errorMessage = error
    }
  )
  }

  onSubmit() {
    console.log(this.editForm.value)
    this.loginser.update(this.editForm.value).subscribe((data)=>{
      this.routepath.navigateByUrl("/home")
    })

  }
}
