import { Text, View } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import theme from '../style';

export default function Details(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //JSX
    return (
      <View style={theme.border}>
        <View style={theme.detailTitle}>
          <Text style={theme.label}>Name:</Text>
        </View>
        <Text style={theme.ansewr}>{u.firstName} {u.lastName}</Text>
        <View style={theme.detailTitle}>
          <Text style={theme.label}>Age:</Text>
        </View>
        <Text style={theme.ansewr}>{u.age}</Text>
        <View style={theme.detailTitle}>
          <Text style={theme.label}>Email:</Text>
        </View>
        <Text style={theme.ansewr}>{u.email}</Text>
        <View style={theme.detailTitle}>
          <Text style={theme.label}>Phone number:</Text>
        </View>
        <Text style={theme.ansewr}>{u.phone}</Text>
        <View style={theme.detailTitle}>
          <Text style={theme.label}>Department:</Text>
        </View>
        <Text style={theme.ansewr}>{u.department}</Text>
        <View style={theme.detailTitle}>
          <Text style={theme.label}>Address:</Text>
        </View>
        <Text style={theme.ansewr}>{`${u.address.street} ${u.address.suburb} ${u.address.state}`}</Text>
      </View>
    ); 
  }