import { Component, Input, OnInit } from '@angular/core';
import { FavsService} from './favs.service'
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {
  public data: string[] = [];
  public favedByUser: string[] = null;
  @Input() id;

  constructor(
    private favsService: FavsService
  ) { }

  ngOnInit(): void {
    this._loadImages();
    this._getFavs(this.id || '1')
  }

  private _loadImages() {
    this.favsService.getImages().subscribe((res: any) => {
      this.data = res.filter(entry => entry.links.patch.small);
    })
  }

  private _getFavs(id) {
    this.favsService.getFavs(id).subscribe((res:any) => {
      console.log('The res from db faves', res)
    })
  }

  public addToFavs(id) {

  }

  public removeFromFavs(id) {

  }

}
