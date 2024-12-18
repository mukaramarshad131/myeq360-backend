export declare class LicenseDto {
    title: string;
    des: string;
    id: number;
    price: number;
    disc: number;
    image: string;
    categoryId: number;
}
export declare class PackageDto {
    title: string;
    categoryId: number;
    des: string;
    id: number;
    price: number;
    disc: number;
    image: string;
    licenses: packageLicense[];
}
declare class packageLicense {
    quantity: number;
    LicenseId: number;
}
export declare class LicenseCategory {
    title: string;
    id: number;
    liscense_id: number;
}
export {};
