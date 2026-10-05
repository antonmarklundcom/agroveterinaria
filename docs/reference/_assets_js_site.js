const SITE = {
  whatsappNumber: "595981000000",
  visiblePhone: "+595 981 000 000",
  defaultMessage: "Hola, vi su pagina web y quiero consultar por productos agroveterinarios"
};

function waUrl(message = SITE.defaultMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-wa]").forEach((link) => {
  const message = link.getAttribute("data-wa-message") || SITE.defaultMessage;
  link.href = waUrl(message);
});

document.querySelectorAll("[data-phone]").forEach((node) => {
  node.textContent = SITE.visiblePhone;
});

document.querySelectorAll("[data-tel]").forEach((link) => {
  link.href = `tel:${SITE.whatsappNumber}`;
});

const consent = document.querySelector(".cookie");
if (consent && localStorage.getItem("agro_cookie_ok") === "1") {
  consent.hidden = true;
}
document.querySelector("[data-cookie-ok]")?.addEventListener("click", () => {
  localStorage.setItem("agro_cookie_ok", "1");
  if (consent) consent.hidden = true;
});
