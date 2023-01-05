export interface Usuario{
    id?:number,
    login?:string,
    password?:string,
    lastLoginDate?:string,
}


export interface UsuarioLogin{
    login?:string,
    password?:string,
}

export interface UsuarioRegister{
    email?:string,
    nome?: string,
    senha?:string,
}