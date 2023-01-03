

// export interface  UserInfo {
//   name: string;
//   handle?: string;
//   picture: string;
//   chat?: number;
//   retweet?: number;
//   like?: number;
// }

export type  UserInfo = {
  name: string;
  handle?: string;
  tweetText?: string;
  picture: string;
  chat?: number;
  retweet?: number;
  like?: number;
}