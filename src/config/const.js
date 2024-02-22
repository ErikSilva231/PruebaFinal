export const URLBASE = 'http://localhost:3000'

export const ENDPOINT = {
    login: `${URLBASE}/login`,
    users: `${URLBASE}/usuarios`
}

export const category = [{
    id: 1,
    name: "BARRA DE PROTEINAS",
    src: "BARRA-500x200.png",
    endpoint: "",
    path: "/products/BarradeProteinas"
},
{
    id: 2,
    name: "CACAO",
    src: "Cacao-500x200.png",
    endpoint: "FRUTOS_SECOS_500x200.png",
    path: "/products/Cacao"
},
{
    id: 3,
    name: "FRUTOS SECOS",
    src: "FRUTOS-SECOS-500x200.png",
    endpoint: "",
    path: "/products/FrutosSecos"
},
{
    id: 4,
    name: "INFUSIONES",
    src: "te-500x200.png",
    endpoint: "",
    path: "/products/Infusiones"
}]