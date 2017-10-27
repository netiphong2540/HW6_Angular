import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  constructor() { }

  private name: String[];
  private pic: String[];

  ngOnInit() {

    this.name = ["League of Legends", "Hearthstone: Heroes of Warcraft", "Counter-Strike: Global Offensive", "World of Warcraft",
      "Overwatch", "World Of Tanks", "Grand Theft Auto V", "Guild Wars 2", "ARK: Survival Evolved", "Warframe", "Dota 2",
      "Heroes of the Storm"];

    this.pic = ["https://i.ytimg.com/vi/BGtROJeMPeE/maxresdefault.jpg"
      , "https://www.mxphone.net/wordpress/wp-content/uploads/2016/03/hearthstone-1024x576.jpg"
      , "https://global-offensive.com/wp-content/uploads/sites/2/2014/02/counter-strike-global-offensive-game-hd-wallpaper-1920x1080-8976.jpg"
      , "http://media.comicbook.com/2017/10/wow-wallpapers-hd-1039342.jpg"
      , "http://pm1.narvii.com/6306/7bd541b1c5b3efd9eb0e3fb47e938dcdb7e23722_hq.jpg"
      , "https://i.pinimg.com/originals/73/9b/85/739b85a656903cc392ea97aa4badb808.jpg"
      , "http://cdn2us.denofgeek.com/sites/denofgeekus/files/gta5-wallpaper.jpg"
      , "https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/wallpapers/GuildWars2-07-1920x1080.jpg"
      , "https://i.ytimg.com/vi/5fIAPcVdZO8/maxresdefault.jpg"
      , "https://i.imgur.com/J9G0uCu.jpg"
      , "http://th.dafaesports.com/wp-content/uploads/2016/02/20141223121131a0dz4ak3w8am33jp.jpg"
      , "http://media.blizzard.com/heroes/images/icons/heroes-facebook-preview-bcon.jpg"];
      
  }

}
