const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowPrincipal = addKeyword(['Hola','ola','hOLA','hola'])
    .addAnswer('📊 Hola bienvenido a *Ciencia de datos MX*',{delay:1000,})
    .addAnswer(
        [
            'Este es un robot diseñado por Ciencia de datos México',
            'Por favor escribe: ',
            '',
            '👉 *Duda:* Si deseas hablar con alguno de nuestros operadores sobre Ciencia de datos MX.',
            '👉 *Curso:*  Si te gustaría recibir información acerca de los cursos vigentes.',
            '👉 *Asesoria:* Si deseas cotizar una asesoria en algún lenguaje de programación.',
                ' '])
    .addAnswer([
        'Te recordamos que puedes también seguirnos a traves de nuestra pagina web en: *https://luisalbertort.github.io/CienciadedatosMexico/*📈',
        ' ',
        'Y Facebook en: *https://www.facebook.com/cienciadedatosmxsadecv*🗂️',
        ' ',
        'Contacto: *(+52) 56-589387-06*'
        ])



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
