import { normal } from "./api";


class AdminAPI {
    public static async getAllNormal( tableName: string,  resDataName?:string, pageNumber?: number, pageSize?: number ) {

        try {
          
            let result =  (pageNumber && pageSize) ? await normal().bodyRequest("get", `${tableName}?page=${pageNumber}&limit=${pageSize}`) : await normal().bodyRequest("get", `${tableName}`);
            return {
                Items: result.data[resDataName || "items"] || [],
                TotalCount: result.totalResult
            };

        } catch (error: any) {
            console.log(error.message);
            return {
                Items: [],
                TotalCount: 0
            };
        }
    }
   
  
   
    public static async getSingleNormal( tableName: string, id: string,  resDataName?:string): Promise<any> {
        try {
            let result = await normal().bodyRequest("get", `${tableName}/${id}`);
            return result.data[resDataName || "items"] || [];
        } catch (error: any) {
            console.log(error.message);
            return null;
        }
    }


  
    public static async createNormal(table: string, new_data: any): Promise<any> {
        return await normal().bodyRequest("post", table, new_data);
    }
    
  

   

};

export default AdminAPI;