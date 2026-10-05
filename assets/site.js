import {whatsappUrl} from './whatsapp.js';
document.documentElement.classList.add('js-enabled');
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);toggle.textContent=open?'Cerrar':'Menú';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){toggle.click();toggle.focus();}});
const filters=[...document.querySelectorAll('[data-filter]')];
function filter(value){filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));document.querySelectorAll('[data-audience]').forEach(card=>{card.hidden=value!=='todos'&&!card.dataset.audience.split(' ').includes(value);});}
filters.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
const params=new URLSearchParams(location.search);if(['mascotas','produccion'].includes(params.get('necesidad')))filter(params.get('necesidad'));
const form=document.querySelector('#list-form');
if(form){
 const category=form.elements.categoria,species=form.elements.especie,product=form.elements.producto,quantity=form.elements.cantidad;
 if([...category.options].some(o=>o.value===params.get('categoria')))category.value=params.get('categoria');
 const rows=[],list=document.querySelector('#items'),summary=document.querySelector('#summary'),status=document.querySelector('#list-status');
 const defaultSpecies=()=>{if(category.value==='vacunas')species.value='Producción · bovinos';else if(category.value==='insumos')species.value='Otro animal / insumo de campo';};
 defaultSpecies();category.addEventListener('change',defaultSpecies);
 const defaults={categoria:category.value,especie:species.value};
 const waLinks=[...document.querySelectorAll('[data-whatsapp]')];
 function updateWhatsApp(){
  const details=rows.length?summary.value:`Animal o destino: ${species.value}${product.value.trim()?'\nProducto: '+product.value.trim():''}${quantity.value.trim()?'\nCantidad/presentación: '+quantity.value.trim():''}`;
  for(const link of waLinks){link.href=whatsappUrl({pagePath:'/contacto/',pageTitle:'Prepará tu lista de consulta',interest:category.selectedOptions[0].textContent,details});}
  document.querySelector('#whatsapp-list')?.toggleAttribute('hidden',!rows.length);
 }
 form.addEventListener('input',updateWhatsApp);form.addEventListener('change',updateWhatsApp);
 function update(){list.replaceChildren();rows.forEach((row,i)=>{const li=document.createElement('li');li.append(document.createTextNode(`${row.category} · ${row.species}: ${row.product}${row.quantity?' — '+row.quantity:''}`));const remove=document.createElement('button');remove.type='button';remove.textContent='Quitar de la lista';remove.setAttribute('aria-label',`Quitar ${row.product}`);remove.addEventListener('click',()=>{rows.splice(i,1);update();status.textContent='Producto quitado de la lista.';document.querySelector('#add-item').focus();});li.append(remove);list.append(li);});summary.value=rows.length?'Lista de productos para consultar\n\n'+rows.map((r,i)=>`${i+1}. ${r.category} | ${r.species}\n${r.product}${r.quantity?' — Cantidad/presentación: '+r.quantity:''}`).join('\n\n')+'\n\nA confirmar con el proveedor: presentación, disponibilidad, precio y condiciones.\nEsta lista no es un pedido ni una cotización.':'';document.querySelector('#copy-list').disabled=!rows.length;document.querySelector('#download-list').disabled=!rows.length;document.querySelector('#clear-list').disabled=!rows.length;updateWhatsApp();}
 form.addEventListener('submit',e=>{e.preventDefault();product.value=product.value.trim();quantity.value=quantity.value.trim();if(!form.reportValidity())return;if(rows.length>=20){status.textContent='La lista admite hasta 20 productos. Quitá uno para agregar otro.';return;}rows.push({category:category.selectedOptions[0].textContent,species:species.value,product:product.value,quantity:quantity.value});update();status.textContent='Producto agregado. Todavía no se envió ninguna consulta.';product.value='';quantity.value='';product.focus();});
 document.querySelector('#copy-list').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(summary.value);status.textContent='Lista copiada. Podés compartirla con un proveedor de tu elección.';}catch{summary.focus();summary.select();status.textContent='Seleccionamos el texto. Usá la opción de copiar de tu navegador.';}});
 document.querySelector('#download-list').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([summary.value],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='lista-agroveterinaria.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Lista descargada en tu dispositivo. No se envió a nadie.';});
 document.querySelector('#clear-list').addEventListener('click',()=>{rows.length=0;form.reset();category.value=defaults.categoria;species.value=defaults.especie;update();status.textContent='Lista vaciada.';product.focus();});update();
}
