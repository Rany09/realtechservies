import Image1 from "../Assets/ab-1.jpg";
import Image2 from "../Assets/ab-2.jpg";
import Image3 from "../Assets/ab-3.jpg";

function About() {
  return (
    <div className='py-20 px-4 max-w-screen-2xl  mx-auto min-h-screen'>
      <h1 className='font-nunito text-3xl md:text-5xl font-bold mb-4 text-slate-800'>About Real Tech Services</h1>
      <p className='mb-4 text-slate-700'>
        Real Tech Services is your go-to platform for finding, renting, and managing properties with ease. 
        We specialize in connecting tenants with landlords and providing a seamless rental experience through our user-friendly platform.
        Our mission is to simplify the rental process and make it more transparent for everyone involved.
      </p>
      <p className='mb-4 text-slate-700'>
        Whether you are a tenant looking for your next home or a landlord searching for reliable tenants, Real Tech Services is here to help. 
        Our platform offers a wide range of properties, from cozy apartments to spacious houses, all tailored to meet your specific needs.
      </p>
      <p className='mb-4 text-slate-700'>
        Our dedicated team is committed to providing exceptional service and support. 
        We believe in building long-term relationships with our users by offering personalized assistance and ensuring a smooth rental journey from start to finish. 
        At Real Tech Services, we value trust, transparency, and innovation.
      </p>
      <p className='mb-4 text-slate-700'>
        Join us at Real Tech Services and discover a new way of renting properties that is simple, efficient, and hassle-free. 
        We are excited to be a part of your rental journey and look forward to helping you find your perfect home.
      </p>

      {/* Why Choose Us Section */}
      <div className="bg-white p-4 rounded-lg">
        <h1 className="font-nunito font-bold text-center text-3xl md:text-5xl"> Why Choose Real Tech Services </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
          <div className='text-center p-3'>
            <img src={Image1} alt="Hassle Free Paperwork" className='mx-auto w-40 h-40 object-cover rounded-full' />
            <h3 className='mt-4 text-xl md:text-2xl font-semibold text-slate-800'>Hassle Free Paperwork</h3>
            <p className='mt-2 text-slate-700'>We take care of all the documentation and legal formalities to ensure a smooth and hassle-free process.</p>
          </div>
          <div className='text-center p-3'>
            <img src={Image2} alt="Home Shifting Assist" className='mx-auto w-40 h-40 object-cover rounded-full' />
            <h3 className='mt-4 text-xl md:text-2xl font-semibold text-slate-800'>Home Shifting Assist</h3>
            <p className='mt-2 text-slate-700'>Our team provides assistance with home shifting, making your move as seamless as possible.</p>
          </div>
          <div className='text-center p-3'>
            <img src={Image3} alt="Popular Locations" className='mx-auto w-40 h-40 object-cover rounded-full' />
            <h3 className='mt-4 text-xl md:text-2xl font-semibold text-slate-800'>Popular Locations</h3>
            <p className='mt-2 text-slate-700'>We offer properties in the most popular and desirable locations to match your preferences.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;