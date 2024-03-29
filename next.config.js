/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "images.vivino.com",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAmI7bCUIyXr_90OBQI-XamKhnow40pgieA&usqp=CAU",
      "firebasestorage.googleapis.com",
    ],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
    WEBSOCKET_URL: process.env.WEBSOCKET_URL,
    NEXT_FIREBASE_API_KEY: process.env.NEXT_FIREBASE_API_KEY,
    NEXT_FIREBASE_AUTH_DOMAIN: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
    NEXT_FIREBASE_PROJECT_ID: process.env.NEXT_FIREBASE_PROJECT_ID,
    NEXT_FIREBASE_STORAGE_BUCKET: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
    NEXT_FIREBASE_MESSAGING_SENDER_ID:
      process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_FIREBASE_APP_ID: process.env.NEXT_FIREBASE_APP_ID,
    NEXT_FIREBASE_MEASUREMENT_ID: process.env.NEXT_FIREBASE_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
