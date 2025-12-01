import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
type Infos =
  | { order: 1; title?: string; text: string }
  | { order: 2; title?: string; text: string };
type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
type Props = {
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};
const RoomCard = ({ label, description, icon }: Props) => {
  return (
    <View>
        <View></View>
        <View>
        {!!label && <Text>{label}</Text>}
        <View>
            <View>
            {!!icon && (
                <View>
                {icon.lib === "MaterialIcons" && (
                    <MaterialIcons name={icon.name} size={23} color="purple" />
                )}
                {icon.lib === "FontAwesome5" && (
                    <FontAwesome5 name={icon.name} size={23} color="purple" />
                )}
                {icon.lib === "FontAwesome6" && (
                    <FontAwesome6 name={icon.name} size={23} color="purple" />
                )}
                </View>
            )}
            {!!description && (
                <View>
                {description.order === 1 && (
                    <View>
                    <Text>{description.title}</Text>
                    <Text>{description.text}</Text>
                    </View>
                )}
                {description.order === 2 && (
                    <View>
                    <Text>{description.title}</Text>
                    <Text>{description.text}</Text>
                    </View>
                )}
                </View>
            )}
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default RoomCard;
