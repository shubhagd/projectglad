import { LightningElement ,api} from 'lwc';

const columns = [
    { label: 'Merchandise id', fieldName: 'id' },
    { label: 'Merchandise Name', fieldName: 'Name' },
    { label: 'Merchandise Name', fieldName: 'Name' },
];

export default class Searchmerchandiseresult extends LightningElement {
    columns = columns;
    @api searchresults=[];

    
}