import React from "react";
import { View, Text, FlatList, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Card, Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const stories = [
  { id: "1", user: "Juan", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "2", user: "Maria", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "3", user: "Pedro", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "4", user: "Laura", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "5", user: "Carlos", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "6", user: "Ana", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "7", user: "Luis", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "8", user: "Sofia", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "9", user: "Ricardo", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
  { id: "10", user: "Miguel", avatar: "https://placehold.co/50x50.png", story: "https://placehold.co/200x200.png" },
];

const posts = [
  {
    id: "1",
    user: "Juan",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "CDMX",
    text: "Hermoso día!",
  },
  {
    id: "2",
    user: "Maria",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Guadalajara",
    text: "Disfrutando de la vista.",
  },
  {
    id: "3",
    user: "Pedro",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Monterrey",
    text: "Día increíble en la montaña.",
  },
  {
    id: "4",
    user: "Laura",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Puebla",
    text: "Amo este café.",
  },
  {
    id: "5",
    user: "Carlos",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Tijuana",
    text: "Atardecer espectacular.",
  },
  {
    id: "6",
    user: "Ana",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Querétaro",
    text: "Me encanta la naturaleza.",
  },
  {
    id: "7",
    user: "Luis",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Monterrey",
    text: "Disfrutando de la montaña.",
  },
  {
    id: "8",
    user: "Sofia",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "CDMX",
    text: "Hermoso día!",
  },
  {
    id: "9",
    user: "Ricardo",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Guadalajara",
    text: "Disfrutando de la vista.",
  },
  {
    id: "10",
    user: "Miguel",
    avatar: "https://placehold.co/50x50.png",
    image: "https://placehold.co/300x300.png",
    location: "Monterrey",
    text: "Día increíble en la montaña.",
  },
];

const activeUsers = [
  { id: "1", user: "Juan", avatar: "https://placehold.co/50x50.png" },
  { id: "2", user: "Maria", avatar: "https://placehold.co/50x50.png" },
  { id: "3", user: "Pedro", avatar: "https://placehold.co/50x50.png" },
  { id: "4", user: "Laura", avatar: "https://placehold.co/50x50.png" },
  { id: "5", user: "Carlos", avatar: "https://placehold.co/50x50.png" },
  { id: "6", user: "Luis", avatar: "https://placehold.co/50x50.png" },
  { id: "7", user: "Ana", avatar: "https://placehold.co/50x50.png" },
  { id: "8", user: "Pedro", avatar: "https://placehold.co/50x50.png" },
  { id: "9", user: "Laura", avatar: "https://placehold.co/50x50.png" },
  { id: "10", user: "Carlos", avatar: "https://placehold.co/50x50.png" },
];

const FacebookFeed = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f0f2f5" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#fff",
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1877f2" }}>Facebook</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name="search" size={24} style={{ marginHorizontal: 10 }} />
          <Icon name="facebook-messenger" size={24} />
        </View>
      </View>

      {/* Menu de opciones */}
      <View
        style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 10, backgroundColor: "#fff" }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
          <Icon name="home" size={24} style={{ color: "#1877f2" }} />
        </TouchableOpacity>
        <Icon name="users" size={24} />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="user" size={24} style={{ color: "#1877f2" }} />
        </TouchableOpacity>

        <Icon name="shopping-bag" size={24} />
        <Icon name="bars" size={24} />
      </View>

      {/* Publicar estado */}
      <Card containerStyle={{ margin: 0, padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar rounded source={{ uri: "https://placehold.co/100x100.png" }} />
          <TextInput
            placeholder="¿Qué estás pensando?"
            style={{ flex: 1, marginLeft: 10, backgroundColor: "#e4e6eb", borderRadius: 20, paddingHorizontal: 10 }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          <Button icon={<Icon name="video-camera" size={20} />} title="Live" type="clear" />
          <Button icon={<Icon name="camera" size={20} />} title="Foto" type="clear" />
          <Button icon={<Icon name="video" size={20} />} title="Video" type="clear" />
        </View>
      </Card>

      {/* Usuarios Activos */}
      <View style={{ backgroundColor: "#fff", paddingVertical: 10 }}>
        <FlatList
          horizontal
          data={activeUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View key={item.id} style={{ alignItems: "center", marginRight: 15 }}>
              <View style={{ position: "relative" }}>
                <Avatar rounded source={{ uri: item.avatar }} size={50} />
                <View
                  style={{
                    position: "absolute",
                    bottom: 2,
                    right: 2,
                    width: 12,
                    height: 12,
                    backgroundColor: "green",
                    borderRadius: 6,
                    borderWidth: 2,
                    borderColor: "white",
                  }}
                />
              </View>
              <Text style={{ fontSize: 12, color: "#000", marginTop: 5 }}>{item.user}</Text>
            </View>
          )}
        />
      </View>

      {/* Historias */}
      <View style={{ backgroundColor: "#fff", marginTop: 10, paddingVertical: 10 }}>
        <FlatList
          horizontal
          data={stories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ margin: 5, alignItems: "center" }}>
              <Image source={{ uri: item.story }} style={{ width: 100, height: 150, borderRadius: 10 }} />
              <Avatar
                rounded
                size="small"
                source={{ uri: item.avatar }}
                style={{ position: "absolute", top: 5, left: 5, borderWidth: 2, borderColor: "#fff" }}
              />
              <Text style={{ fontSize: 12, color: "#000", marginTop: 5 }}>{item.user}</Text>
            </View>
          )}
        />
      </View>

      {/* Publicaciones */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar rounded source={{ uri: item.avatar }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{item.user}</Text>
                <Text style={{ color: "gray" }}>{item.location}</Text>
              </View>
              <Icon name="ellipsis-h" size={20} style={{ marginLeft: "auto" }} />
            </View>
            <Text style={{ marginVertical: 10 }}>{item.text}</Text>
            <Image source={{ uri: item.image }} style={{ width: "100%", height: 400, borderRadius: 10 }} />
          </Card>
        )}
      />
    </ScrollView>
  );
};

export default FacebookFeed;
