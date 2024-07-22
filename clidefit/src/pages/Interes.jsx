const Interes = () => {
  return (
    <div className="mt-32 p-8 xl:mx-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6">
        Información de interés
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-32 max-w-7xl mx-auto">
        <div className="flex justify-center w-full aspect-w-16 aspect-h-9 lg:aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dwJBtDVJ-l4?si=k3FhupNWGOSsJvct"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center w-full aspect-w-16 aspect-h-9 lg:aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/v7YEa9U2Whk?si=HTkyq90sQfka6akh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Interes;
