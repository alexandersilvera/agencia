//import { Typewriter } from "react-simple-typewriter"
import ori_bara from 'assets/img/about/ori_bara.jpg'
function Header(){
    
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>

              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                  Servicios de Software 
                  
                </h1>
                <p className="mt-6 text-2xl leading-8 text-black">
                  Instituto de formación e investigación en culturas, filosofías y religiosidades
                  afro-amerindias.
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-0rem)] -z-10 transform-gpu overflow-hidden bg-white blur-sm sm:top-[calc(100%-40rem)]">
              <img src={ori_bara} className='w-full h-full object-cover' alt='imagen de ori bara'/>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header