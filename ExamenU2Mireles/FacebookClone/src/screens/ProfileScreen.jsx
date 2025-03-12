import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* NavBar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#FFFFFF",
          paddingVertical: 10,
          marginTop: 30,
          borderBottomWidth: 1,
          borderBottomColor: "#DDD",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
          <Icon name="home" size={28} color="#1877F2" />
        </TouchableOpacity>
        <Icon name="groups" size={28} color="#666" />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="person" size={28} color={"#1877F2"} />
        </TouchableOpacity>
        <Icon name="shopping-cart" size={28} color="#666" />
        <Icon name="menu" size={28} color="#666" />
      </View>

      {/* Cover Image */}
      <Image source={require("../../assets/150x150.png")} style={{ width: "100%", height: 300 }} />

      {/* Profile Image */}
      <Image
        source={require("../../assets/150x150.png")}
        style={{
          width: 240,
          height: 240,
          borderRadius: 180,
          borderWidth: 3,
          borderColor: "#FFFFFF",
          position: "absolute",
          top: 255,
          left: "25%",
        }}
      />

      {/* User Name */}
      <Text style={{ marginTop: 140, textAlign: "center", fontSize: 32, fontWeight: "bold" }}>
        Cristian Amauri Gonzaga Castañeda
      </Text>

      {/* Action Buttons */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            flex: 8,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1877F2",
            padding: 10,
            borderRadius: 5,
            marginLeft: 20,
          }}
        >
          <Icon name="plus" size={20} color="#FFFFFF" style={{ marginRight: 10 }} />
          <Text style={{ marginLeft: 5, color: "#FFFFFF" }}>Añadir historia</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
            backgroundColor: "#f0f0f0",
            borderRadius: 10,
          }}
        >
          <Icon name="more-horiz" size={32} color="#666" />
        </View>
      </View>

      {/* Details Section */}
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, marginTop: 15 }}>
          <Icon name="work" size={20} color="#666" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>UTEZ</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, marginTop: 15 }}>
          <Icon name="home" size={20} color="#666" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Zapata</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15, marginTop: 15 }}>
          <Icon name="school" size={20} color="#666" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>DSM</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#1877F2",
          paddingVertical: 10,
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF" }}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Friends Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Amigos</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Encontrar amigos</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
