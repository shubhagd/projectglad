import { LightningElement} from 'lwc';
import getMerchandise from '@salesforce/apex/searchmerch.getMerchDetails';

export default class Searchmerchendise extends LightningElement {
    accName;
    accPhone;

    handleOnChangeaccName(event){
        this.accName = event.target.value;
    }
    handleOnChangeaccPhone(event){
        this.accPhone = event.target.value;
    }
    
    initiateSearch(event){
        alert('Yes sir, I am ready to search! = '+this.accName);
        getMerchandise({searchTerm:this.accName}).then(results=>{
            this.dispatchEvent(new CustomEvent('getaccountdata',{detail:results}));
        }).catch(error=>{
            console.log(error);
        })
    }
 
}