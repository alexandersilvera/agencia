import Features from "components/careers/Features"
import Header from "components/careers/Header"
import PositionsList from "components/careers/PositionsList"
import Testimonial from "components/careers/Testimonial"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

function Carees(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>Centro Reino da Mata | Carreras</title>
                <meta name="description" content="Instituto de Investigación y Formación Afro-umbandista." />
                <meta name="keywords" content='instituto, educación on-line, cultura, religión, umbanda, quimbanda, cursos.' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.centroumbandistareinodamata.com/" />
                <meta name="author" content='Reino da Mata' />
                <meta name="publisher" content='Reino da Mata' />
            </Helmet>
            <Navbar/>
            <div className="pt-28 bg-white">
                <Header/>
                <Testimonial/>
                <div className="bg-indigo-50">
                <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Transistor"
                    />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"
                    />
                    </div>
                </div>
                </div>
                </div>
                <Features/>
                <PositionsList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Carees