import { Component, OnInit } from "@angular/core";
import { Result } from "../model/results";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent implements OnInit {
  results: Result[] = [
    {
      name: "sushant jadhav",
      department: "Mechanical Engineering",
      semester: 4,
      result: "Pass"
    },
    {
      name: "shital jadhav",
      department: "civil Engineering",
      semester: 5,
      result: "Pass"
    },
    {
      name: "ketan kumbhar",
      department: "Mechanical Engineering",
      semester: 4,
      result: "Fail"
    },

    {
      name: "Ashitosh kondekar",
      department: "Information technology",
      semester: 5,
      result: "Pass"
    },
  ];
  constructor() {}

  ngOnInit() {}
}
