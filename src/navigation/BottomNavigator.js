import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemRequests from "../screens/ItemRequests";
import OrderRequests from "../screens/OrderRequests";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Request" component={ItemRequests} />
      <Tab.Screen name="Orders" component={OrderRequests} />
    </Tab.Navigator>
  );
}

export default MyTabs;
