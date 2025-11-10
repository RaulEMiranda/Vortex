export default function ContactoPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Cont cto</h1>
      <p className="text-center text-lg">
        Puedes contactarnos con nosotros a trav s de este formulario.
      </p>
      <form className="flex flex-col items-center justify-center gap-4">
        <label htmlFor="name" className="block text-lg font-bold">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="block w-full px-4 py-2 text-lg"
        />
        <label htmlFor="email" className="block text-lg font-bold">
          Correo
        </label>
        <input
          type="email"
          id="email"
          className="block w-full px-4 py-2 text-lg"
        />
        <label htmlFor="message" className="block text-lg font-bold">
          Mensaje
        </label>
        <textarea id="message" className="block w-full px-4 py-2 text-lg" />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
