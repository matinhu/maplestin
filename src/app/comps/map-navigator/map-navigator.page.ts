import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-navigator',
  templateUrl: './map-navigator.page.html',
  styleUrls: ['./map-navigator.page.scss'],
})
export class MapNavigatorPage implements OnInit {

  data = [
    { mob: 'Type A', map: 'Coral Forest 2', checked: false },
    { mob: 'Type B', map: 'Coral Forest 4', checked: false },
    { mob: 'Powerful Gangster', map: 'Bully Bkvd. 2', checked: false },
    { mob: 'Strong Gangster', map: 'Bully Bkvd. 3', checked: false },
    { mob: 'Nameless Cat', map: 'Cat Area 2', checked: false },
    { mob: 'Blue Shadow', map: 'Shadowdance Hall 2', checked: false },
    { mob: 'Red Shadow', map: 'Shadowdance Hall 4', checked: false },
    { mob: 'Experiment Gone Wrong', map: 'Abandoned Area 2', checked: false },
    { mob: 'Big Experiment Gone Wrong', map: 'Abandoned Area 3', checked: false },
    { mob: 'Thralled Guard', map: 'Trueffet 2', checked: false },
    { mob: 'Thralled Warhammer Knight', map: 'Trueffet 2', checked: false },
    { mob: 'Thralled Wizard', map: 'Trueffet 3', checked: false },
    { mob: 'Thralled Archer', map: 'Trueffet 4', checked: false },
    { mob: 'Water Spirit', map: 'Forest of Water ', checked: false },
    { mob: 'Sun Spirit', map: 'Forest of Sunlight', checked: false },
    { mob: 'Earth Spirit', map: 'Forest of Earth', checked: false },
    { mob: 'Snow Cloud Spirit', map: 'Snow Cloud Clearing', checked: false },
    { mob: 'Thunder Cloud Spirit', map: 'Thunder Cloud Clearing', checked: false },
    { mob: 'Volatile Spirit', map: 'The Volatile Forest', checked: false },
    { mob: 'Toxic Spirit', map: 'Forest of Toxins', checked: false },
    { mob: 'Befuddled Spirit', map: 'Cavern Lower Path', checked: false },
    { mob: 'Mournful Spirit', map: 'Lower Path 2', checked: false },
    { mob: 'Discordant Spirit', map: 'Lower Path', checked: false },
    { mob: 'Anguished Spirit', map: 'Upper Path 2', checked: false },
    { mob: 'Gallina', map: 'Chicken Festival 1', checked: false },
    { mob: 'Gallus', map: 'Chicken Festival 2', checked: false },
    { mob: 'Angry Victory Plate', map: 'Plate Street 1', checked: false },
    { mob: 'Crooked Victory Plate', map: 'Plate Street 2', checked: false },
    { mob: 'Paper Bag Alley Citizen', map: 'Outlaw\'s Street 1', checked: false },
    { mob: 'Wood Board Alley Citizen', map: 'Outlaw\'s Street 3', checked: false },
    { mob: 'Angry Masquerade Citizen', map: 'Revelation Place 1', checked: false },
    { mob: 'Insane Masquerade Citizen', map: 'Revelation Place 2', checked: false },
    { mob: 'Weakened Dreamkeeper', map: 'Dance Floor 1', checked: false },
    { mob: 'Red Dancing Shoes', map: 'Dance Floor 2', checked: false },
    { mob: 'Dreamkeeper', map: 'Clocktower 1F', checked: false },
    { mob: 'Blue-eyed Gargoyle', map: 'Clocktower 3F', checked: false },
    { mob: 'Red-eyed Gargoyle', map: 'Clocktower 4F', checked: false },
    { mob: 'Pinedeer', map: 'Hill Path', checked: false },
    { mob: 'Bighorn Pinedeer', map: 'Mottled Forest 1', checked: false },
    { mob: 'Ewenana', map: 'Mottled Forest 2', checked: false },
    { mob: 'Ramanana', map: 'Five-Color Hill', checked: false },
    { mob: 'Unripe Wolfruit', map: 'Bobber Forest 1', checked: false },
    { mob: 'Ripe Wolfruit', map: 'Bobber Forest 1', checked: false },
    { mob: 'Angry Flyon', map: 'Bobble Forest 2', checked: false },
    { mob: 'Flyon', map: 'Bobble Forest 2', checked: false },
    { mob: 'Green Catfish', map: 'Chu Village Entrance', checked: false },
    { mob: 'Blue Catfish', map: 'Chu Village Entrance', checked: false },
    { mob: 'Rhyturtle', map: 'Torrent Zone 2', checked: false },
    { mob: 'Boss Rhyturtle', map: 'Below the falls', checked: false },
    { mob: 'Crillia', map: 'Mountain\'s Mouth, checked: false' },
    { mob: 'Patriarch Crillia', map: 'Skywhale Peak', checked: false },
    { mob: 'Birdshark', map: 'Mountainside 2', checked: false },
    { mob: 'Patriarch Birdshark', map: 'Colossal Tail', checked: false },
    { mob: 'Happy Erda', map: 'Land of Happiness', checked: false },
    { mob: 'Raging Erda', map: 'Land of Rage', checked: false },
    { mob: 'Sad Erda', map: 'Land of Sorrow', checked: false },
    { mob: 'Joyful Erda', map: 'Land of Joy', checked: false },
    { mob: 'Stone Erda', map: 'Rock Zone', checked: false },
    { mob: 'Blazing Erda', map: 'Fire Zone', checked: false },
    { mob: 'Soulful Erda', map: 'Spirit Zone', checked: false },
    { mob: 'Tranquil Erda', map: 'Forked Road 2', checked: false },
    { mob: 'Lantern Erda', map: 'Forked Road 2', checked: false },
  ];

  public results = [...this.data];
  public mapStr = '';

  constructor() { }

  ngOnInit() {
  }


  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.mob.toLowerCase().indexOf(query) > -1);
  }


  buildMaps(item, event) {
    const checked = event.detail.checked;
    item.checked = checked;
    if (!checked) {
      if (this.mapStr.indexOf(item.map) > -1) {
        if (this.mapStr.indexOf(item.map + '|') > -1) {
          this.mapStr = this.mapStr.replace(item.map + '|', '');
        } else {
          if (this.mapStr.indexOf('|' + item.map) > -1) {
            this.mapStr = this.mapStr.replace('|' + item.map, '');
          } else {
            this.mapStr = this.mapStr.replace(item.map, '');
          }
        }

      }
    } else {
      if (this.mapStr.length) {
        this.mapStr += '|' + item.map;
      } else {
        this.mapStr += item.map;
      }
    }
  }


  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
