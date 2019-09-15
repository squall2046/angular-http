import { Component, OnInit } from '@angular/core';

// 3. 引入 模块 , 当作一个service
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Axios
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public list: any[] = [];
  public userInfo: any = {
    userName: '',
  }


  constructor(public http: HttpClient, public axios: HttpService) { }

  ngOnInit() {
  }

  // 通过 angular 自身的 HttpClient 模块获取数据
  getData() {
    let api = 'http://127.0.0.1:3000/news';
    this.http.get(api).subscribe((res: any) => {
      console.log(res);
      this.list = res;
    })
  }

  postData() {
    let api = 'http://127.0.0.1:3000/news';
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    this.http.post(api, { 'name': this.userInfo.userName }, httpOptions).subscribe((res: any) => {
      console.log(res);
    })

    this.userInfo.userName = '';
    alert('data posted')
  }

  // 如何通过jsonp 获取数据???
  // getJsonp() {
  //   let api = 'http://127.0.0.1:3000/news';
  //   this.http.jsonp(api,'callback').subscribe((res: any) => {
  //     console.log(res);
  //     // this.list = res;
  //   })
  // }

  // 通过 axios 获取数据
  axiosGetData(){
    let api = 'http://127.0.0.1:3000/news';
    this.axios.axiosGet(api).then((res: any) => {
      console.log(res.data);
      // this.list = res;
    })
  }

}
