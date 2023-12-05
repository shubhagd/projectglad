@RestResource(urlmapping='/MyMerch/*')
Global class webser {
    @httpPost
    global static void newMerchandise(List<Merchandise__c> m)
    {
        insert m;
    }
}