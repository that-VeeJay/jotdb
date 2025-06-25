import View from "./note/View";
import Edit from "./note/Edit";

export default function MainScreen() {
  const renderContent = () => {
    if (true) {
      return <View />;
    }

    return null;
  };

  return <div>{renderContent()}</div>;
}
