export const WHATSAPP_NUMBER = '595992279599';
export const SITE_ORIGIN = 'https://agroveterinaria.com.py';

// Use the public canonical address; never include preview hosts or tracking queries.
export function whatsappUrl({pagePath, pageTitle, interest = pageTitle, details = ''}) {
  const address = new URL(pagePath, SITE_ORIGIN);
  if (address.origin !== SITE_ORIGIN) throw new Error('Invalid source page');
  address.search = '';
  address.hash = '';
  const message = [
    'Hola, llego desde agroveterinaria.com.py.',
    `Página: ${pageTitle}`,
    `Enlace: ${address.href}`,
    `Me interesa: ${interest}.`,
    details.trim(),
    'Quisiera consultar presentación, disponibilidad y precio.'
  ].filter(Boolean).join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
