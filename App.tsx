import {
  View,
  Text, 
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect} from 'react';
import { styles } from './styles';
import { Ball } from './components/Ball/Ball';

let timer : number;

const App = () => {

  const [ gravity, setGravity ] = useState(0.98);
  const [ upForce, setUpForce ] = useState(0);
  const [ velocity, setVelocity ] = useState(0);
  const [ posY, setPosY ] = useState(0);

  useEffect(() => {
    const aplyGravity = () => {
      //Decreasing upForce
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0: newUpForce;
      setUpForce(newUpForce);

      //Modyfing Velocity
      let newVelocity = velocity + (gravity - (newUpForce / 2));
      setVelocity(newVelocity);

      //Setting new position based on velocity
      let newPosY = posY - newVelocity;

      if(newPosY < 0){
        newPosY = 0;
        setVelocity(0);
      }

      setPosY(newPosY);
    }
    clearTimeout(timer);
    timer = setTimeout(aplyGravity,30);
  }, [gravity, upForce, velocity, posY]);

  const gerarForca = () => {
    setUpForce(7);
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY}/>
      </View>

      <View style={styles.control}>
        <View>
          <Text style={styles.controllText}> UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controllText}> Velocity: {velocity.toFixed(2)}</Text>
          <Text style={styles.controllText}> PosY: {posY.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.controllButonn} onPress={gerarForca}> 
          <Text style={styles.controllText}>Fazer força</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
