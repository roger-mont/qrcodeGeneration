"use client"

import apiToBase64 from "@/utils/qrcodeGenerator";
import Image from "next/image";
import bannerKnow from "@/assets/banner_know.png"
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [urlState, setUrlState] = useState("")
  const {toast} = useToast()

  const startHandler = async () => {
    const url = await apiToBase64()
    if (url === "SEM QR CODE DISPONIVEL") {
      setUrlState("")
      toast({
        title: "Error",
        description: url,
        variant: "destructive"
      })
    } else {
      setUrlState(url)
    }
  }

  useEffect(() => {
    startHandler()
  }, [])


  return (
    <div className="flex flex-col w-screen h-4/5 justify-center items-center">
      <header className="flex flex-row w-screen h-40 items-center justify-center">
        <h1 className="flex text-nowrap text-5xl">Ocean Manaus</h1>
        <svg className="h-28" viewBox="0 0 169 172" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_5772_8558)"><path d="M78.457 0.0287494L78.4526 11.286L25.6647 42.9356L25.6572 61.9979L20.6661 58.8439L20.6757 34.8284L78.457 0.0287494Z" fill="#004596"></path><path d="M163.023 40.5887L162.995 110.834L147.452 101.372L147.471 53.9412L141.621 57.5412L141.627 43.4321L105.121 21.3534L105.127 5.29297L163.023 40.5887Z" fill="#004596"></path><path d="M33.935 47.894L25.6587 56.5963L25.6641 42.9375L33.935 47.894Z" fill="#E86B00"></path><path d="M50.3342 57.9569L38.9185 69.9601L25.6565 61.9998L25.6587 56.5963L33.935 47.8939L50.3342 57.9569Z" fill="#DB4893"></path><path d="M66.8765 68.0188L55.4609 80.022L38.9191 69.9589L50.3347 57.9557L66.8765 68.0188Z" fill="#12A8DF"></path><path d="M61.8705 100.739L61.8771 84.0785L58.7399 82.126L55.4601 80.0234L66.8757 68.0201L83.4175 78.0832L61.8705 100.739Z" fill="#004596"></path><path d="M83.6915 105.25L61.8591 128.057L61.8699 100.739L83.4169 78.0828L83.7022 78.233L83.6915 105.25Z" fill="#E86B00"></path><path d="M83.8242 132.568L74.2637 142.471L61.9999 134.961L62.0027 127.907L83.6924 105.251L83.8242 132.568Z" fill="#DB4893"></path><path d="M141.627 44.3339L141.622 57.5425L112.232 75.0922L141.627 44.3339Z" fill="#DB4893"></path><path d="M83.5327 148.477L74.121 142.769L83.539 132.717L83.5327 148.477Z" fill="#4CA4D9"></path><path d="M61.8767 84.0767L61.8488 154.322L3.95263 118.876L3.98047 48.6309L20.6648 58.8441L25.6559 61.9981L38.9179 69.9585L55.4596 80.0216L58.7394 82.1242L61.8767 84.0767Z" fill="#00A7E2"></path><path d="M141.627 43.4331L141.627 44.3337L112.231 75.0919L112.231 75.242L108.379 77.492L89.5469 88.7418L89.5429 98.9484L83.6923 105.25L83.703 78.2327L105.104 65.3328L141.627 43.4331Z" fill="#7B4A2A"></path><path d="M89.5325 126.415L83.682 132.567L83.6928 105.249L89.5434 98.9476L89.5325 126.415Z" fill="#774159"></path><path d="M141.627 44.3339L141.622 57.5425L112.232 75.0922L141.627 44.3339Z" fill="#774159"></path><path d="M89.5317 126.416L89.5243 145.028L83.6748 148.628L83.6812 132.568L89.5317 126.416Z" fill="#405C6C"></path><path d="M147.471 53.9429L147.443 124.338L89.5189 159.138L89.5318 126.417L89.5427 98.949L89.5467 88.7424L108.379 77.4926L112.231 75.2427L112.231 75.0926L141.621 57.5429L147.471 53.9429Z" fill="#00A7E2"></path><path d="M78.4519 11.1367L83.588 8.1368L78.4519 11.1367Z" fill="white"></path><path d="M33.9342 47.8926L55.9093 24.7863L25.6632 42.9361L78.4511 11.2865L55.9093 24.7863L33.9342 47.8926Z" fill="#6775B2"></path><path d="M33.9356 47.8936L25.6647 42.9371L55.9107 24.7874L33.9356 47.8936Z" fill="#EF9659"></path><path d="M50.3346 57.9559L33.9354 47.8929L55.9105 24.7867L78.4524 11.1368L83.5885 8.13686L92.5724 13.694L50.3346 57.9559Z" fill="#E68AB8"></path><path d="M66.8758 68.0194L50.334 57.9564L92.5718 13.6945L109.114 23.7575L66.8758 68.0194Z" fill="#7FC2E9"></path><path d="M83.4168 78.0819L66.875 68.0189L109.113 23.757L125.512 33.6699L83.4168 78.0819Z" fill="#6775B2"></path><path d="M83.7032 78.2332L83.4179 78.083L125.513 33.671L141.627 43.5838L83.7032 78.2332Z" fill="#EF9659"></path></g><defs><filter id="filter0_d_5772_8558" x="0.9375" y="0" width="167.102" height="171.166" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="1" dy="8"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5772_8558"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5772_8558" result="shape"></feBlend></filter></defs></svg>
      </header>
      <div className="w-full flex justify-center flex-col items-center bg-image-ocean h-1/2" style={{
        backgroundImage: `url(${bannerKnow.src})`,
        height: "70vh"
      }}>
        <h1 className="text-8xl text-white mb-4">
          Avalie a aula!
        </h1>
        {urlState !== "" ? (
          <Image src={urlState} alt="QRCode de Avaliação" width={500} height={400} />
        ) : (<></>)}
      </div>
    </div>
  );
}
