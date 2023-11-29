import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <p className="text-xl lg:text-4xl font-semibold text-indigo-900">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, la página que estás buscando no existe
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-3xl bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg border-2 border-teal-500 hover:bg-white hover:text-gray-500 hover:border-teal-500"
          >
            Volver atrás
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Error;
