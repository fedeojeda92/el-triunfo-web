'use client'
import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'
import type { Producto } from '@/data/productos'

type Categoria = { id: string; label: string }

type Props = {
  productos: Producto[]
  categorias: Categoria[]
}

export default function CatalogoCliente({ productos, categorias }: Props) {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [orden, setOrden] = useState('default')

  const productosFiltrados = useMemo(() => {
    let resultado = categoriaActiva === 'todos'
      ? productos
      : productos.filter(p => p.categoria === categoriaActiva)

    if (orden === 'precio-asc')
      resultado = [...resultado].sort((a, b) => a.precio - b.precio)
    if (orden === 'precio-desc')
      resultado = [...resultado].sort((a, b) => b.precio - a.precio)

    return resultado
  }, [categoriaActiva, orden, productos])

  return (
    <>
      {/* Filtros */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categorias.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategoriaActiva(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium
              whitespace-nowrap transition-all
              ${categoriaActiva === cat.id
                ? 'bg-[#CC0000] text-white'
                : 'bg-white text-[#222222] border border-[#E5E5E5] hover:border-[#CC0000]'
              }`}
          >
            {cat.label}
          </button>
        ))}
        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="ml-auto px-4 py-2 rounded-full text-sm border
            border-[#E5E5E5] bg-white text-[#222222] outline-none cursor-pointer"
        >
          <option value="default">Ordenar</option>
          <option value="precio-asc">Menor precio</option>
          <option value="precio-desc">Mayor precio</option>
        </select>
      </div>

      {/* Contador */}
      <p className="text-sm text-[#666666] mb-4">
        Mostrando {productosFiltrados.length} productos
      </p>

      {/* Grid */}
      {productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {productosFiltrados.map(producto => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[#666666] text-lg">
            No encontramos productos en esta categoría
          </p>
        </div>
      )}
    </>
  )
}
