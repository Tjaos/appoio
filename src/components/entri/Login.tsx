export default function Login() {
    return (
        <div className="h-screen font-sans login bg-cover login">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl flex flex-col justify-center items-center">
                        <img src="https://images.unsplash.com/photo-1518155967095-371981de5e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Logo" 
                        className="w-20 h-20 rounded-full"/>
                            <p className="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                            <div className="">
                                <label className="block text-sm text-white">E-mail</label>
                                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email" placeholder="Digite o e-mail" aria-label="email" required />
                            </div>
                            <div className="mt-2">
                                <label className="block  text-sm text-white">Senha</label>
                                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password" id="password" placeholder="Digite a sua senha" arial-label="password" required />
                            </div>

                            <div className="mt-4 items-center flex justify-between">
                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                    type="submit"><a href="/entri/home">Entrar</a></button>
                                <a className="inline-block right-0 p-8 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                    href="#">Esqueceu a senha ?</a>
                            </div>
                            <div className="text-center">
                                <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400"
                                href="/entri/register">
                                    Criar uma conta
                                </a>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}