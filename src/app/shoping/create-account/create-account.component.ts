import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/service/login.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"],
})
export class CreateAccountComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  hide = true;
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string | boolean;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      mobile: ["", Validators.maxLength[10]],
    });
  }

  created() {}

  onSubmit() {
    // this is used to check data is already in server or not
    const email = this.loginForm.get("email").value;
    const password = this.loginForm.get("password").value;
    
    this.loginService.getUsers().subscribe((users: any[]) => {
      const existingEmail = users.find((user) => user.email === email);
      if (existingEmail) {
        this.errorMessage = "Email  already exist, please use another one.";
        this.isSubmitted = false;
      } else {
        // proceed with registration
        this.loginService.create(this.loginForm.value).subscribe((res) => {
          console.log(res);
          this.loginForm.reset();

        });
      }
    });
  }

  onReset() {
    this.loginForm.reset();

  }


}
