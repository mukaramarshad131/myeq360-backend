export declare const defaultRole: {
    id: string;
    parentId: string;
    label: string;
    name: string;
    icon: string;
    type: string;
    route: string;
    order: number;
    children: {
        id: string;
        parentId: string;
        label: string;
        name: string;
        type: string;
        route: string;
        component: string;
    }[];
}[];
export declare const defaultAdminRole: {
    id: string;
    parentId: string;
    label: string;
    name: string;
    icon: string;
    type: string;
    route: string;
    order: number;
    children: {
        id: string;
        parentId: string;
        label: string;
        name: string;
        type: string;
        route: string;
        component: string;
    }[];
}[];
export declare const competencies: {
    title: string;
}[];
export declare const categories: {
    title: string;
}[];
export declare const subCompetencies: {
    title: string;
    competencyTitle: string;
}[];
export declare const assignTo: {
    title: string;
}[];
export declare const questions: {
    question: string;
    type: string;
    rank: string;
    assignTo: {
        title: string;
    };
    subCompetency: {
        title: string;
    };
    competency: {
        title: string;
    };
    options: string[];
}[];
export declare const licenses: {
    title: string;
    des: string;
    price: number;
    oldPrice: number;
    disc: number;
    image: any;
    category: {
        connectOrCreate: {
            where: {
                title: string;
            };
            create: {
                title: string;
            };
        };
    };
}[];
export declare const rolesList: {
    name: string;
}[];
