import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../../models/tweet.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { TweetService } from '../../../services/tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  // icons
  faHeart = faHeart;

  @Input() tweet: Tweet;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  likeTweet(tweetId) {
    this.tweetService.likeTweet(tweetId)
      .then()
      .catch(error => { if (error) { alert(error); } });
  }
}
