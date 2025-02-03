import qrCodeGeneration from "@/service/qrcodeGeneration"
import * as qrcode from "qrcode"

const apiToBase64 = async() => {
    try {
        const response = await qrCodeGeneration.get()
        // console.log(response);
        
        const base64QRCode = await qrcode.toDataURL(response[0]["form-link"], {
            margin: 0,
            scale: 30,
            color: {
                light: "#003bb8",
                dark: "#ffffff"
            }
        })
        return base64QRCode
    } catch (error) {
        console.error(error);
        return "SEM QR CODE DISPONIVEL"
    }
}

export default apiToBase64
