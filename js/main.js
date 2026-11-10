//VARIABLES

const informacionUsuario = document.querySelector('#informacionUsuario'); //div donde aparecerá la info.
const buttonInfo = document.querySelector('#buttonInfo') // button que desencadenará la accion.



//simulación de API
const usuario =
{
    nombre: 'Oliver',
    email: 'oliver@gmail.com'
}





//EVENTOS

// document.addEventListener('click', (ev) => {
//     if(ev.target,matches('button') {



//     })

// })




buttonInfo.addEventListener('click', (ev) => {
    ev.preventDefault();

    recogerDatos()
        .then((usuario) => {
            const parrafoNombre = document.createElement('P');
            parrafoNombre.textContent = `Nombre: ${usuario.nombre}.`;
            const parrafoEmail = document.createElement('P');
            parrafoEmail.textContent = `Email: ${usuario.email}`;

            informacionUsuario.append(parrafoNombre, parrafoEmail);

        })
        .catch((error) => {
            const parrafoCatch = document.createElement('P');
            parrafoCatch.textContent = error;

            informacionUsuario.append(parrafoCatch);

        })

})




// FUNCIONES

//Función que recoga los datos 
const recogerDatos = () => {

    let funciona = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (funciona) {
                resolve(usuario)
            } else
                reject(`No hay datos disponibles.`);
        }, "2000");
    });
};

