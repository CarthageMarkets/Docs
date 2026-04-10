import Link from "next/link";
import Image from "next/image";
import { GLSLHills } from "@/components/ui/glsl-hills";

const founders = [
  {
    name: "Rania",
    role: "Co-founder & CEO",
    education: "CS @ UPenn",
    image: "/images/rania.jpg",
    linkedin: "https://www.linkedin.com/in/rania-upenn/",
  },
  {
    name: "Dharma",
    role: "Co-founder & CTO",
    education: "CS @ RIT",
    image: "/images/dharma.jpg",
    linkedin: "https://www.linkedin.com/in/dharmatejasamudrala/",
  },
];

export default function Founders() {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden bg-black">
      <GLSLHills />
      <div
        className="z-10 absolute inset-0 flex flex-col items-center justify-center px-6 py-20"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl px-8 py-14 space-y-12 text-center">
          <Link
            href="/"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            &larr; Back
          </Link>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Meet the Founders
          </h1>

          <div className="grid gap-10 sm:grid-cols-2">
            {founders.map((f) => (
              <div key={f.name} className="space-y-4">
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-white/10 ring-2 ring-white/10">
                  <Image
                    src={f.image}
                    alt={f.name}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-white">{f.name}</h2>
                  <p className="text-sm font-medium text-white/60">{f.role}</p>
                  <p className="text-sm text-white/40">{f.education}</p>
                </div>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  LinkedIn &rarr;
                </a>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="mailto:founder@carthage.markets"
              className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors"
            >
              founder@carthage.markets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
