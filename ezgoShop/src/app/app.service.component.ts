import { NgModule, Provider } from "@angular/core";
import { IProductsService } from "./services/Iproduct.service";
import { ProductsService } from "./services/products.service";

const services : Provider[] =[
{provide: IProductsService, useClass: ProductsService}
];

@NgModule({
    imports: [
    ],
    exports: [
    ],
    providers: [services],
    declarations: []
  })
  export class AppServiceModule { }