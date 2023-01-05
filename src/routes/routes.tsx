import React from "react";

import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading/Loading";

export const Routes = () => {
  const { auth } = React.useContext(AuthContext)
  const { loading } = React.useContext(AuthContext)

  if(loading == true){
    return(
      <Loading visible={loading}/>
    )
  }
  else{
    return (
      auth ? <PrivateRoutes/> : <PublicRoutes/> 
    )
  }


}