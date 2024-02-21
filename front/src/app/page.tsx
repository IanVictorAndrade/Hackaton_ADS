export default function Home() {
  return (
      <div className="flex flex-col justify-center items-center gap-4 bg-zinc-700 h-screen w-screen">
          <h1 className="flex pb-4 text-4xl font-bold">Bem vindo, Professor(a)!</h1>
          <input type="text" placeholder="E-mail" className="text-black p-2 w-[20rem] h-[3rem] rounded-lg"/>
          <input type="text" placeholder="Senha" className="text-black p-2 w-[20rem] h-[3rem] rounded-lg"/>
          <button className="bg-blue-700 p-3 w-[10rem] rounded-lg hover:bg-blue-800"
          >
              Entrar
          </button>
      </div>
  )
}