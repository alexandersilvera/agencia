import { Typewriter } from "react-simple-typewriter"
import congal_1 from 'assets/img/about/congal_1.jpg'

function Header(){
    
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto lg:mx-12 max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-8 pb-12">
            <div>

              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                  Bienvenidos <span></span>
                  <Typewriter
                        words={['al', 'Centro', 'Umbandista', 'Reino da Mata']}
                        loop={5}
                        cursor
                        cursorStyle= '_'
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        //onLoopDone={handleDone}
                        //onType={handleType}
                    />
                </h1>
                <p className="mt-6 text-3xl leading-12 text-gray-900 sm:text-center">
                  Instituto de formación e investigación en culturas, filosofías y religiosidades
                  afro-amerindias.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-0rem)] -z-10 transform-gpu overflow-hidden bg-white blur-sm sm:top-[calc(100%-40rem)]">
            <img src={congal_1} className='w-full h-full object-cover'/>
          </div>
        </div>
      </main>
    )
}

export default Header