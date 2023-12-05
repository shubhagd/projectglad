public class searchmerch {
@AuraEnabled(cacheable=true)
     public static List<Merchandise__c> getMerchDetails(String mName){
        mName='%'+mName+'%';
        List<Merchandise__c> m=[select id,name from Merchandise__c where name like:mName];
        return m;
    }
}