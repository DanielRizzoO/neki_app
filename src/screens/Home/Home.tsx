import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from 'react'
import { getSkill  } from "../../api/services/UsuarioService";
import { Skill } from "../../api/models/Skill";
import { Image } from "react-native";

import { LogoNeki } from "../../components/LogoNeki/LogoNeki";

import { styles } from "./styles";
import { BorderButton } from "../../components/Buttons/BorderButton/BorderButton";
import { Box } from "victory-native";

export const Home = () => {
  const idSkill1 = 10015;
  const idSkill2 = 10023;
  const idSkill3 = 10044;
  let skill1 = {
    description: '',
    imageUrl: '',
    name: '',
    version: ''
  };
  let skill2: Skill;
  let skill3: Skill;
  let url1 = '';

  const getSkill = async () => {
    const resp1 = await fetch('http://107.178.219.190:8080/api/skills/' + idSkill1)
    const data = await resp1.json();
    skill1 = {
      description: data.description,
      imageUrl: data.imageUrl,
      name: data.name,
      version: data.version
    };

    const resp2 = await fetch('http://107.178.219.190:8080/api/skills/' + idSkill2)
    const data2 = await resp1.json();
    skill2 = {
      description: data.description,
      imageUrl: data.imageUrl,
      name: data.name,
      version: data.version
    };

    const resp3 = await fetch('http://107.178.219.190:8080/api/skills/' + idSkill3)
    const data3 = await resp1.json();
    skill3 = {
      description: data.description,
      imageUrl: data.imageUrl,
      name: data.name,
      version: data.version
    };
  }
    const [skills, setSkills] = useState([
      skill1, 
      skill2, 
      skill3, 
    ]);

  const [renderData, setRenderData] = useState<any>(skills)
  const renderSkills = () => {
    setRenderData(skills)
  }

  return (
      <View style={{height: '100%', backgroundColor:'#fff'}}>
        <View style={styles.container}>
          <BorderButton title="Ver suas skills" onPress={() => getSkill()}></BorderButton>
          <Image source={{uri:url1}}></Image>
        </View>
      </View>
    )
}

function render() {
  throw new Error("Function not implemented.");
}
