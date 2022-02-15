import {ipcRenderer} from "electron";

export interface Product{
   id:string;
   name:string;
   price:string;
}

export class Api {
   
   public static async getProducts():Promise<Product[]>{
    const response = await ipcRenderer.invoke("GET_PRODUCTS")
    return response;
   }
}

