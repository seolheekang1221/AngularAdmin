import { Injectable } from '@angular/core';
import axios from 'axios';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private commonService: CommonService) {}

  members = [];
  member = {
    name: '',
    age: ''
  };

  membersCreate() {
    axios.post('http://localhost:3100/api/v1/members', this.member).then((response) => {
      console.log('Done membersCreate', response);
      this.membersRead();
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }

  membersRead() {
    this.members = [{
      name: '홍길동',
      age: 20
    }, {
      name: '춘향이',
      age: 16
    }];
    console.log('Done membersRead', this.members);
  }

  membersUpdate(index, member) {
    this.members[index] = member;
    console.log('Done membersUpdate', this.members);
  }

  membersDelete(index) {
    this.members.splice(index, 1);
    console.log('Done membersDelete', this.members);
  }
}
