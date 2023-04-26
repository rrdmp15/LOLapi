export default{
    all(){
        let ws = new Worker('../storage/wsModule.js')
        const moneda = document.querySelector("#moneda")

        ws.onmessage = (e)=>{
            let {message, data} = e.data;

            if(message = "mensaje"){
                moneda.innerHTML = data;
            }
        }

    }
}