public class SearchMerchandise {
    @AuraEnabled(cacheable = true)
    public static List<Merchandise__c> getMerchandise(String searchTerm,String s){
		System.debug(searchTerm);
		System.debug(s);
        String searchkey = '%'+searchTerm+'%'; 
        Integer stock = Integer.valueOf(s);
        List<Merchandise__c> m;
        if(searchTerm != null && searchTerm != ''){
         	m = [Select id,Name,Merchandise_Stock__c,Merchandise_Desc__c,Merchandise_Price__c from Merchandise__c where Name LIKE :searchkey];
        }
        else if(stock>0){
        	 m = [Select id,Name,Merchandise_Stock__c,Merchandise_Desc__c,Merchandise_Price__c from Merchandise__c where Merchandise_Stock__c =:stock];
        }

		System.debug(m);
       
        return m;
    }
}