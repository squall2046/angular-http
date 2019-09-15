import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import - angular forms module - to realize two-way data binding
import { FormsModule } from '@angular/forms';

// 1.引入 HTTP 模块
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Axios
import { HttpService } from './services/http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //declare the import
    FormsModule,
    // 2.引入 HTTP 模块
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  // axios
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
