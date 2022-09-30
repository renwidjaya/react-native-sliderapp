import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-sliderapp' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type SliderappProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'SliderappView';

export const SliderappView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SliderappProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
