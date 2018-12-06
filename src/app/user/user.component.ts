import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  url = location.href;
  userid = this.url.split('/')[4];
  code;
  key = 'Mike is thin';
  cartList: any;
  image64 = '';
  name: string;
  phone: any;
  email: any;
  birthdate: any;
  id: any;
  uploadfile(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.image64 = reader.result;
    console.log(this.image64);
  }
  findIndex = function(id) {
    var index = -1;
    this.cartList.forEach(function(item, key) {
      if (item.id === id) {
        index = item.id;
        return;
      }
    });
    return index;
  };

  findKey = function(id) {
    var index = -1;
    this.cartList.forEach(function(item, key) {
      if (item.id === id) {
        index = key;
        return;
      }
    });
    return index;
  };
  remove = function(id) {
    var index = this.findIndex(id);
    if (index != -1) {
      this.cartList.splice(this.findKey(id), 1);
      localStorage.removeItem(index.toString());
    }
  };

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authService.user_info().subscribe(data => {
      this.name = data['name'];
      this.id = data['id'];
      this.email = data['email'];
      this.birthdate = data['birthdate'];
      this.phone = data['phone'];
      console.log(data);
    });

    if (this.authService.isLogin()) {
      // login但亂打id，把它導向
    } else {
      alert('進入使用者頁面前請先登入');
      this.router.navigate(['/login']);
    }
  }
  onclick() {
    if (this.code === this.key) {
      alert('pass');
    } else {
      alert('get the fuck out');
    }
  }
  unpaid() {
    let json = '[';
    for (let i = 0, len = localStorage.length; i < len; i++) {
      json += localStorage.getItem(localStorage.key(i)) + '';
      if (i !== len - 1) {
        json += ',';
      }
    }
    json += ']';
    console.log(json);
    this.cartList = JSON.parse(json);
    this.cartList = this.cartList.filter(t => !t.paid);
  }
  unout() {
    let json = '[';
    for (let i = 0, len = localStorage.length; i < len; i++) {
      json += localStorage.getItem(localStorage.key(i)) + '';
      if (i !== len - 1) {
        json += ',';
      }
    }
    json += ']';
    console.log(json);
    this.cartList = JSON.parse(json);
    this.cartList = this.cartList.filter(t => t.paid);
  }
  undo() {
    this.cartList = [];
  }
}
