import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs' 
import {AiFillDribbbleCircle,AiFillTwitterCircle,} from 'react-icons/ai'
import {SiSketchfab} from 'react-icons/si' 
import Image from 'next/image'
import deved from "../public/dev-ed-wave.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import grapik from "../public/grapik.png"
import Web1 from "../public/web1.png"
import Web2 from "../public/2web.jpg"
import Web3 from "../public/3web.png"
import Web4 from "../public/coba.png"
import Web5 from "../public/web5.png"
import Web6 from "../public/web6.jpg"
import {useState} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Satrio Adi Wiguno</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <section className='py-8 bg-white px-4 dark:bg-slate-800'>
          <div className='container'>
            <nav className='justify-between px-4 mb-10 flex'>
              <h1 className='font-semibold dark:text-white'>Satrio <span className='font-bold font-bruton text-primary'>AW</span></h1>
              <ul className='flex items-center'>
                <li className='mr-8'>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer dark:text-white" />
                </li>
                <li> <a href="" className='px-4 py-2 bg-primary text-white font-bold font-bruton rounded-xl hover:bg-sky-900'> Resume </a></li>
              </ul>
            </nav>
            <div className='text-center py-8 px-4 dark:text-white'>
              <h2 className='font-bold text-3xl font-bruton'>Satrio <span className='text-primary'> Adi W </span></h2>
              <h3 className='font-semibold text-lg py-4'>Developer and designer</h3>
              <p className='text-base text-gray-500 dark:text-slate-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, reiciendis fuga? Velit distinctio laboriosam, ratione ut tenetur itaque architecto dolor.</p>
            </div>
            <div className='flex flex-warp justify-center text-7xl '>
               <a href="https://twitter.com/SAW_ID"><span className='mr-4 w-56 text-slate-600 hover:text-primary cursor-pointer'><AiFillTwitterCircle/></span></a>
               <a href="https://dribbble.com/peewee_id"><span className='mr-4 w-32 text-slate-600 hover:text-primary cursor-pointer'><AiFillDribbbleCircle/></span></a>
               <a href="https://sketchfab.com/p2eweeworld"><span className='mr-4 w-32 text-slate-600 hover:text-primary cursor-pointer'><SiSketchfab/></span></a>
            </div>
            <div className='relative py-8 mt-16 rounded-full bg-secondary w-64 h-64 shadow-xl mx-auto group overflow-hidden'>
              
              <Image src={deved} alt="" className='scale-150 bottom-4 items-center group-hover:rotate-12 group-hover:scale-100 transition duration-500 ease-in-out'/>
            </div>
          </div>
        </section>
        <section className='bg-white pt-4 pb-8 dark:bg-slate-800'>
          <div className='container'>
            <div className='px-8 py-2'>
              <h1 className='text-2xl font-bold text-primary mb-4'>Service I Offer</h1>
              <p className='text-md text-slate-600 dark:text-slate-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates autem iure eaque aut. Tempore, non labore iste exercitationem unde iure neque quaerat dolorem quisquam ratione. Nisi blanditiis dolorem odio!</p>
            </div>
              <div className='px-6 py-4 flex flex-wrap'>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mb-5 text-center mx-auto bg-gray-200 rounded-lg shadow-lg px-2 py-2 w-80 h-[450px]'>
                    <Image src={code} alt="" className='mx-auto w-32'/>
                    <h1 className='font-bruton text-2xl font-bold text-primary '>Coding Basic</h1>
                    <p className=' text-sm text-gray-500 px-4 py-4'>yah saya baru belajar coding lagi karena saya lama tidak koding gimna paham ngga omongan saya ?</p>
                    <h2 className='font-semibold text-lg mb-4'>Code Tools</h2>
                    <h3 >Visual Studio Code</h3>
                    <h3>Tailwindcss</h3>
                    <h3>React.Js</h3>
                  </div>
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mb-5 text-center mx-auto bg-gray-200 rounded-lg shadow-lg px-2 py-2 w-80 h-[450px]'>
                    <Image src={consulting} alt="" className='mx-auto w-32'/>
                    <h1 className='font-bruton text-2xl font-bold text-primary '>Consulting</h1>
                    <p className=' text-sm text-gray-500 px-4 py-4'>kalau anda mengangap consulting itu memberikan konsultasi anda salah , consulting adalah Contra & insulting jadi kamu bakal saya insulting dan argumenmu akan saya contra</p>
                    <h2 className='font-semibold text-lg mb-4'>Consulting Tools</h2>
                    <h3 >Modal Pengalaman ngejek</h3>
                    <h3>Nyinyir mode: on</h3>
                    <h3>Julis level ibu2 komplek</h3>
                  </div>
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mb-5 text-center mx-auto bg-gray-200 rounded-lg shadow-lg px-2 py-2 w-80 h-[450px]'>
                    <Image src={grapik} alt="" className='mx-auto w-32'/>
                    <h1 className='font-bruton text-2xl font-bold text-primary '>Design Grapik</h1>
                    <p className=' text-sm text-gray-500 px-4 py-4'>selama ini saya belajar design grafis tapi saya memberikan lebih dari itu yaitu design grapik dimana grapik singkatan dari grafis yang unik , saking uniknya ngga semua orang suka ,gimna tertarik ?</p>
                    <h2 className='font-semibold text-lg mb-4'>Grapik Tools</h2>
                    <h3 >CorelDraw x7</h3>
                    <h3>Blender 3D 3x</h3>
                    <h3>AI</h3>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className='bg-white dark:bg-slate-800 pb-16'>
          <div className='container'>
            <div className='px-4 py-4'>
              <h1 className='font-bold text-2xl py-4 text-primary font-bruton dark:text-white'>Portopolio</h1>
              <p className='font-medium text-sm text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat similique praesentium vel suscipit alias non aperiam dignissimos earum nostrum dolore repudiandae consequatur, eos adipisci modi illum, quod vero beatae tenetur.</p>
            </div>
            
            <div className='flex flex-wrap justify-center mx-auto px-16 max-w-5xl'>
                <div className='md:w-1/2 w-full px-4'>
                  <Image src={Web1} width={500} height={500} alt="" className='py-4 rounded-3xl mx-auto' />
                </div>
                <div className='md:w-1/2 w-full px-4'>
                  <Image src={Web2}  width={500} height={500} alt="" className='py-4 mx-auto rounded-3xl'/>
                </div>
                <div className='md:w-1/2 w-full px-4'>
                  <Image src={Web3}   width={500} height={500} alt="" className='py-4 mx-auto rounded-3xl'/>
                </div>
                <div className='md:w-1/2 w-full px-4'>
                  <Image src={Web5}   width={500} height={500} alt="" className='py-4 mx-auto rounded-3xl'/>
                </div>
                <div className='md:w-1/2 w-full px-4'>
                  <Image src={Web6}  width={500} height={500} alt="" className='py-4 mx-auto rounded-3xl'/>
                </div>
                <div className='md:w-1/2 w-full px-4'>
                  <Image src={Web4}  width={500} height={500} alt="" className='py-4 mx-auto rounded-3xl'/>
                </div>
            </div>
          </div>
        </section>
      </main>
     </div>
    </>
  )
}
