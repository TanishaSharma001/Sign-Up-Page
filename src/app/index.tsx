import { Ionicons } from "@expo/vector-icons";
import { Linking, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={styles.header}>Sign In</Text>
      <Text style={styles.content}> Let's experience the joy of telecare AI. </Text>

      <View>
        <Text style={styles.style}>Email Address</Text>
        <TextInput style={{
        marginLeft: 15,
        borderRadius:20,
        borderWidth: 1,
        borderColor:'pink',
        paddingHorizontal: 15,
        alignSelf: 'center',
        backgroundColor:'white',
        shadowColor : 'red',shadowOffset: {width: 5,height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        height: 50,
        width:'90%' 
        }}
        placeholder="example1234@gmail.com"
        />
      </View>

      <View>
        <Text style={styles.style}>Password</Text>
        <TextInput style={{
        marginLeft: 15,
        borderRadius:20,
        borderWidth: 1,
        borderColor:'pink',
        paddingHorizontal: 15,
        alignSelf: 'center',
        backgroundColor:'white',
        shadowColor : 'red',shadowOffset: {width: 5,height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        height: 50,
        width:'90%',
        
        }}
        placeholder="Enter the Password..."
        /> 
        

      </View>

      
       <Pressable onPress={()=> alert("sign in successful")}
       style ={{
       backgroundColor: "#f8c7e7",
        width: "90%",
       height: 55,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
    shadowColor : 'blue',shadowOffset: {width: 5,height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
     }}
     >
    <Text
    style={{
      color: "white",
      fontSize: 17,
       }}
       >SIGN IN
      </Text> 
      
      
       </Pressable>
<View
style = {{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  gap: 10
}}
>
       <Pressable onPress={()=> Linking.openURL("https://www.google.com")}
        style = {{
        backgroundColor: "white",
        width: "15%",
       height: 55,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
    shadowColor : 'blue',shadowOffset: {width: 5,height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
        }}
        >
          <Ionicons name="logo-google" size={24} color="black" />
       </Pressable>
       <Pressable onPress={() => Linking.openURL("https://www.facebook.com")}
        style = {{
        backgroundColor: "white",
        width: "15%",
       height: 55,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
    shadowColor : 'blue',shadowOffset: {width: 5,height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
        }}
        >
       <Ionicons name="logo-facebook" size={24} color="black" />
       </Pressable>
       <Pressable onPress={() => Linking.openURL("https://www.github.com")}
        style = {{
        backgroundColor:"white",
        width: "15%",
       height: 55,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
    shadowColor : 'blue',shadowOffset: {width: 5,height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
        }}
        >
       <Ionicons name="logo-github" size={24} color="black"/>
       </Pressable>
</View>
    <Text style={{marginTop :20,color: "black", textAlign: "center" }}>
  Don't have an account?  <Pressable onPress={() => alert("Create New Account")}><Text style={{ color: "brown", fontWeight: "bold" ,marginTop:0
  }}>SIGNUP</Text></Pressable>
      </Text>
    <Text style={{marginTop :10, color: "brown", textAlign: "center", fontWeight: "bold" }}>
  <Pressable onPress={() => alert("Email Address to reset your Password or Phone no.")}><Text style={{ color: "brown", fontWeight: "bold" }}>Forgot your password?</Text></Pressable>
    </Text>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 18,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },
  content:{
    textAlign:'center',
    marginBottom:50
  },
  style:{
    marginLeft: 10,
    marginBottom :10,
    marginTop:20
  }

  
});
