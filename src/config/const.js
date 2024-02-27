const { VITE_APP_URL } = import.meta.env;

export const URLBASE = VITE_APP_URL;

export const ENDPOINT = {
  login: `${URLBASE}/login`,
  users: `${URLBASE}/usuarios`,
};

export const category = [
  {
    id: 1,
    name: "BARRA DE PROTEINAS",
    src: "https://i.ibb.co/bvH695T/BARRA-500x200.png",
    endpoint: "",
    path: "/products/BarradeProteinas",
  },
  {
    id: 2,
    name: "CACAO",
    src: "https://i.ibb.co/0nSjRys/Cacao-500x200.png",
    endpoint: "FRUTOS_SECOS_500x200.png",
    path: "/products/Cacao",
  },
  {
    id: 3,
    name: "FRUTOS SECOS",
    src: "https://i.ibb.co/ZY4NK3r/FRUTOS-SECOS-500x200.png",
    endpoint: "",
    path: "/products/FrutosSecos",
  },
  {
    id: 4,
    name: "INFUSIONES",
    src: "https://i.ibb.co/TttLj2W/te-500x200.png",
    endpoint: "",
    path: "/products/Infusiones",
  },
];
