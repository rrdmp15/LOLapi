let plantilla;

const frankfurter = async()=>{
    try {
        const respuesta = await fetch('https://api.frankfurter.app/latest?from=USD');
        const resultado = await respuesta.json();

        console.log(resultado);

        

        plantilla = `
        <option value="">${resultado.rates}</option>
        `

        postMessage({message: "mensaje", data: data})
    } catch (error) {
        console.log(error);
    }
}

frankfurter();

