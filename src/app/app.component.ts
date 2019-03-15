import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tableheaders : string [] = ['NAME','SUBJECT','MARKS'];
  tabledatas : string[] = ['Brooks Morgan','  Network Maintenace','  96%'];
  tabledatas1 : string[] = ['Acheampomaa Martha','  Hardware','  89%'];
  tabledatas2 : string[] = ['Asamoah Clement','  Biology','  93%'];
  tabledatas3 : string[] = ['Samuel Asante','ReSearch Method','  100%'];
  tabledatas4 : string[] = ['Brooks Elizabeth','  Fashion','  100%'];



}


