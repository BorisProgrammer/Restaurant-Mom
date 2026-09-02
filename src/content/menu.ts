import type { MenuCategory } from "@/types";

/**
 * Menú actual proporcionado por el restaurante (capturas de su sistema de
 * pedidos). El usuario indicó que es una referencia inicial: planea sumar
 * más platos, asados, alitas BBQ, etc. más adelante — solo hay que agregar
 * el ítem/categoría aquí, ningún componente necesita cambiar.
 *
 * Categorías "A la carta" y "Extras" existen en su sistema pero aún no se
 * proporcionaron los platos — se agregan cuando lleguen esos datos.
 */
export const menu: MenuCategory[] = [
  {
    id: "almuerzos",
    name: "Almuerzos",
    items: [
      { name: "Seco de pollo", price: 2.5 },
      { name: "Seco de carne", price: 2.5 },
      { name: "Seco de chivo", price: 2.5 },
      { name: "Broaster", price: 3.0 },
      { name: "Papipollo", price: 2.5 },
      { name: "Pechuga a la plancha", price: 3.0 },
      { name: "Carne apanada", price: 4.0 },
      { name: "Camarón apanado", price: 4.0 },
      { name: "Arroz con camarón", price: 4.0 },
      { name: "Ceviche pequeño", price: 3.0 },
      { name: "Ceviche grande", price: 4.0 },
      { name: "Chaulafán", price: 5.0 },
      { name: "Chuleta", price: 4.0 },
      { name: "Churrasco", price: 4.0 },
    ],
  },
  {
    id: "desayunos",
    name: "Desayunos",
    items: [
      { name: "Continental", price: 2.5 },
      { name: "Tigrillo", price: 2.5 },
      { name: "Café", price: 0.6 },
      { name: "Batido", price: 1.25 },
      { name: "Jugo", price: 1.0 },
      { name: "Huevos revueltos", price: 2.0 },
      { name: "Humita", price: 0.75 },
      { name: "Empanada", price: 1.0 },
      { name: "Tostada", price: 0.75 },
      { name: "Encebollado", price: 2.5 },
      { name: "Patacones", price: 2.5 },
    ],
  },
];
