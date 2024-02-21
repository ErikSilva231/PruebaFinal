export const URLBASE = 'http://localhost:3000'

export const ENDPOINT = {
    login: `${URLBASE}/login`,
    users: `${URLBASE}/usuarios`
}

export const category = [{
    id: 1,
    name: "BARRA DE PROTEINAS",
    endpoint: "",
    path: "/products/BarradeProteinas"
},
{
    id: 2,
    name: "CACAO",
    endpoint: "FRUTOS_SECOS_500x200.png",
    path: "/products/Cacao"
},
{
    id: 3,
    name: "FRUTOS SECOS",
    endpoint: "",
    path: "/products/FrutosSecos"
},
{
    id: 4,
    name: "INFUSIONES",
    endpoint: "",
    path: "/products/Infusiones"
}]