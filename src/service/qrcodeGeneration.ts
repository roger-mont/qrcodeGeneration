import qrCodeType from "@/types/qrcodeType"
import api from "./api"
import inputFormType from "@/types/inputNewForm";

const qrCodeGeneration = {
    get: async() => {
        try {
            const response = await api("/qrcode-generation?select=*")
            console.log(response.data);
            
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
    const today = new Date(); // Data atual
    const todayStr = today.toISOString().split('T')[0]; // Formatar para "YYYY-MM-DD"
    console.log(objetos.filter((entry) => entry["start-date"] >= todayStr && todayStr <= entry["expiration-date"]));
    
    return objetos.filter(entry => {
        const startDate = entry['start-date'];
        const expirationDate = entry['expiration-date'];

        // Verifica se a data de hoje está entre start-date e expiration-date
        return todayStr >= startDate && todayStr <= expirationDate;
    });
}

export default qrCodeGeneration