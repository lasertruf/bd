import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nc',
  templateUrl: './nc.component.html',
  styleUrls: ['./nc.component.scss']
})
export class NcComponent implements OnInit {

  state:any = 1;
  constructor() { }

  ngOnInit(): void {
  }

  clickcake(){
      
      let audio = new Audio();
      audio.src = "assets/largesplat.mp3";
      audio.load();
      audio.play();
      setTimeout(() => {
        this.state=2;
      }, 450);

      setTimeout(() => {
        this.state=1;
      }, 3000);
          
  }

}
