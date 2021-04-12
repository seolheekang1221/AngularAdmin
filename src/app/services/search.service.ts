import { Injectable } from '@angular/core';
import axios from 'axios';
import { CommonService } from './common.service';
import { MembersService } from './members.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private commonService: CommonService,
    private membersService: MembersService
  ) {}

  searchRead(q) {
    const url = `http://localhost:3100/api/v1/search?q=${q}`;
    axios.get(url).then((response) => {
      console.log('Done searchRead', response);
      this.membersService.members = response.data.members;
    }).catch((error) => {
      this.commonService.axiosError(error);
    });
  }
}
