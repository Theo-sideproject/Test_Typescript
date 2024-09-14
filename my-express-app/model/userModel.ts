export interface UserModel {
    id:number;
    email:string;
    first_name?:string;
    last_name?:string;
    password?:string;
    age?: number;
    token?: number;
    xp?: number;
    date?: Date;
    jwtToken?: string;
}

export interface JwtPayload {
    id: number;
    // role: string;
}