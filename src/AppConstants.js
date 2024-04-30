const AppConstants = {
  uploadTypes: ["PwnIQ_Game", "Character"],

  fileTypes: ["Outfit", "Backbling", "Pickaxe", "Glider", "Contrail", "Aura"],

  // unityConfig: {
  //   loaderUrl: "Build/Public.loader.js",
  //   dataUrl: "Build/Public.data.gz",
  //   frameworkUrl: "Build/Public.framework.js.gz",
  //   codeUrl: "Build/Public.wasm.gz",
  // },

  unityConfig: {
    loaderUrl: "Build/public.loader.js",
    dataUrl: "Build/public.data",
    frameworkUrl: "Build/public.framework.js",
    codeUrl: "Build/public.wasm",
  },

  cardData: [
    {
      _id: "0",
      imageOver: "/images/cardImages/5.png",
      imageCardOver: "/images/initialCardImages/6.jpeg",
    },
    {
      _id: "1",
      imageOver: "/images/cardImages/6.png",
      imageCardOver: "/images/initialCardImages/7.jpeg",
    },
    {
      _id: "2",
      imageOver: "/images/cardImages/3.png",
      imageCardOver: "/images/initialCardImages/8.jpeg",
    },
    {
      _id: "3",
      imageOver: "/images/cardImages/8.png",
      imageCardOver: "/images/initialCardImages/9.jpeg",
    },
    {
      _id: "4",
      imageOver: "/images/cardImages/0.png",
      imageCardOver: "/images/initialCardImages/0.jpeg",
    },
    {
      _id: "5",
      imageOver: "/images/cardImages/4.png",
      imageCardOver: "/images/initialCardImages/4.jpeg",
    },
    {
      _id: "6",
      imageOver: "/images/cardImages/2.png",
      imageCardOver: "/images/initialCardImages/2.jpg",
    },
    {
      _id: "7",
      imageOver: "/images/cardImages/6.png",
      imageCardOver: "/images/initialCardImages/3.jpeg",
    },
    {
      _id: "8",
      imageOver: "/images/cardImages/7.png",
      imageCardOver: "/images/initialCardImages/1.jpg",
    },
    {
      _id: "9",
      imageOver: "/images/cardImages/9.png",
      imageCardOver: "/images/initialCardImages/5.jpeg",
    },
  ],
  characterItems : [
    { fileType: "Outfit", image: "images/inventory/indiana_jones.webp" },
    { fileType: "Backbling", image: "images/inventory/mecha_strike_commander.webp" },
    { fileType: "Pickaxe", image: "images/inventory/adira.webp" },
    { fileType: "Glider", image: "images/inventory/adira.webp" },
    { fileType: "Contrail", image: "images/inventory/indiana_jones.webp" },
    { fileType: "Aura", image: "images/inventory/empty.png" },
  ],
  
  cardTemplate: ["FortniteButton"],
  backgroundColor: ["blue", "yellow"],

  baseUrl: import.meta.env.VITE_APP_BASE,
  uploadUrl: import.meta.env.VITE_UPLOAD_FILES,
  getFilesUrl: import.meta.env.VITE_GET_FILES,
  userInfoUrl: import.meta.env.VITE_USER_INFO,
  getCharacterUrl: import.meta.env.VITE_GET_CHARACTER_FILE,
  characterFileUploadUrl: import.meta.env.VITE_CHARACTER_FILE_UPLOAD,
};

export default AppConstants;
