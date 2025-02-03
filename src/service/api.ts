import axios from "axios";

const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndubHJ4bWRveGZjZXdmc253YXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNjYyNjQsImV4cCI6MjA1Mzc0MjI2NH0.mzQ1qp3TDnBMAni-4m1mX7VqyPBjtiM2crmDhtiXSjM"

const api = axios.create({baseURL: "https://wnlrxmdoxfcewfsnwasm.supabase.co/rest/v1", headers: {"apikey": apikey} })

export default api