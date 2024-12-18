export declare class profileDto {
    fName: string;
    lName: string;
    phone: string;
    city: string;
    state: string;
    country: string;
    address: string;
    zip: string;
    bio: string;
}
export declare class ChangeRoleDto {
    roleId: number;
}
export declare class CreateRoleDto {
    name: string;
    permissions: Record<any, any> | null;
    roleId: number;
}
