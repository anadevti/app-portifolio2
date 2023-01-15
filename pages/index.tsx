import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div>
        <div className="absolute text-black z-0">
          <div className="flex-col">
            <p>textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Spline
            scene="https://prod.spline.design/k99HVzraHEeIFQii/scene.splinecode"
          />
        </div>
      </div>
    </div>
  )
}

