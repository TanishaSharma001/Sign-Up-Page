import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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

      
       <Pressable onPress={()=>alert("Button Pressed")}
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
     }}
     >
    <Text
    style={{
      color: "white",
      fontSize: 17,
       }}
       >SIGN UP
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
       <Pressable onPress={()=>alert("Button Pressed")}
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
        }}
        >
          <Ionicons name="logo-google" size={24} color="black" />
       </Pressable>
       <Pressable onPress={()=>alert("Button Pressed")}
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
        }}
        >
       <Ionicons name="logo-facebook" size={24} color="black" />
       </Pressable>
       <Pressable onPress={()=>alert("Button Pressed")}
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
        }}
        >
       <Ionicons name="logo-github" size={24} color="black" />
       </Pressable>
</View>
     <Text>
      Don't have an account?Sign Up.                                                    Forgot your password?
      
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
