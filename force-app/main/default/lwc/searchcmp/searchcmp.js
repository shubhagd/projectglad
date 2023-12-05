import { LightningElement ,api} from 'lwc';

const columns = [
    { label: 'Merchandise Name', fieldName: 'Name' },
    { label: 'Merchandise Stock', fieldName: 'Merchandise_Stock__c',type : 'Number' },
    { label: 'Merchandise Desc', fieldName: 'Merchandise_Desc__c' },
    { label: 'Merchandise Price', fieldName: 'Merchandise_Price__c',type:'Currency' },
];

export default class Searchcmp extends LightningElement {
    columns = columns;
    @api searchresults=[];

    
}