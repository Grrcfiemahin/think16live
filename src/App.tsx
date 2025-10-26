import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="mb-8 flex justify-center">
            <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
              Think16
            </h1>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Coming Soon
          </h2>

          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            A youth rights organisation championing the voices and rights of young people across the UK
          </p>

          <div className="mb-8">
            <p className="text-lg text-white font-medium mb-2">
              Want to see your name on our staff team?
            </p>
            <p className="text-blue-100">
              Contact us today.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30 hover:bg-white/30 transition-all duration-300">
            <Mail className="w-6 h-6 text-white" />
            <a
              href="mailto:think16live@gmail.com"
              className="text-white font-medium text-lg hover:underline"
            >
              think16live@gmail.com
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm">
              Empowering young voices. Building a better future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
