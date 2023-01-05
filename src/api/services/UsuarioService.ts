import { AxiosResponse } from "axios";
import { Usuario, UsuarioLogin } from "../models/Usuario";
import { api } from "../api";
import { Skill } from "../models/Skill";

const url:string = 'api/users'


export function getAll() : Promise<AxiosResponse<Usuario[]>> {
    return api.get(url);
}

export function get(id) : Promise<AxiosResponse<Usuario>> {
    return api.get(url + "/" + id);
}

export function create(usuario : Usuario) : Promise <AxiosResponse<Usuario>> {
    fetch('http://107.178.219.190:8080/' + url, {
        method: 'POST',
        body: JSON.stringify({
        login: usuario.login,
        password: usuario.password
    }),
    headers: {
        'Content-type': 'application/json',
    },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    return api.post(url, usuario);
}

export function update(usuario : Usuario) : Promise <AxiosResponse<Usuario>> {
    return api.put(url + "/" + usuario.id, usuario);
}

export function login(usuario : UsuarioLogin) : Promise <AxiosResponse<Usuario>> {
    fetch('http://107.178.219.190:8080/' + url, {
        method: 'POST',
        body: JSON.stringify({
        login: usuario.login,
        password: usuario.password
    }),
    headers: {
        'Content-type': 'application/json',
    },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    return api.post(url, usuario);
}

export function getSkill(id: number) : Promise <AxiosResponse<Skill>> {
    fetch('http://107.178.219.190:8080/api/skills/' + id) 
        .then((response) => response.json())
        .then((json) => console.log(json));

    return api.get('http://107.178.219.190:8080/api/skills/' + id);
}

function recuperarSenha(email) : Promise <AxiosResponse<Usuario>> {
    setTimeout(() => {
    },2000)
    return api.post('usuario/recuperar/' + email);
}

const usuarioService = {
    getAll,
    get,
    recuperarSenha,
    create,
    update,
    login
}
export default usuarioService