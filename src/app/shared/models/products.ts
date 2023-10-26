import { productsStatus } from "../constant/productEnum";

export interface Iproducts{
    pname: string;
    pdetails: string;
    pstatus: productsStatus;
    id: string;
}
