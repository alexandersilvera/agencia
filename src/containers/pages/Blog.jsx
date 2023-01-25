import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

function Blog(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>Centro Reino da Mata | Blog</title>
                <meta name="description" content="Instituto de Investigación y Formación Afro-umbandista." />
                <meta name="keywords" content='instituto, educación on-line, cultura, religión, umbanda, quimbanda, cursos.' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.centroumbandistareinodamata.com/" />
                <meta name="author" content='Reino da Mata' />
                <meta name="publisher" content='Reino da Mata' />
            </Helmet>
            <Navbar/>
            <div className="pt-28 ">

            </div>

            Blog
            <Footer/>
        </Layout>
    )
}
export default Blog