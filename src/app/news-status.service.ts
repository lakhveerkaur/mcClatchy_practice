import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { map } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
import { Observable, Subject, pipe} from 'rxjs';

const httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })
};

@Injectable({
  providedIn: 'root'
})
export class NewsStatusService {

  sharingData:any[] = [

    {Story_id:'ST011',checked:false,Story:'The final marines to leave the US embassy in Yemen handed their weapons over to Houthi rebels',Received_on:'6/2/2018 10:28',Originally_Published:'6/2/2018 23:44',Current_Total_Reactions:'2400',
    Current_Total_Shares:'900',Predicted_Shares_in_24Hr:'3000',Action:'Approve',Assigned_to:'Editor',Status:'Verified',Result:'False',Trust_Index:'5.33',class:'odd'},

    {Story_id:'ST012',checked:false,Story:'Apple will charge more for the larger Apple Watch',Received_on:'6/2/2018 10:28',Originally_Published:'6/1/2018 23:44',Current_Total_Reactions:'2900',
    Current_Total_Shares:'380',Predicted_Shares_in_24Hr:'9000',Action:'Approve',Assigned_to:'Editor',Status:'Verified',Result:'True',Trust_Index:'4.11',class:'even'},

    {Story_id:'ST001',Story:'Kim Jong Un called President Trump for discussions',Received_on:'6/4/2018 10:28',Originally_Published:'6/3/2018 23:44',Current_Total_Reactions:'2248',
    Current_Total_Shares:'120',Predicted_Shares_in_24Hr:'4000',Action:'Assign',Assigned_to:'',Status:'',Result:'',Trust_Index:''},

    {Story_id:'ST002',Story:'Doctors confirmed the first case of death by genetically modified food',Received_on:'6/4/2018 10:28',Originally_Published:'6/3/2018 23:44',Current_Total_Reactions:'1200',
    Current_Total_Shares:'400',Predicted_Shares_in_24Hr:'14000',Action:'Assign',Assigned_to:'',Status:'',Result:'',Trust_Index:''},

    {Story_id:'ST003',Story:'Iraqi army shot down two British planes that were delivering weapons to ISIS',Received_on:'6/4/2018 10:28',Originally_Published:'6/3/2018 23:44',Current_Total_Reactions:'2248',
    Current_Total_Shares:'200',Predicted_Shares_in_24Hr:'5000',Action:'Assign',Assigned_to:'',Status:'',Result:'',Trust_Index:''}

  ];

  constructor(private http: HttpClient) { }

  postStatus(data) {
    console.log("logs before post call---",data);
    return this.http.post('/saveStatus', {status: data})
                    .subscribe();
   }

  getStatus(){
    let temp = this.http.get('/getStatus').pipe(map(response => response));
    //console.log(temp,"temp");
    return temp;

    // return this.http.get(this._getUrl)
    //                 .map(res => res.json());
  }

  setData(Assigned,status,result){
    let stories = this.sharingData.map((item, i) => {
      console.log('iten - > ', item.Story_id);
        if(item.Story_id == "ST001"){
          console.log('inside if');
          item["Assigned_to"] = Assigned;
          item["Status"] = status;
          item["Result"] = result;
        }
      return item;
    });
     this.sharingData = stories;
  }
  getStories(){
  console.log('get values -- > ', this.sharingData);
  return this.sharingData;
  }
}
