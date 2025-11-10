export default function ServiciosPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Servicios</h1>
      <p className="text-center text-lg">
        Ofrecemos servicios de desarrollo de software a medida, con ms de 5 a os
        de experiencia en el desarrollo de software.
      </p>
      <ul className="list-disc list-inside text-lg">
        <li>Desarrollo de aplicaciones web</li>
        <li>Desarrollo de aplicaciones m viles</li>
        <li>Desarrollo de aplicaciones de escritorio</li>
        <li>Desarrollo de aplicaciones en la nube</li>
        <li>An lisis de datos</li>
        <li>Dise o de bases de datos</li>
        <li>Pruebas de penetraci n</li>
        <li>Seguridad de la informaci n</li>
      </ul>
    </div>
  );
}
