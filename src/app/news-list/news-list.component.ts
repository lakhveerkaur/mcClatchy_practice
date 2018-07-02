import { Component, OnInit } from '@angular/core';
import { newslist } from '../newslist';
import { Router } from '@angular/router';
import { NewsStatusService } from '../news-status.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newslist:any[];
    // one;
  constructor(private newsStatusService:NewsStatusService,private  router:Router) {
    // this.one = new newslist();

   }

  options:any[]=[
    {name:"Jonathan",value:'1'},
    {name:"Kathy",value:'2'},
    {name:"Mary",value:'3'}
  ]
  ngOnInit() {
    this.intialData();
  }

  intialData(){
      //this.newslist = new newslist().newslist.filter(opt => opt.Status!='Verified');
      this.newslist = this.newsStatusService.getStories().filter(opt => opt.Status!='Verified' );
  }
  onApprove(data){
    console.log(data.ST001,"Assign");
    let arr;
    this.newsStatusService.setData(data.ST001,"Verified","Awaited");
    //this.newslist = this.one.newslist.filter(opt => opt.Status!='Verified');
  //  this.router.navigateByUrl('/editor/verifiedList');
    // let altered = new newslist().newslist.map((item, i) => {
    //   console.log('iten - > ', item.Story_id);
    //   if(item.status != 'Verify'){
    //     if(item.Story_id == "ST001"){
    //       console.log('inside if');
    //       item["Assigned_to"] = data.ST001;
    //       item["Status"] = "In Progress";
    //       item["Result"] = "Awaited";
    //     }
    //   }
    //   return item;
    // });
    // this.newslist = altered.filter(opt => opt.Status!='Verified');
    //console.log('list of newslist - > ', this.one.newslist.filter(opt => opt.Status!='Verified'));
    console.log('component newslist-- >',this.newslist);
  }
}
