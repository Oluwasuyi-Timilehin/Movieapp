import React from "react";

const Playtrailer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
      <>
        {/* Play Trailer Button */}
        <button
          onClick={openModal}
          className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark"
        >
          Play Trailer
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-[#081c22] rounded-lg overflow-hidden w-4/5 max-w-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:bg-gray-300"
              >
                ✖
              </button>

              {/* YouTube Video */}
              <div className="w-full h-0 pb-[56.25%] relative">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </>
    );
    <Playtrailer trailerKey="dQw4w9WgXcQ" />;

};

export default Playtrailer;
