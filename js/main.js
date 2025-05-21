function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');

    elements.forEach(async el => {
        const file = el.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error('Error al cargar ' + file);
            const html = await response.text();
            el.innerHTML = html;
        } catch (error) {
            el.innerHTML = `<p style="color:red;">No se pudo cargar ${file}</p>`;
            console.error(error);
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
