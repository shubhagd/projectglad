global class InvoiceSchedule implements Schedulable{
global void execute(SchedulableContext sc) {
      InvoiceStatusBatch isb = new InvoiceStatusBatch(); 
	  Database.executeBatch(isb);
   }
}