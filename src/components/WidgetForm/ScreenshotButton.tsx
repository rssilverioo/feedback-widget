import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";
import { useState } from "react";



interface ScreeshotButtonProps {
  onClickScreenshotTook: (screenshot: string | null) => void
  screenshot: string | null
}
export function ScreenshotButton({
  onClickScreenshotTook,
  screenshot}: ScreeshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
   const canvas = await html2canvas(document.querySelector('html')!)
   const base64image = canvas.toDataURL('image/png')
   onClickScreenshotTook(base64image);
   setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button 
        type="button" 
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onClickScreenshotTook(null)} 
        style={{
          backgroundImage: `url(${screenshot})`,

          }}>
          <Trash weight="fill" />
        </button>
    )
  }
  return (
    <button
    type="button"
    onClick={handleTakeScreenshot}
    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "

  >
    {isTakingScreenshot ? <Loading /> : (<Camera className="w-6 h-6" />)}
  </button>
  )
}