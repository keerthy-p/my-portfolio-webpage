import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function MyWorks() {
  return (
    <>
      <h1 className='text-4xl font-bold text-white mb-4 text-center'>My Works</h1>
      <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-14 gap-4 relative"
      >

        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-3 pr-4">
            Static Landing Page<br /> built with React
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            Developed as a static, single-page application using ReactJS, HTML, CSS,
            and Bootstrap. The design focuses on user-friendly navigation and aesthetic
            appeal to engage potential clients.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://house-building-site.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >View Live Project</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/project-1.png" width={800} height={500} />
        </div>
      </section>
      <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative"
      >

        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-3 pr-4">
            Portfolio Website with Webflow
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            This interactive portfolio showcases smooth animations
            and dynamic elements, built on the Webflow platform. Designed
            to captivate and engage, it highlights a creative approach to
            presenting personal work.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://keerthy-portfolio-web-page.webflow.io/" target="_blank" rel="noopener noreferrer">
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >View Live Project</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/project-2.png" width={800} height={500} />
        </div>
      </section>
{/*       <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative"
      >

        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-3 pr-4">
            Landing Page Design for a <br />Digital Marketing Agency
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            This landing page design effectively captures the essence of
            a digital marketing agency, crafted in Figma with engaging
            visuals. providing a seamless user experience and driving
            conversions.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://www.behance.net/keerthypalani18" target="_blank" rel="noopener noreferrer">
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >View Design</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/project-3.png" width={800} height={500} />
        </div>
      </section> */}
      <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative"
      >

        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-3 pr-4">
            Landing Page Design for a <br />Digital Marketing Agency
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            This landing page design effectively captures the essence of
            a digital marketing agency, crafted in Figma with engaging
            visuals. providing a seamless user experience and driving
            conversions.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://www.behance.net/gallery/209674917/Home-Page-Design-for-Digital-Marketing-Agency" target="_blank" rel="noopener noreferrer">
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >View Design</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/project-3.png" width={800} height={500} />
        </div>
      </section>
      <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative"
      >

        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-3 pr-4">
            eBook Application Design with <br />Comprehensive UI Screens
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            This eBook app design features a seamless and intuitive user interface,
            crafted in Figma with supporting elements from Photoshop and Illustrator.
            Spanning 34 meticulously designed screens.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://www.behance.net/gallery/190709223/UI-Screen-Mockups" target="_blank" rel="noopener noreferrer">
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >View Design</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/project-4.png" width={800} height={500} />
        </div>
      </section>
      <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative"
      >

        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-3 pr-4">
            Static Landing Page for Interior Business
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            This clean and professional landing page is tailored for an
            interior and tiles business, built using HTML, CSS, and Bootstrap.
            Designed for a seamless user experience, it highlights services and
            showcases visuals that resonate with clients seeking elegant and functional spaces.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/keerthy-p" target="_blank" rel="noopener noreferrer">
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >View Project</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/project-5.png" width={800} height={500} />
        </div>
      </section>
      <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative"
      >

        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-3 pr-4">
            Medical Web Page Built with React
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            This medical webpage, developed with React, provides a 
            user-friendly interface tailored to healthcare needs. 
            Designed for efficiency and clarity, it offers seamless 
            navigation and essential medical information to enhance 
            user engagement and accessibility.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://medical-webpage.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >View Live Project</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/images/project-6.png" width={800} height={500} />
        </div>
      </section>
    </>
  )
}

export default MyWorks
