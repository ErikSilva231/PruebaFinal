export const URLBASE = 'http://localhost:3000'

export const ENDPOINT = {
    login: `${URLBASE}/login`,
    users: `${URLBASE}/usuarios`
}

export const category = [{
    id: 1,
    name: "BARRA DE PROTEINAS",
    src: "../../../public/BARRA_500x200.png",
    endpoint: "",
    path: "/products/BarradeProteinas"
},
{
    id: 2,
    name: "CACAO",
    src: "../../../public/Cacao_500x200.png",
    endpoint: "../../../public/FRUTOS_SECOS_500x200.png",
    path: "/products/Cacao"
},
{
    id: 3,
    name: "FRUTOS SECOS",
    src: "../../../public/FRUTOS_SECOS_500x200.png",
    endpoint: "",
    path: "/products/FrutosSecos"
},
{
    id: 4,
    name: "INFUSIONES",
    src: "../../../public/te_500x200.png",
    endpoint: "",
    path: "/products/Infusiones"
}]