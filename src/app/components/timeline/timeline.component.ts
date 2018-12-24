import { Component, OnInit } from '@angular/core';
import { faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { User } from '../../models/user.model';
import { Tweet } from '../../models/tweet.model';
import { environment } from '../../../environments/environment';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  // icons
  faTwitter = faTwitter;

  user = new User();
  newTweet: Tweet;
  tweets: Tweet[];
  tweetButton = false;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.getUserData();
    this.getTweets();

    // se inscrevendo no evento de websocket para que a página seja atualizada.
    this.tweetService
      .updateTweets()
      .subscribe(_ => {
        this.getTweets();
      });
  }

  enableTweetButton() {
    if (this.newTweet.content.length > 0) {
      this.tweetButton = true;
    } else {
      this.tweetButton = false;
    }
  }

  getUserData() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.newTweet = new Tweet();
    this.newTweet.content = '';
    this.newTweet.author = this.user.name;
    this.newTweet.authorUser = this.user.userName;
  }

  getTweets() {
    this.tweetService.listTweets()
      .then((tweets: Tweet[]) => {
        this.tweets = tweets;
      }).catch(error => {
        if (error) { alert(error); }
      });
  }

  saveTweet() {
    this.tweetService.insertTweet(this.newTweet)
      .then((tweet: Tweet) => {
        this.tweets.push(tweet);
        this.getUserData();
        this.enableTweetButton();
      }).catch(error => { if (error) { alert(error); } });
  }
}
