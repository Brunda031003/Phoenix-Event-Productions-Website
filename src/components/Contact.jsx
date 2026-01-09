export default function Contact() {
  return (
    <section id="contact" className="py-20 mx-4 sm:mx-6 md:mx-8">
      <div className="container text-center">

        <h2 className="text-4xl font-semibold">Get in touch</h2>
        <p className="opacity-70 mt-2">
          Tell us about your event and we'll be in touch to plan the perfect experience.
        </p>

        <div className="mt-10 max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 grid md:grid-cols-2 gap-6 text-center">

          <div className="flex gap-2 justify-center items-center">
            <p className="font-medium">Mobile:</p>
            <a href="tel:+917899389948" className="text-[#ED1D27] hover:underline">+91 7899389948</a>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <p className="font-medium">Email:</p>
            <a href="mailto:Phoenixtenthouse@gmail.com" className="text-[#ED1D27] hover:underline">Phoenixtenthouse@gmail.com</a>
          </div>        

          <div className="flex gap-2 justify-center items-center md:col-span-2">
            <p className="font-medium">Location:</p>
            <a href="https://maps.app.goo.gl/ezXM3wbzHPnBR5es5?g_st=awb" target="_blank" rel="noopener noreferrer" className="text-[#ED1D27] hover:underline">View on Map</a>
          </div>

        </div>

      </div>
    </section>
  );
}
