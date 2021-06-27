import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() outMethod = new EventEmitter<string>();
  search:string='';
  twowayresult:string='';
  counter:number=10;
  constructor() {}

  ngOnInit(): void {}

  callapp(input:string, evt: MouseEvent) {
    this.search=input;
    this.outMethod.emit(this.search);
    this.counter++;
  }

}
