import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TodoService } from "../service/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  // baseUrl: "http://localhost:3000/brand";
  brandForm: FormGroup;
  isSubmitted: boolean = false;
  brandList;

  constructor(private fb: FormBuilder, private service: TodoService) {}

  ngOnInit() {
    this.brandForm = this.fb.group({
      id: [0],
      name: this.fb.control([""]),
      isActive: [1],
    });
  }

  get _fc() {
    return this.brandForm.controls;
  }

  save() {
    this.isSubmitted = true;
    if (this.brandForm.invalid) {
      return;
    } else {
      let id = this.brandForm.controls.id.value;
      if (!id) {
        this.service.create(this.brandForm.value).subscribe(() => {
          alert("Created succssfully");
          this.reset();
        });
      }
    }
  }

  reset() {
    this.brandForm.reset();
    this.brandForm.controls.id.setValue(1);
    this.isSubmitted = false;
  }
}
