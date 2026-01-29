"use client";

export default function CheminVersExcellence() {
  return (
    <section className="relative min-h-[100vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
        <div className="relative w-full max-w-[400px] h-full bg-foreground/5 border-x border-primary/20 shadow-2xl z-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/asphalt-dark.png')",
            }}
          />
          {/* Ligne centrale qui défile sur toute la hauteur (transform pour boucle continue) */}
          <div className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none">
            <div
              className="road-line w-1 shrink-0"
              style={{
                minHeight: "calc(100% + 100px)",
                backgroundImage:
                  "linear-gradient(to bottom, transparent 50%, rgba(153,255,204,0.6) 50%)",
                backgroundSize: "1px 100px",
                backgroundRepeat: "repeat-y",
              }}
            />
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background/80 to-transparent" />
        </div>

        <div className="absolute z-20 drop-shadow-[0_30px_30px_rgba(0,0,0,0.9)] scale-110 md:scale-125">
          <img
            src="https://i.pinimg.com/736x/07/78/e2/0778e21205c4c247f827617246513add.jpg"
            alt="Riviera Conciergerie"
            className="object-contain brightness-75 contrast-125 grayscale-[20%] w-24 md:w-32 h-auto"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 pointer-events-none z-30" />
      </div>

      <div className="absolute top-[25%] left-0 right-0 w-full text-center z-40 pointer-events-none px-6">
        <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight drop-shadow-lg">
          Le Chemin Vers l&apos;Excellence.
        </h2>
      </div>
      <div className="absolute top-[70%] left-0 right-0 w-full text-center z-40 pointer-events-none px-6">
        <div className="inline-block px-8 py-3 rounded-full bg-background/80 backdrop-blur-md border border-primary/20 shadow-2xl">
          <p className="text-xl md:text-2xl text-foreground/90 font-light">
            Détendez-vous.{" "}
            <span className="text-primary font-semibold">Riviera Conciergerie</span>{" "}
            s&apos;occupe de la route.
          </p>
        </div>
      </div>
    </section>
  );
}
