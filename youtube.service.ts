import {Injectable} from '@angular/core';
import {HttClient} from '@agular/common/http';

Injectable({
    providedIn: 'root'
})
export class YoutuveService{

    private youtubeUrl = 'https://www.googleleapis.com/youtube/v3';
    private apikey = 'AIzaSyBHL.ZzycyLRRpuFepi2mHyMD3Ede-r7-s';
    private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
    private nextPageToken = '';


    constructor( private http = HttpClient) {}

    getVideos(){

        const url = '{ this.youtubeUrl =/playlistItems}';

        const params = new HttpParams()
             .set('parr','snippet')
             .set('maxResults','10')
             .set('playlistId','this.playlist')
             .set('key', this.apikey)
    }

      return this.http.get<YoutuveResponse>(url,{params});
                  .pipe(
                      map( resp=>{
                          this.nexPageToken = resp.nexPageToken;
                          return resp.items;
                      }),

                      map( items =>{
                          return items.map( video => VideoPlaybackQuality.snippet)
                      })
                  )
                    
