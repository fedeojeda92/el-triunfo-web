"use client"

import { categorias } from "@/data/productos"

type Props = {
  categoriaSel: string
  setCategoriaSel: (val: string) => void
  rangoPrecio: number[]
  setRangoPrecio: (val: number[]) => void
  orden: string
  setOrden: (val: string) => void
}

export default function Filtros({
  categoriaSel,
  setCategoriaSel,
  rangoPrecio,
  setRangoPrecio,
  orden,
  setOrden,
}: Props) {
  return (
    <div className="mb-8">
      <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaSel(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoriaSel === cat.id
                ? "bg-primary text-white"
                : "bg-white text-text border border-border hover:border-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 items-start sm:items-center">
        <div className="flex items-center gap-3">
          <label className="text-sm text-text-muted">Precio:</label>
          <input
            type="range"
            min={0}
            max={150000}
            step={1000}
            value={rangoPrecio[1]}
            onChange={(e) =>
              setRangoPrecio([rangoPrecio[0], Number(e.target.value)])
            }
            className="w-32 accent-primary"
          />
          <span className="text-xs text-text-muted min-w-[80px]">
            $0 - ${rangoPrecio[1].toLocaleString("es-AR")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-text-muted">Ordenar:</label>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="text-sm border border-border rounded-md px-3 py-1.5 bg-white text-text"
          >
            <option value="">Por defecto</option>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
            <option value="nombre">Nombre</option>
          </select>
        </div>
      </div>
    </div>
  )
}
