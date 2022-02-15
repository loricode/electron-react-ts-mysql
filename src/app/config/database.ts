import mysql, { Connection } from "mysql2/promise";

export class ConfigDB {
   
  private static connection:Connection; 

   public static async dbConnection():Promise<Connection>{
      if(this.connection){ return this.connection }
      await this.createConnection(); 
      return this.connection;
   }

   private static async createConnection() {
      this.connection = await mysql.createConnection({
         host:'localhost',
         user: 'root',
         password:'',
         database: 'dbfasicell'
      });
   } 
}
