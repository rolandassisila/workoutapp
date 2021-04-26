import DeviceInfo from 'react-native-device-info';

const ENV = process.env.APP_ENV || 'STAGING';
const BUNDLE_VERSION = process.env.BUNDLE_VERSION || DeviceInfo.getVersion();

const configs = {
  TEST: {
    ENV: 'TEST',
    BUNDLE_VERSION,
    CP_KEY: null,
    APP_VERSION: DeviceInfo.getVersion(),
    BASE_URL: '',
    APP_STORE_LINK: 'https://apps.apple.com/us/app/',
    PLAY_STORE_LINK: 'market://details?id=com.',
    GOOGLE_PAY_MERCHANT: '',
    APPLE_PAY_MERCHANT_ID: 'merchant.com.',
    APPLE_PAY_MERCHANT_NAME: '',
    BRAINTREE_TOKEN: 'sandbox_token',
  },
  DEVELOPMENT: {
    ENV: 'DEVELOPMENT',
    BUNDLE_VERSION,
    CP_KEY: null,
    APP_VERSION: DeviceInfo.getVersion(),
    BASE_URL: '',
    APP_STORE_LINK: 'https://apps.apple.com/us/app/',
    PLAY_STORE_LINK: 'market://details?id=com.',
    GOOGLE_PAY_MERCHANT: '',
    APPLE_PAY_MERCHANT_ID: 'merchant.com.',
    APPLE_PAY_MERCHANT_NAME: '',
    BRAINTREE_TOKEN: 'sandbox_token',
  },
  STAGING: {
    ENV: 'STAGING',
    BUNDLE_VERSION,
    CP_KEY: null,
    APP_VERSION: DeviceInfo.getVersion(),
    BASE_URL: '',
    APP_STORE_LINK: 'https://apps.apple.com/us/app/',
    PLAY_STORE_LINK: 'market://details?id=com.',
    GOOGLE_PAY_MERCHANT: '',
    APPLE_PAY_MERCHANT_ID: 'merchant.com.',
    APPLE_PAY_MERCHANT_NAME: '',
    BRAINTREE_TOKEN: 'sandbox_token',
  },
  PRODUCTION: {
    ENV: 'PRODUCTION',
    BUNDLE_VERSION,
    CP_KEY: null,
    APP_VERSION: DeviceInfo.getVersion(),
    BASE_URL: '',
    APP_STORE_LINK: 'https://apps.apple.com/us/app/',
    PLAY_STORE_LINK: 'market://details?id=com.',
    GOOGLE_PAY_MERCHANT: '',
    APPLE_PAY_MERCHANT_ID: 'merchant.com.',
    APPLE_PAY_MERCHANT_NAME: '',
    BRAINTREE_TOKEN: 'production_token',
  },
};

export const modifyApiUrl = jsonUrls => {
  const urls = JSON.parse(jsonUrls);
  configs.STAGING.BASE_URL = urls.STAGING.BASE_URL;
  configs.PRODUCTION.BASE_URL = urls.PRODUCTION.BASE_URL;
};

export const config = configs[ENV];
