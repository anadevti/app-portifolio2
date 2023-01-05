import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div>
        <div className="absolute text-black">
          <div className="flex-col">
            <div className="flex flex-row">
              <p className="font-bold">Logo</p>
              <p>NavBarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>
            </div>
            <p>textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</p>
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
