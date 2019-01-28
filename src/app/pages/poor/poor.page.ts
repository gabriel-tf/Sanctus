import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-poor',
  templateUrl: './poor.page.html',
  styleUrls: ['./poor.page.scss'],
})
export class PoorPage implements OnInit {

  constructor(private admobFree: AdMobFree) {
  }

  ngOnInit() {
  }

  showRewardVideoAds() {
    let RewardVideoConfig: AdMobFreeRewardVideoConfig = {
      //isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-7099638606355483/6495374365"
    };
    this.admobFree.rewardVideo.config(RewardVideoConfig);
    this.admobFree.rewardVideo.prepare().then(() => {
    }).catch(e => alert(e));
  }

}
