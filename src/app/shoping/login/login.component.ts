import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router
  ) {}
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string | boolean;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  submit() {
    // this is used to check data is already in server or not
    const email = this.loginForm.get("email").value;
    const password = this.loginForm.get("password").value;
    this.loginService.getUsers().subscribe((users: any[]) => {
      const existingUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (existingUser) {
        this.route.navigate(["/product"]);
      } else {
        // proceed with registration
        this.errorMessage = "Account not exist, Please create account";
      }
    });
  }

  onReset() {
    this.errorMessage = false;
  }
}
