import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TweetService {
  private APIURL = environment.apiBaseUrl;
  private socket;

  constructor(private http: HttpClient) {
    this.socket = io(this.APIURL);
  }

  listTweets() {
    return this.http.get(`${this.APIURL}/tweets`).toPromise();
  }

  updateTweets() {
    // criando observer para que o mesmo escute os evento do websocket server
    return Observable.create((observer) => {
      this.socket.on('tweet', (message) => {
        observer.next(message);
      });
      this.socket.on('like', message => {
        observer.next(message);
      });
    });
  }

  insertTweet(tweet) {
    return this.http.post(`${this.APIURL}/tweets`, tweet).toPromise();
  }

  likeTweet(tweetId) {
    return this.http.post(`${this.APIURL}/likes/${tweetId}`, {}).toPromise();
  }
}
