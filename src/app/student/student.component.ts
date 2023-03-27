import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  myReactiveForm: FormGroup;
  isSubmitted: boolean = false;
integerRegex=/^\d+$/;
emailRegex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.myReactiveForm = this.fb.group({
      userDetails: this.fb.group({
        firstName: this.fb.control("", [
          Validators.required,
          Validators.maxLength(5),
        ]),
        lastName: this.fb.control(null, [Validators.required]),
        middelName: this.fb.control(null, [Validators.required]),
      }),

      email: this.fb.control(null, [Validators.required, Validators.email]),
      address: this.fb.control(null),

      userDetails2: this.fb.group({
        city: this.fb.control(null),
        state: this.fb.control(null),
      }),
      age: this.fb.control(null, [Validators.min(18),Validators.max(30),Validators.pattern(this.integerRegex)]),
      hobbies: this.fb.array([]),
    });
  }

  onSubmit() {
    this.isSubmitted = true; //to show form data on browser
    alert("method called");
    console.log("My ReactiveForm", this.myReactiveForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get("hobbies")).push(control);
  }

  // countries = [
  //   { id: "1", name: "India" },
  //   { id: "2", name: "Germany" },
  // ];

  // arrStates: Array<any> = [
  //   { id: "s1", parentId: "2", name: "Bavaria" },
  //   { id: "s2", parentId: "2", name: "Barlin" },
  //   { id: "s3", parentId: "1", name: "Maharashtra" },
  //   { id: "s4", parentId: "1", name: "Gujrat" },
  //   { id: "s5", parentId: "1", name: "Karnatak" },
  // ];

  // arrDist: Array<any> = [
  //   { id: "d1", stateId: "s3", name: "Kolhapur" },
  //   { id: "d2", stateId: "s3", name: "pune" },
  //   { id: "d3", stateId: "s3", name: "Mumbai" },
  //   { id: "d4", stateId: "s3", name: "Nashik" },
  //   { id: "d5", stateId: "s3", name: "Satara" },

  //   { id: "d6", stateId: "s4", name: "Ahmedabad" },
  //   { id: "d7", stateId: "s4", name: "Amreli" },
  //   { id: "d8", stateId: "s4", name: "Banaskantha" },
  //   { id: "d9", stateId: "s4", name: "Bharuch" },
  //   { id: "d10", stateId: "s4", name: "Bhavnagar" },

  //   { id: "d11", stateId: "s5", name: "Belagavi" },
  //   { id: "d12", stateId: "s5", name: "Bengaluru" },
  //   { id: "d13", stateId: "s5", name: "Bidar" },
  //   { id: "d14", stateId: "s5", name: "Chamrajanagar" },
  //   { id: "d15", stateId: "s5", name: "Chikballapur" },
  // ];

  // newstates: Array<any> = [];
  // newDist: Array<any> = [];

  // onCountrySelect(val) {
  //   this.newstates = this.arrStates.filter(
  //     (control) => control.parentId == val.target.value
  //   );
  // }

  // onStateSelect(val) {
  //   this.newDist = this.arrDist.filter(
  //     (control) => control.stateId == val.target.value
  //   );
  // }
}
