

const Inicio = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-2 font-medium">Hora</th>
                <th className="px-4 py-2 font-medium">Lunes</th>
                <th className="px-4 py-2 font-medium">Martes</th>
                <th className="px-4 py-2 font-medium">Miércoles</th>
                <th className="px-4 py-2 font-medium">Jueves</th>
                <th className="px-4 py-2 font-medium">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-medium">7:00 - 8:00</td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Matemáticas</div>
                  <div className="text-muted-foreground text-sm">Prof. Juan Pérez</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Física</div>
                  <div className="text-muted-foreground text-sm">Prof. María Gómez</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Química</div>
                  <div className="text-muted-foreground text-sm">Prof. Carlos Rodríguez</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Biología</div>
                  <div className="text-muted-foreground text-sm">Prof. Ana Fernández</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Inglés</div>
                  <div className="text-muted-foreground text-sm">Prof. Luisa Sánchez</div>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">8:10 - 9:10</td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Historia</div>
                  <div className="text-muted-foreground text-sm">Prof. Pedro Gómez</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Geografía</div>
                  <div className="text-muted-foreground text-sm">Prof. Lucía Ramírez</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Educación Física</div>
                  <div className="text-muted-foreground text-sm">Prof. Javier Hernández</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Artes</div>
                  <div className="text-muted-foreground text-sm">Prof. Sofía Díaz</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Música</div>
                  <div className="text-muted-foreground text-sm">Prof. Alejandro Morales</div>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">9:20 - 10:20</td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Informática</div>
                  <div className="text-muted-foreground text-sm">Prof. Gabriela Soto</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Filosofía</div>
                  <div className="text-muted-foreground text-sm">Prof. Andrés Castillo</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Lengua y Literatura</div>
                  <div className="text-muted-foreground text-sm">Prof. Mariana Ortiz</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Emprendimiento</div>
                  <div className="text-muted-foreground text-sm">Prof. Ernesto Díaz</div>
                </td>
                <td className="border px-4 py-2">
                  <div className="font-medium">Religión</div>
                  <div className="text-muted-foreground text-sm">Prof. Beatriz Gómez</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Inicio