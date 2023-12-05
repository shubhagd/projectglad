import { LightningElement } from 'lwc';
 
export default class parentmerchandise extends LightningElement {
    searchDetail=[];
    handleClear () {
        this.searchDetail = [];
    }
    handleaccount(event){
        this.searchDetail=[];
        try{
            event.detail.forEach(x => {
                var accData = {
                    Name:x.Name,
                    Merchandise_Stock__c:x.Merchandise_Stock__c,
                    Merchandise_Desc__c:x.Merchandise_Desc__c,
                    Merchandise_Price__c:x.Merchandise_Price__c
                }
                this.searchDetail.push(accData);
            });
        }
        catch(e){
            console.log(e);
        }
    }
}