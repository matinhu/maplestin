import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DateTime } from 'luxon';
import { timer, Subscription, Subject } from 'rxjs';
import { take, map, repeatWhen, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {
  normalBosses = [
    {
      name: 'Zakum',
      img: 'zakum.png',
      mesos: 612500,
      reboot: 3062500,
    },
    {
      name: 'Horntail',
      img: 'horntail.png',
      mesos: 1352000,
      reboot: 6760000,
    },
    {
      name: 'Hilla',
      img: 'hilla.png',
      mesos: 800000,
      reboot: 4000000,
    },
    {
      name: 'Crimson Queen',
      img: 'crimson_queen.png',
      mesos: 968000,
      reboot: 4840000,
    },
    {
      name: 'Pierre',
      img: 'pierre.png',
      mesos: 968000,
      reboot: 4840000,
    },
    {
      name: 'Von Bon',
      img: 'von_bon.png',
      mesos: 968000,
      reboot: 4840000,
    },
    {
      name: 'Vellum',
      img: 'vellum.png',
      mesos: 968000,
      reboot: 4840000,
    },
    {
      name: 'Von Leon',
      img: 'von_leon.png',
      mesos: 2450000,
      reboot: 12250000,
    },
    {
      name: 'Arkarium',
      img: 'arkarium.png',
      mesos: 2520500,
      reboot: 12602500,
    },
    {
      name: 'Magnus',
      img: 'magnus.png',
      mesos: 2592000,
      reboot: 12960000,
    },
    {
      name: 'Pink Bean',
      img: 'pink_bean.png',
      mesos: 1404500,
      reboot: 7022500,
    },
    {
      name: 'Mori Ranmaru',
      img: 'mori_ranmaru.png',
      mesos: 2664500,
      reboot: 13322500,
    },
    {
      name: 'Papulatus',
      img: 'papulatus.png',
      mesos: 2664500,
      reboot: 13322500,
    },
    // {
    //   name: 'Julieta',
    //   img: 'julieta.png',
    //   mesos: 1200000,
    //   reboot   mesos: 1200000,
    // },
    {
      name: 'Omni Cln',
      img: 'omni_cln.png',
      mesos: 1200000,
      reboot: 6250000,
    },
  ];

  weeklyBossess = [
    {
      name: 'Chaos Pink Bean',
      img: 'pink_bean.png',
      mesos: 12800000,
      reboot: 38400000,
      checked: false,
      weekly: true,
    },
    {
      name: 'Hard Hilla',
      img: 'hilla.png',
      mesos: 11250000,
      reboot: 33750000,
      checked: false,
      weekly: true
    },
    {
      name: 'Cygnus',
      img: 'cygnus.png',
      mesos: 14450000,
      reboot: 43350000,
      checked: false,
      weekly: true
    },
    {
      name: 'Chaos Zakum',
      img: 'zakum.png',
      mesos: 16200000,
      reboot: 48600000,
      checked: false,
      weekly: true,
    },
    {
      name: 'Princess No',
      img: 'princess_no.png',
      mesos: 16200000,
      reboot: 48600000,
      checked: false,
      weekly: true,
    },
    {
      name: 'Chaos Crimson Queen',
      img: 'crimson_queen.png',
      mesos: 16200000,
      reboot: 48600000,
      checked: false,
      weekly: true,
    },
    {
      name: 'Chaos Pierre',
      img: 'pierre.png',
      mesos: 16200000,
      reboot: 48600000,
      checked: false,
      weekly: true,
    },
    {
      name: 'Chaos Von Bon',
      img: 'von_bon.png',
      mesos: 16200000,
      reboot: 48600000,
      checked: false,
      weekly: true,
    },
    {
      name: 'Chaos Vellum',
      img: 'vellum.png',
      mesos: 21012500,
      reboot: 63037500,
      checked: false,
      weekly: true,
    },
    {
      name: 'Akechi Mitsuhide',
      img: 'akechi_mitsuhide.png',
      mesos: 28000000,
      reboot: 144000000,
      checked: false,
      weekly: true,
    },
    {
      name: 'Hard Magnus',
      img: 'magnus.png',
      mesos: 19012500,
      reboot: 57037500,
      checked: false,
      weekly: true,
    },
    // {
    //   name: 'Chaos Papulatus',
    //   img: 'papulatus.png',
    //   mesos: 26450000,
    //   checked: false,
    //   weekly: true,
    // },
    // {
    //   name: 'Lotus',
    //   img: 'lotus.png',
    //   mesos: 32512500,
    //   weekly: true,
    //   checked: false,
    // },

    // {
    //   name: 'Damien',
    //   img: 'damien.png',
    //   mesos: 33800000,
    //   weekly: true,
    //   checked: false,
    // },
    // {
    //   name: 'Guardian Angel Slime',
    //   checked: false,
    //   img: 'guardian_angel_slime.png',
    //   mesos: 34322000,
    //   weekly: true,
    // },
    // {
    //   name: 'Lucid',
    //   img: 'lucid.png',
    //   mesos: 35112500,
    //   weekly: true,
    //   checked: false,
    // },

    // {
    //   name: 'Will',
    //   img: 'will.png',
    //   mesos: 38255000,
    //   weekly: true,
    //   checked: false,
    // },

    // {
    //   name: 'Gloom',
    //   img: 'gloom.png',
    //   mesos: 49612500,
    //   weekly: true,
    //   checked: false,
    // },
    // {
    //   name: 'Verus Hilla',
    //   img: 'verus_hilla.png',
    //   mesos: 89520000,
    //   checked: false,
    //   weekly: true,
    // },
    // {
    //   name: 'Darknell',
    //   img: 'darknell.png',
    //   mesos: 52812500,
    //   weekly: true,
    //   checked: false,
    // },
  ];



  dailies = [{ name: 'Maple Tour', img: 'maple_tour.png', mesos: 7262420, reboot: 22658750, info: 'Get x7/week', checked: false }];

  gmtNow = DateTime.local().setZone('GMT').toString();
  bosses: Boss[] = []
  currentEarnings = 0;
  totalPossibleEarnings = 0;
  loading: HTMLIonLoadingElement;
  total = 0;
  reboot = false;

  private subscriptions = new Subscription();

  constructor(private loadingCtrl: LoadingController) { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


  //1 Char = 108 per week [11 Weekly = 180,262,580 + 14 Daily = 7,607,660]
  //1 WeakChar = 56 per week, missing 15 = [7,836,500 * 7 = 54,855,500] ´zakum > vellum + omni´
  //1 WeakChar = 8x2 Days [7,836,500 * 2 = 15,673,000 ]
  // Total Weekly = 1,096,286,960 x28 days
  // 2 Good Daily chars (DB/NL?) per week = 1,301,210,320 x 28Days

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });

    await this.loading.present();
    this.bosses = this.normalBosses.concat(this.weeklyBossess);


    for (const boss of this.bosses) {
      this.totalPossibleEarnings += boss.mesos;
    }

    // this.loadSelectedItems();
    this.startTimer();
    this.loading.dismiss();
  }


  loadSelectedItems() {
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
    if (selectedItems) {
      const lists = ['bosses', 'dailies'];
      for (const list of lists) {
        for (const item of this[list]) {
          for (const selectedItem of selectedItems) {
            if (selectedItem.name === item.name) {
              item.checked = selectedItem.checked;
            }
          }
        }
      }

    }
    this.loading.dismiss();
  }

  
  calculateEarnings(boss: Boss, event: any) {
    setTimeout(() => {
      boss.checked = event.detail.checked;
      if (boss.checked) {
        this.total++;
        if (this.reboot) {
          this.currentEarnings += boss.reboot;
        } else {
          this.currentEarnings += boss.mesos;
        }
      } else {
        this.total--;
        if (this.reboot) {
          this.currentEarnings -= boss.reboot;
        } else {
          this.currentEarnings -= boss.mesos;
        }
        
      }
      this.saveSelectedItems();
      if (this.currentEarnings < 0) {
        this.currentEarnings = 0;
      }
    }, 100);
  }



  saveSelectedItems() {
    if (this.currentEarnings < 0) { }
    const list = this.bosses.concat(this.dailies);
    const selectedItems = JSON.stringify(list);
    localStorage.setItem('selectedItems', selectedItems);
  }

  selectItems(type: string) {
    if (!type) {
      return;
    }

    if (this.reboot) {
      this.currentEarnings = 0;
    }

    const lists = ['bosses', 'dailies'];
    const allChecked = (this.bosses.map(a => a.checked) && this.dailies.map(a => a.checked))[0];
    for (const list of lists) {
      for (const item of this[list]) {
        if (type === 'all') {
          item.checked = allChecked ? false : true;
        } else if (type === 'daily') {
          item.checked = !item.weekly && item.name !== 'Maple Tour';
        } else if (type === 'none') {
          item.checked = false;
        } else {
          item.checked = item.weekly;
        }
      }
    }

    if (type === 'none') {
      this.currentEarnings = 0;
    }


  }

  private startTimer() {
    // Once a second every second we will be updated
    const countdownTimer = timer(1000, 1000).pipe(
      map((counter) => {
        this.gmtNow = DateTime.local().setZone('GMT').toString();
      })
    );

    // Add your countdown timer to the subscriptions to kill on destroy
    this.subscriptions.add(countdownTimer.subscribe());
  }

}


export class Boss {
  name: string;
  img: string;
  mesos: number;
  reboot: number;
  weekly?: boolean;
  checked?: boolean;
}
