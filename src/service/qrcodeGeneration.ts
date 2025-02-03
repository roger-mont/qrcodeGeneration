import qrCodeType from "@/types/qrcodeType"
import api from "./api"
import inputFormType from "@/types/inputNewForm";

const qrCodeGeneration = {
    get: async() => {
        try {
            const response = await api("/qrcode-generation?select=*")
            console.log(response);
            
            return findActualQRCode(response.data)
        } catch (error) {
            throw error
        }
    },

    post: async(props: inputFormType) => {
        const response = await api.post("/qrcode-generation", props)
        console.log(response);
        return response
    }
}

const findActualQRCode = (objetos: qrCodeType[]) => {
    const dataAtual = new Date();

    return objetos.filter(objeto => {
        const startDate = new Date(objeto['start-date']);
        const expirationDate = new Date(objeto['expiration-date']);
        
        console.log("startDate",startDate);
        console.log("expirationDate",expirationDate);
        

        return dataAtual >= startDate && dataAtual <= expirationDate;
    });
}

export default qrCodeGeneration