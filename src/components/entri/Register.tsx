export default function Register() {
  return (
    <div className="h-screen font-sans login bg-cover login">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl flex flex-col justify-center items-center">
              <p className="text-white font-medium text-center text-lg font-bold">
                CADASTRE-SE
              </p>
              <div className="mt-2">
                <label className="block  text-sm text-white">Nome</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="text"
                  id="text"
                  placeholder="Digite a sua senha"
                  arial-label="text"
                  required
                />
              </div>
              <div className="">
                <label className="block text-sm text-white">E-mail</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="email"
                  id="email"
                  placeholder="Digite o e-mail"
                  aria-label="email"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white">Senha</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  arial-label="password"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white">
                  Confirme a senha
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  arial-label="password"
                  required
                />
              </div>

              <div className="mt-4 items-center flex justify-between">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit"
                >
                  <a href="/entri/login">Cadastrar</a>
                </button>
              </div>
              <div className="text-center">
                <a
                  className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400"
                  href="/entri/login"
                >
                  Já tem uma conta?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
