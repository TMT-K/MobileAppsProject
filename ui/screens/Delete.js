import { Text, View,Pressable } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import {deleteUserAsync} from '../services/user.service'; 
import theme from '../style';

export default function Delete(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //functions
    function submit(){
      deleteUserAsync(u.id)
        .then(r=>{
          if(r.status == 204){
            navigation.navigate("Index",{op:'delete',data:u}); 
          }
        })
    }
    //JSX
    return (
      <View >
        <Text style={theme.label}>Name:</Text>
        <Text style={theme.ansewr}>{u.firstName} {u.lastName}</Text>
        <Text style={theme.label}>Age:</Text>
        <Text style={theme.ansewr}>{u.age}</Text>
        <Text style={theme.label}>Email:</Text>
        <Text style={theme.ansewr}>{u.email}</Text>
        <Text style={theme.label}>Phone number:</Text>
        <Text style={theme.ansewr}>{u.phone}</Text>
        <Text style={theme.label}>Department:</Text>
        <Text style={theme.ansewr}>{u.department}</Text>
        <Text style={theme.label}>Address:</Text>
        <Text style={theme.ansewr}>{`${u.address.street} ${u.address.suburb} ${u.address.state}`}</Text>
        <Text style={theme.ansewr}>Do you want to delete this contact detail?</Text>
        <Pressable style={theme.deleteContactButton} onPress={submit}>
                <Text style={theme.deleteContactButtonText}>Delete</Text>
        </Pressable>    
      </View>
    ); 
  }