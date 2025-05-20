export default function Hero() {
  return (
    <div className="w-full h-[85vh] flex flex-col items-start px-15 justify-center relative text-white">
      <video src="/hero_compressed.webm" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        Your browser does not support the video tag. Here is a <a href="/hero.mov">link to the video</a> instead.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-10"></div>
      <div className="relative z-20">
        <h1 className="text-6xl font-bold">RishiRaj Corporation</h1>
        <p className="text-2xl pt-2 font-semibold px-1">Where Controlled Explosions Drive Unlimited Potential</p>
        <p className="text-lg pt-4 px-1">RishiRaj Corporation is a trusted name in explosive mining, offering complete blasting solutions with unmatched expertise. 100% mining. No compromises.</p>
      </div>
    </div>
  );
}