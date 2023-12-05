public class MerchandiseArchCls {
    public static void insertMerchandiseArch(List<Merchandise__c> mer){
        Merchandise_Archive__c ma;
        List<Merchandise_Archive__c> malist=new List<Merchandise_Archive__c>();
       
        //Bulkify trigger
        for(Merchandise__c m : mer){
            ma=new Merchandise_Archive__c();
            ma.name=m.name;
            malist.add(ma);
        }
         insert malist; 
    }

}