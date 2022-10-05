import {
  DdSdkReactNativeConfiguration,
  SdkVerbosity,
  DdSdkReactNative,
} from '@datadog/mobile-react-native';

const DDClientToken = 'token';
const applicationID = 'application ID';
const serviceName = 'service name';

export const config = new DdSdkReactNativeConfiguration(
  DDClientToken,
  __DEV__ ? 'development' : 'production',
  applicationID,
  false, // track User interactions (not required)
  false, // track XHR Resources (not required)
  !__DEV__, // track Errors
);
config.site = 'US1';
config.verbosity = SdkVerbosity.WARN;
config.serviceName = serviceName;
// Optional: enable or disable native crash reports
config.nativeCrashReportEnabled = true;

export const initializeDatadog = async (): Promise<void> => {
  await DdSdkReactNative.initialize(config);
};
