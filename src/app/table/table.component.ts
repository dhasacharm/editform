import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  tableData:any =[]
  constructor( private loginservice:LoginService,private route:Router) {}

  ngOnInit(){
    this.loginservice.table().subscribe((data) => {
      this.tableData.push(data)
      // this.route.navigateByUrl("/home")
    },
    (error) => {
      // this.errorMessage = error
    }
  )
  }
  edit(data:any){
    console.log(data)
    this.route.navigateByUrl("/edit/"+data.empEmail)
  } 

  delete(data:any){
    this.loginservice.delete(data).subscribe((data) => {
      // this.tableData.push(data)
      this.route.navigateByUrl("/home")
    },
    (error) => {
      console.log(error)
      // this.errorMessage = error
    }
  )
  }
}
