import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TodoStudentService } from "../service/todo-student.service";

@Component({
  selector: "app-todo-student",
  templateUrl: "./todo-student.component.html",
  styleUrls: ["./todo-student.component.css"],
})
export class TodoStudentComponent implements OnInit {
  arrayOfData: any = [];

  url = "http://localhost:3000/students/";

  public studentResForm: FormGroup | any;
  isSubmitted = false;
  id: any;

  constructor(
    private fb: FormBuilder,
    private todoSrvice: TodoStudentService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.studentResForm = this.fb.group({
      id: [0],
      name: this.fb.control("", [Validators.required]),
      course: this.fb.control("", [Validators.required]),
      about: ["", Validators.required],
    });

    this.onSubmit();
    this.getAllData();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.studentResForm.invalid) {
      return;
    } else {
      let id = this.studentResForm.controls.id.value;
      if (!id) {
        this.todoSrvice.create(this.studentResForm.value).subscribe({
          next: (res) => {
            alert("student data added successfully");
            this.onReset();
          },
          error: () => {
            alert("student data not added");
            this.onReset();
          },
        });
      } else {
        this.todoSrvice.update(this.studentResForm.value).subscribe((res) => {
          alert("data updated successfully");
          this.onReset();
        });
      }
    }
  }

  onReset() {
    this.studentResForm.reset();
    this.getAllData();
  }

  getAllData() {
    this.todoSrvice.getFromServer().subscribe({
      next: (res) => {
        console.log("data fetching from server", res);
        this.arrayOfData = res;
      },
      error: (err) => {
        alert("error while fetching data");
      },
    });
  }


  editData(id: any) {
    if (id) {
      const brand = this.arrayOfData.find((x) => x.id === id);

      if (!brand) return;

      this.todoSrvice.edit(id).subscribe((result) => {
        Object.keys(this.studentResForm.controls).forEach((key) => {
          this.studentResForm.controls[key].setValue(result[key]);
        });
        alert("Edit data loaded successfully");
      });
    }
  }

  deleteData(id) {
    var result = confirm("want to delete");
    if (id && result) {
      const brand = this.arrayOfData.map((x) => x.id === id);

      if (!brand) return;
      brand.isDeleting = true;

      this.todoSrvice.delete(id).subscribe(() => {
        brand.isReading = false;
        this.onReset();
        alert("remove successfully");
        this.getAllData();
      });
    }
  }
}

//   // if(this.studentResForm.invalid){
//   //   return;
//   // }else{
//   //   let id=this.studentResForm.controls.id.value;
//     // if(!id){
//       this.todoSrvice.getFromServer().subscribe({
//         next: (res) => {
//           console.log("data fetching from server", res);
//           this.arrayOfData = res;
//         },
//         error: () => {
//           alert("error while fetching data");
//         },
//       });
//     // }
//     // else{
//     //   this.todoSrvice.edit(id,this.studentResForm.value).subscribe(()=>{
//     //     alert("student data updated successfully");
//     //     this.onReset();
//     //   })
//     // }
//   // }
// }
