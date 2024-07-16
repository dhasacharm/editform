import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.get("http://localhost:8000/emp/signin?" ,{params:data})
  }

  register(data:any) {
    this.http.post("http://localhost:8000/emp/create",data)
  }

  table() {
    return this.http.get("http://localhost:8000/emp/")
  }

  update(data:any){
    return this.http.patch("http://localhost:8000/emp/" + data._id,data)

  }

  delete(data:any){
    return this.http.delete("http://localhost:8000/emp/delete/" + data._id,data)

  }
}
