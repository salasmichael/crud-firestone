import { Component } from '@angular/core';
import { FirestoneService } from '../services/data/firestone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songList: any = [];

  constructor(
      private firestoneService:FirestoneService,
      private route: Router
  ) {}

    ngOnInit(): void {
      
      this.firestoneService.getSongList()
      .subscribe(( songs )=>{
        this.songList = songs;
      },(error)=>{
        console.log(error);
        
      })
    }
}
