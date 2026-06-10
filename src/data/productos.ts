export type Producto = {
  id: string
  nombre: string
  categoria: string
  precio: number
  precios: {
    efectivo: number
    transferencia: number
    debito: number
    credito: number
  }
  talles: string[]
  imagen: string
  disponible: boolean
}

export const productos: Producto[] = [
  {
    id: "borcego-vurkina",
    nombre: "Calzado Citadina VURKINA",
    categoria: "borcegos",
    precio: 120000,
    precios: { efectivo: 102000, transferencia: 108000, debito: 114000, credito: 138000 },
    talles: ["35", "36", "37", "38", "39"],
    imagen: "/images/borcego-vurkina.png",
    disponible: true,
  },
  {
    id: "borcego-betina",
    nombre: "Calzado Citadina BETINA",
    categoria: "borcegos",
    precio: 94000,
    precios: { efectivo: 79900, transferencia: 84600, debito: 89300, credito: 108100 },
    talles: ["35", "37", "39", "40"],
    imagen: "/images/borcego-betina.png",
    disponible: true,
  },
  {
    id: "zapatilla-tacchini-8735",
    nombre: "Zapatillas Sergio Tacchini 8735",
    categoria: "zapatillas",
    precio: 99990,
    precios: { efectivo: 85000, transferencia: 90000, debito: 95000, credito: 114989 },
    talles: ["41", "42", "43"],
    imagen: "/images/tacchini-8735.png",
    disponible: true,
  },
  {
    id: "zapatilla-narrow-45130",
    nombre: "Zapatillas Narrow 45130",
    categoria: "zapatillas",
    precio: 99990,
    precios: { efectivo: 85000, transferencia: 90000, debito: 95000, credito: 114989 },
    talles: ["39", "40", "41", "44"],
    imagen: "/images/narrow-45130.png",
    disponible: true,
  },
  {
    id: "zapatilla-narrow-45200",
    nombre: "Zapatillas Narrow 45200",
    categoria: "zapatillas",
    precio: 99990,
    precios: { efectivo: 85000, transferencia: 90000, debito: 95000, credito: 114989 },
    talles: ["41", "42", "43", "44"],
    imagen: "/images/narrow-45200.png",
    disponible: true,
  },
  {
    id: "zapatilla-avia-8513",
    nombre: "Zapatilla Avia 8513 Start Running",
    categoria: "zapatillas",
    precio: 70000,
    precios: { efectivo: 59500, transferencia: 63000, debito: 66500, credito: 80500 },
    talles: ["39", "40", "41", "42", "43", "44"],
    imagen: "/images/avia-8513.png",
    disponible: true,
  },
  {
    id: "zapatilla-avia-6238",
    nombre: "Zapatilla Avia 6238 Running",
    categoria: "zapatillas",
    precio: 80000,
    precios: { efectivo: 68000, transferencia: 72000, debito: 76000, credito: 92000 },
    talles: ["39", "40", "41", "42", "43", "44"],
    imagen: "/images/avia-6238.png",
    disponible: true,
  },
  {
    id: "buzo-m51-8701",
    nombre: "Buzo M51 8701",
    categoria: "buzos",
    precio: 59000,
    precios: { efectivo: 50150, transferencia: 53100, debito: 56050, credito: 67850 },
    talles: ["S", "M", "L", "XL"],
    imagen: "/images/buzo-8701.png",
    disponible: true,
  },
  {
    id: "buzo-m51-princeton",
    nombre: "Buzo M51 8735 Princeton",
    categoria: "buzos",
    precio: 49900,
    precios: { efectivo: 42415, transferencia: 44910, debito: 47405, credito: 57385 },
    talles: ["S", "M", "L", "XL"],
    imagen: "/images/buzo-princeton.png",
    disponible: true,
  },
  {
    id: "remera-m51-7297",
    nombre: "Remera M51 7297",
    categoria: "remeras",
    precio: 30000,
    precios: { efectivo: 25500, transferencia: 27000, debito: 28500, credito: 34500 },
    talles: ["S", "M", "L", "XL"],
    imagen: "/images/remera-7297.png",
    disponible: true,
  },
  {
    id: "remera-m51-7318",
    nombre: "Remera M51 7318",
    categoria: "remeras",
    precio: 40000,
    precios: { efectivo: 34000, transferencia: 36000, debito: 38000, credito: 46000 },
    talles: ["S", "M", "L", "XL"],
    imagen: "/images/remera-7318.png",
    disponible: true,
  },
]

export const categorias = [
  { id: "todos", label: "Todos" },
  { id: "zapatillas", label: "Zapatillas" },
  { id: "borcegos", label: "Borcegos" },
  { id: "buzos", label: "Buzos" },
  { id: "remeras", label: "Remeras" },
]
