// PRIMERA ENTREGA JS RV
// Simulador interactivo: Sistema de consulta de materiales de oficina, herramientas digitales y calculadora

// Array materiales de oficina
const materialesOficina = [
    {
        id: 1,
        nombre: "Papel",
        tipo: "Carta",
        gramaje: "75 g/m²",
        precio: 6000
    },
    {
        id: 2,
        nombre: "Papel",
        tipo: "Oficio",
        gramaje: "90 g/m²",
        precio: 7500
    },
    {
        id: 3,
        nombre: "Lápiz",
        tipo: "HB",
        marca: "Faber-Castell",
        precio: 400
    },
    {
        id: 4,
        nombre: "Lápiz",
        tipo: "2B",
        marca: "Staedtler",
        precio: 500
    },
    {
        id: 5,
        nombre: "Post-it",
        tamaño: "3x3 pulgadas",
        colores: "Neón variados",
        precio: 350
    },
    {
        id: 6,
        nombre: "Post-it",
        tamaño: "2x2 pulgadas",
        colores: "Pastel",
        precio: 250
    }
]

// Array herramientas digitales
const herramientasDigitales = [
    {
        id: 1,
        nombre: "Evernote",
        tipo: "Herramienta de notas",
        suscripcion: "Freemium",
        plataformas: "Windows, Mac, iOS, Android"
    },
    {
        id: 2,
        nombre: "OneNote",
        tipo: "Herramienta de notas",
        suscripcion: "Gratuito con cuenta Microsoft",
        plataformas: "Windows, Mac, iOS, Android"
    },
    {
        id: 3,
        nombre: "Trello",
        tipo: "Gestión de tareas",
        suscripcion: "Freemium",
        plataformas: "Web, iOS, Android"
    },
    {
        id: 4,
        nombre: "Asana",
        tipo: "Gestión de tareas",
        suscripcion: "Freemium",
        plataformas: "Web, iOS, Android"
    },
    {
        id: 5,
        nombre: "Google Calendar",
        tipo: "Calendario",
        suscripcion: "Gratuito con cuenta Google",
        plataformas: "Web, iOS, Android"
    },
    {
        id: 6,
        nombre: "Microsoft Outlook Calendar",
        tipo: "Calendario",
        suscripcion: "Incluido en Microsoft 365",
        plataformas: "Windows, Mac, iOS, Android"
    }
]



// Función principal que inicia el programa
function iniciarPrograma() {
    alert("Bienvenido al Sistema de Consulta de Materiales de Oficina, Herramientas Digitales y Calculadora")
    
    let continuar = true
    
    while (continuar) {
        let menu = parseInt(prompt(
            "¿Qué acción desea realizar?\n" +
            "1. Consultar materiales de oficina\n" +
            "2. Consultar herramientas digitales\n" +
            "3. Usar calculadora\n" +
            "4. Salir"
        ))
        
        switch (menu) {
            case 1:
                consultarMateriales()
                break
            case 2:
                consultarHerramientas()
                break
            case 3:
                usarCalculadora()
                break
            case 4:
                alert("Gracias por utilizar nuestro sistema. ¡Hasta pronto!")
                continuar = false
                break
            default:
                alert("Opción inválida. Por favor intente nuevamente.")
                break
        }
    }
}

// Función para consultar materiales de oficina
function consultarMateriales() {
    let opcion = parseInt(prompt(
        "Seleccione el tipo de material:\n" +
        "1. Papel\n" +
        "2. Lápiz\n" +
        "3. Post-it"
    ))
    
    let tipoMaterial = ""
    
    switch(opcion) {
        case 1:
            tipoMaterial = "Papel"
            break
        case 2:
            tipoMaterial = "Lápiz"
            break
        case 3:
            tipoMaterial = "Post-it"
            break
        default:
            alert("Opción inválida")
            return
    }
    
    console.log("Búsqueda de material: " + tipoMaterial)
    
    let mensaje = "Resultados para " + tipoMaterial + ":\n\n"
    let encontrado = false
    
    for (let i = 0; i < materialesOficina.length; i++) {
        if (materialesOficina[i].nombre === tipoMaterial) {
            mensaje += "ID: " + materialesOficina[i].id + " - " + materialesOficina[i].nombre + "\n"
                        
            if (tipoMaterial === "Papel") {
                mensaje += "Tipo: " + materialesOficina[i].tipo + "\n"
                mensaje += "Gramaje: " + materialesOficina[i].gramaje + "\n"
            } else if (tipoMaterial === "Lápiz") {
                mensaje += "Tipo: " + materialesOficina[i].tipo + "\n"
                mensaje += "Marca: " + materialesOficina[i].marca + "\n"
            } else if (tipoMaterial === "Post-it") {
                mensaje += "Tamaño: " + materialesOficina[i].tamaño + "\n"
                mensaje += "Colores: " + materialesOficina[i].colores + "\n"
            }
            
            mensaje += "Precio: $" + materialesOficina[i].precio + "\n\n"
            encontrado = true
        }
    }
    
    if (encontrado) {
        console.log("Se encontraron materiales")
        alert(mensaje)
    } else {
        console.log("No se encontraron materiales")
        alert("No se encontraron materiales de tipo: " + tipoMaterial)
    }
}

