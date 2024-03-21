import me from "../assets/me.jpg";

export default function Summary() {
  return (
    <>
      <div
        id="summary"
        className="h-screen flex flex-col items-center justify-center gap-y-10 text-center px-4"
      >
        <img
          alt="I'm Tim Baker.-image"
          fetchpriority="high"
          width="1920"
          height="1282"
          decoding="async"
          data-nimg="1"
          className="absolute z-0 h-full w-full object-cover"
          src="https://images.wallpaperscraft.ru/image/single/nochnoj_gorod_zdaniia_ogni_178307_1280x1024.jpg"
        />
        <div className="flex flex-col items-center gap-y-10 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
          <img
            src={me}
            alt="my real photo"
            className="rounded-full h-40 z-10"
          />
          <h1 className="text-3xl font-bold z-10">I'm Nikita Gavrilenko</h1>
          <p className="max-w-4xl z-10">
            I'm Mykyta, dependable, imaginative and hardworking individual. I am
            beginning web developer, ive been learning a lot and hard and
            motivatd to begin my career!
          </p>
        </div>
        <div class="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            class=" animate-bounce rounded-full bg-neutral-900 p-1 ring-orange-500 ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href="#education"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="h-5 w-5 bg-transparent sm:h-6 sm:w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
