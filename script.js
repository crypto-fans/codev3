document.addEventListener('DOMContentLoaded', function () {
    // Definir el contenedor del wallet
    const walletContainer = document.querySelector('.MuiTypography-root.MuiTypography-caption.MuiTypography-alignLeft.css-z5tbv0');

    // Verificar si el wallet está disponible, si no, esperar
    const observer = new MutationObserver(() => {
        const walletText = walletContainer.textContent.trim();

        // Si el texto del wallet tiene el formato esperado, crear el enlace
        if (walletText && walletText.startsWith('0x')) {
            const whatsappLink = `https://wa.me/?text=Mi%20wallet%20es%20${encodeURIComponent(walletText)}`;

            // Actualizar el enlace de WhatsApp
            const linkElement = document.querySelector('#whatsappLink');
            if (linkElement) {
                linkElement.href = whatsappLink;
                linkElement.innerText = `Enviar WhatsApp con el wallet ${walletText}`; // También actualizar el texto del enlace
            }

            // Detener el observador una vez que el wallet esté disponible
            observer.disconnect();
        }
    });

    // Configuración del MutationObserver: observar cambios en el texto del wallet
    observer.observe(walletContainer, { childList: true, subtree: true });
});
