import { Injectable } from "@angular/core";

export interface Workers {
  name: string;
  year: number;
  position: string;
  days: number;
}

@Injectable({
  providedIn: "root"
})


export class Globals {
  loginData = [{ name: "admin", email: "admin@info.net", password: "admin" }];
  constructor() {}

  tableData: Workers[] = [
    { name: "Tom", year: 25, position: "Manager", days: 15 },
    { name: "Steve", year: 31, position: "It guy", days: 1 },
    { name: "Sandra", year: 21, position: "Administrator", days: 32 },
    { name: "Andrius", year: 25, position: "Developer", days: 6 }
  ];
}
