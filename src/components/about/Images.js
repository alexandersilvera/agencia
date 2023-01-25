import congal from 'assets/img/about/congal_1.jpg'
import congal_2 from 'assets/img/about/congal_2.jpg'
import asistencia from 'assets/img/about/asistencia.jpg'
import ori_bara from 'assets/img/about/ori_bara.jpg'


function Images(){
    return(
        <div className="w-full bg-green-300">
            <div className='grid grid-cols-2 gap-8'>
                <img src={congal} className='w-full h-96 object-cover'/>
                <img src={congal_2} className='w-full h-96 object-cover'/>
                <img src={ori_bara} className='w-full h-96 object-cover'/>
                <img src={asistencia} className='w-full h-96 object-cover'/>
            </div>
        </div>
    )
}
export default Images