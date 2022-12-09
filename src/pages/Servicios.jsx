import servicios from "../assets/services/serviceList";

const Servicios = () => {
  return (
    <div className="py-16">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">{servicio.title}</h3>
                <p className="mb-6">{servicio.infoService}</p>
                {/* <a href="#" className="block font-medium text-purple-600">Mas informacion</a> */}
              </div>
              <img src={servicio.imgSrc} className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Servicios