// Función para consultar herramientas digitales
function consultarHerramientas() {
    let opcion = parseInt(prompt(
        "Seleccione el tipo de herramienta:\n" +
        "1. Herramientas de notas\n" +
        "2. Gestión de tareas\n" +
        "3. Calendario"
    ))
    
    let tipoFiltro = ""
    
    switch(opcion) {
        case 1:
            tipoFiltro = "Herramienta de notas"
            break
        case 2:
            tipoFiltro = "Gestión de tareas"
            break
        case 3:
            tipoFiltro = "Calendario"
            break
        default:
            alert("Opción inválida")
            return
    }
    
    console.log("Búsqueda de herramienta: " + tipoFiltro)
    
    let mensaje = "Resultados para " + tipoFiltro + ":\n\n"
    let encontrado = false
    
    for (let i = 0; i < herramientasDigitales.length; i++) {
        if (herramientasDigitales[i].tipo === tipoFiltro) {
            mensaje += "ID: " + herramientasDigitales[i].id + " - " + herramientasDigitales[i].nombre + "\n"
            mensaje += "Tipo: " + herramientasDigitales[i].tipo + "\n"
            mensaje += "Suscripción: " + herramientasDigitales[i].suscripcion + "\n"
            mensaje += "Plataformas: " + herramientasDigitales[i].plataformas + "\n\n"
            encontrado = true
        }
    }
    
    if (encontrado) {
        console.log("Se encontraron herramientas")
        alert(mensaje)
    } else {
        console.log("No se encontraron herramientas")
        alert("No se encontraron herramientas del tipo seleccionado")
    }
}

// Función para usar la calculadora
function usarCalculadora() {
    console.log("Iniciando calculadora")
    
    let menuCalculadora = parseInt(prompt("Ingrese: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n 5. Salir"))

    while (menuCalculadora !== 5) {
        switch(menuCalculadora) {
            case 1:
                sumar()
                break
            case 2:
                restar()
                break
            case 3:
                multiplicar()
                break
            case 4:
                dividir()
                break
            default:
                alert("Opción incorrecta")
                break
        }
        menuCalculadora = parseInt(prompt("Ingrese: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n 5. Salir"))
    }
    
    console.log("Saliendo de la calculadora")
}

// Funciones de la calculadora
function sumar() {
    let numeroA = parseInt(prompt("Ingrese el primer número"))
    let numeroB = parseInt(prompt("Ingrese el segundo número"))
    let resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " + resultado)
}

function restar() {
    let numeroA = parseInt(prompt("Ingrese el primer número"))
    let numeroB = parseInt(prompt("Ingrese el segundo número"))
    let resultado = numeroA - numeroB
    alert(numeroA + " - " + numeroB + " = " + resultado)
}

function multiplicar() {
    let numeroA = parseInt(prompt("Ingrese el primer número"))
    let numeroB = parseInt(prompt("Ingrese el segundo número"))
    let resultado = numeroA * numeroB
    alert(numeroA + " x " + numeroB + " = " + resultado)
}

function dividir() {
    let numeroA = parseInt(prompt("Ingrese el primer número"))
    let numeroB = parseInt(prompt("Ingrese el segundo número"))
    let resultado = numeroA / numeroB
    alert(numeroA + " / " + numeroB + " = " + resultado)
}

// Iniciar el programa
iniciarPrograma()