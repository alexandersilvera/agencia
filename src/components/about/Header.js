import { Typewriter } from "react-simple-typewriter"
import asistencia from 'assets/img/about/asistencia.jpg'
function Header(){
    
    return(
        <main>
        <div className="relative px-6 lg:px-6">
          <div className="mx-auto lg:mx-12 max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-8 sm:text-7xl">
                  Nosotros
                  
                </h1>
                <p className="mt-6 text-2xl leading-10 text-black max-w-5xl">
                  Instituto de formación e investigación en culturas, filosofías y religiosidades
                  afro-amerindias.
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-0rem)] -z-10 transform-gpu overflow-hidden bg-white blur-2sm sm:top-[calc(100%-45rem)]">
              <img src={asistencia} className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header