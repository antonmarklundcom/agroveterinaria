# STEP 0 — RECON · agroveterinaria.com.py

**Modo:** LÄGE 3 (regional vertikal, EMD-domän, partner-operatör)
**Status:** väntar på svar på de 5 blockerande frågorna innan BUILD-SPEC skrivs.
**Datum:** 2026-08-05

---

## a) 30 sökordskandidater — Google Keyword Planner

Kortast först. Klistra in rakt av.

```
agroveterinaria
veterinaria
balanceado
antiparasitario
ivermectina
garrapaticida
agroquímicos
herbicida
sal mineralizada
alambre púa
semillas pasturas
productos veterinarios
alimento balanceado
insumos agropecuarios
vacunas ganado
desparasitante bovinos
antibiótico veterinario
agroveterinaria online
balanceado para perros
balanceado para gallinas
agroveterinaria en Asunción
agroveterinaria cerca de mí
productos veterinarios Paraguay
insumos veterinarios para ganado
vacuna aftosa Paraguay precio
antiparasitario para bovinos precio
alimento balanceado para bovinos precio
venta de productos veterinarios Asunción
distribuidora de productos veterinarios Paraguay
envío de productos veterinarios al interior
```

Vad exporten ska avgöra:

- Vinner `agroveterinaria` eller `productos veterinarios` huvudvolymen? Den
  termen blir H1 på `/`. Domänen är EMD på `agroveterinaria` men det avgör
  inte H1 om volymen ligger på den andra.
- Delar sig `balanceado` i två avsikter (nyttodjur vs mascotas)? Om ja är det
  två separata tjänstesidor, aldrig en.
- Den informationella svansen (`cada cuánto desparasitar`, `qué es`,
  `dosis`, `calendario sanitario`) → `/guias/` × 2 i CORE 15.

---

## b) Blockerande frågor (5)

1. **SENACSA-habilitación:** finns den, och finns `asesor técnico` med
   Registro Profesional? Numret får aldrig hittas på — men habilitación är
   den starkaste differentialen i vertikalen. Finns den inte: hela
   förtroendesektionen byggs om.
2. **RUC** — visas i franja de confianza + footer, eller doldes raden helt?
3. **WhatsApp:** stage-1-numret `+595 995 628862`, eller eget nummer?
4. **Priser:** Gs.-intervall publiceras, eller `cotización sin costo` +
   listbyggare? (påverkar om P10 blir prisräknare eller orderlista)
5. **Geografi:** Gran Asunción-först enligt §10.2, eller interiör-först
   (Chaco, Itapúa, Alto Paraná, San Pedro, Canindeyú)? Se noten nedan —
   detta ändrar zonsidorna, schemat och heron.

---

## c) Designspår — PF · AGRO FIELD (nytt spår)

Motivering: vertikalen är halvt fältarbete (boskap, damm, sol) och halvt
reglerad farmaci (SENACSA, kylkedja, receptbelagt). Inget befintligt spår
täcker det. INDUSTRIAL är upptaget av pozo/grúas, EDITORIAL av dentista,
WARM CRAFT läser hospitality, CLINICAL läser SaaS. Anti-footprint enligt
§10.7 kräver eget spår + egen palett.

Dark-dominant som INDUSTRIAL i *material*, men noll överlapp i palett och
typsnitt.

| Token | Värde |
|---|---|
| `--ink-dark` (mörka sektioner) | `#141A10` |
| `--paper` (ljusa sektioner) | `#EFEDE3` |
| `--ink` (text på paper) | `#1A1F14` |
| `--ink-muted` | `#5A5F4E` |
| `--accent` (ENDA accent, CTA) | `#D8A521` |
| `--accent-ink` (text på accent) | `#141A10` |
| `--hair` | `color-mix(in srgb, var(--ink) 10%, transparent)` |
| Display | **Archivo**, wght 500, tracking `-0.03em`, lh `0.95–1.05` |
| Text | **Public Sans**, 17px/1.65, measure ≤ 65ch |
| Radier | `--r-sm 6px` · `--r-md 14px` · `--r-lg 28px` |
| Skuggor | tvålagers `--shadow-1` / `--shadow-2` ur `tokens.css` |
| Grain | på ALLA mörka sektioner (data-URI ur `tokens.css`) |

Kontroll mot befintliga spår: EDITORIAL `#C2603A`, INDUSTRIAL `#E8562A`,
CLINICAL `#1F6FEB`, WARM CRAFT `#B4762C`. Majsgul `#D8A521` kolliderar med
ingen. `#25D366` används ENDAST i WhatsApp-glyfen — aldrig som sektionsfyll,
aldrig som sekundärknapp. Extra viktigt här: agro-paletter dras naturligt
mot grönt, och grönt är reserverat.

---

## d) Sektion → layoutmönster (startsidan, komplett)

| # | Sektion | Mönster | Not |
|---|---|---|---|
| 01 | Sticky header | — | namn + WhatsApp + tel som text |
| 02 | Hero | **P1** asymmetrisk split 7/5 | visual över text < 1024px |
| 03 | Franja de confianza | **P8** full-bleed ribbon | RUC · SENACSA · asesor técnico · envíos · factura legal |
| 04 | Rubros (bovinos/equinos/porcinos/aves/mascotas/agro) | **P3** staggered-weight grid | bovinos = span-2 `card--ink` |
| 05 | Cadena de frío / uso responsable | **P7** sticky-side scroll | bär den regulatoriska trovärdigheten |
| 06 | Armá tu pedido (listbyggare → WhatsApp) | **P10** data panel | högst konverteringsvärde på sidan |
| 07 | Cómo comprás (Pedí → Cotizamos → Pagás → Enviamos) | **P5** numbered process rail | vertikal < 768px |
| 08 | Banda campo | **P6** bleed-image overlap | **sidans obligatoriska gränsöverlapp** |
| 09 | Cobertura y envíos | **P4** editorial two-column | löptext, inga grå chip-rader |
| 10 | Statement CTA | **P9** oversized statement | sidans enda — aldrig två |
| 11 | Preguntas frecuentes | **P4** | + FAQPage-schema |
| 12 | Contacto | **P1** speglad 5/7 | WhatsApp-block + 3-fältsformulär |
| 13 | Footer | — | NAP, RUC, horarios, integritetslänk |

Villkorskontroll:

- Inga två likadana i rad ✅ (P1 på 02/12, P4 på 09/11 — aldrig intill varandra)
- ≥1 full-bleed ✅ (03, 08)
- ≥1 gränsöverlapp ✅ (08, P6-panelen `translateY(40%)`)
- ≥1 oversized statement ✅ (10)
- ≥3 kortvarianter ✅ — `card--ink` (04 bovinos), `card--hair` (04 övriga),
  `card--raised` (06, 08), `card--flat` (11). Ingen variant > 4×.
- Containerbrott ≥2 ✅ (03, 08)

---

## e) Bildprompter — fristående, klistras i Higgsfield-UI

Ingen `<<<element_id>>>`-syntax. Varje prompt bär hela art directionen själv.

**1 — `hero-bleed` (21:9)**
> Wide cinematic photograph of a Paraguayan cattle corral at golden hour, Brahman-cross cattle in a wooden manga, a worker in a wide-brim hat and long sleeves seen from behind at mid-distance, low sun raking through fine dust. Colour palette limited to deep olive-black #141A10, bone #EFEDE3 and maize gold #D8A521; warm low-angle sunlight, long shadows. Shot on 35mm at f/2.8, shallow-to-medium depth of field, slight anamorphic flare, fine natural grain. Mood: competent, unglamorous, early morning work. Negative: no logos, no text, no readable brand names, no faces toward camera, no distorted hands, no extra limbs, no plastic skin, no HDR halos, no oversaturation, no green accent colour, no US or European landscape cues.

**2 — `section-break` (21:9)**
> Wide photograph of a red-dirt rural road in Paraguay at midday, a white pickup with covered cargo bed driving away from camera, flat pasture and scattered palm trees on both sides, heat shimmer on the horizon. Colour palette limited to deep olive-black #141A10, bone #EFEDE3 and maize gold #D8A521; hard overhead sunlight, high contrast. Shot on 50mm at f/4, deep depth of field, fine natural grain. Mood: distance covered, delivery in progress. Negative: no logos, no text, no readable brand names, no faces, no distorted vehicles, no plastic skin, no HDR halos, no oversaturation, no green accent colour, no US or European landscape cues.

**3 — `card-motif` bovinos (4:3)**
> Photograph of gloved hands drawing a veterinary injectable from a labelled amber vial over a stainless steel tray, clean rural clinic bench, soft window light from the left. Colour palette limited to deep olive-black #141A10, bone #EFEDE3 and maize gold #D8A521; soft directional daylight. Shot on 85mm macro at f/2.8, shallow depth of field, fine natural grain. Mood: careful, clinical, professional. Negative: no logos, no text, no readable brand names, no legible label wording, no faces, no distorted hands, no extra fingers, no plastic skin, no HDR halos, no oversaturation, no green accent colour.

**4 — `card-motif` balanceados (4:3)**
> Photograph of open woven feed sacks filled with pelleted animal feed and whole maize, stacked in a shaded warehouse, one sack folded open at the top, dust motes in a shaft of light. Colour palette limited to deep olive-black #141A10, bone #EFEDE3 and maize gold #D8A521; single warm shaft of side light against deep shadow. Shot on 50mm at f/2.8, medium depth of field, fine natural grain. Mood: stock on hand, abundance, storage. Negative: no logos, no text, no readable brand names, no printed sack graphics, no faces, no plastic skin, no HDR halos, no oversaturation, no green accent colour.

**5 — `card-motif` mascotas (4:3)**
> Photograph of a short-haired mixed-breed dog sitting calmly on a bone-coloured concrete floor beside a metal feed bowl, seen at the animal's eye level, plain warm wall behind. Colour palette limited to deep olive-black #141A10, bone #EFEDE3 and maize gold #D8A521; soft diffused daylight from one side. Shot on 50mm at f/2, shallow depth of field, fine natural grain. Mood: healthy, ordinary household animal, calm. Negative: no logos, no text, no readable brand names, no human faces, no distorted anatomy, no extra legs, no cartoon styling, no plastic fur, no HDR halos, no oversaturation, no green accent colour.

**6 — `card-motif` agro insumos (4:3)**
> Photograph of a coil of barbed wire, a bag of pasture seed and fence staples arranged on rough timber, top-down flat lay, hard afternoon light. Colour palette limited to deep olive-black #141A10, bone #EFEDE3 and maize gold #D8A521; hard raking sunlight with defined shadows. Shot on 50mm at f/5.6, deep depth of field, fine natural grain. Mood: practical supply, fieldwork ready. Negative: no logos, no text, no readable brand names, no printed packaging graphics, no hands, no faces, no plastic sheen, no HDR halos, no oversaturation, no green accent colour.

**Förbjudet i denna vertikal:** genererade ansikten som testimonials,
genererade "före/efter"-behandlingsbilder, genererade produktetiketter som
kan läsas som ett riktigt varumärke, genererad `proof-photo` av något slag.
`proof-photo`-sloten fylls med riktigt foto eller lämnas markerad.

---

## f) Bildmanifest

| Slot | Filnamn | Alt-text (es-PY) |
|---|---|---|
| `hero-bleed` | `assets/img/agroveterinaria-hero-corral.webp` | Ganado bovino en la manga de un corral al amanecer en el campo paraguayo |
| `section-break` | `assets/img/envios-interior-camino.webp` | Camioneta de reparto en un camino rural de tierra colorada rumbo al interior |
| `card-motif` bovinos | `assets/img/productos-veterinarios-bovinos.webp` | Preparación de un inyectable veterinario para bovinos sobre bandeja de acero |
| `card-motif` balanceados | `assets/img/alimento-balanceado-bolsas.webp` | Bolsas abiertas de alimento balanceado y maíz en depósito |
| `card-motif` mascotas | `assets/img/balanceado-mascotas-perro.webp` | Perro sentado junto a su plato de alimento balanceado |
| `card-motif` agro | `assets/img/insumos-agropecuarios-alambre.webp` | Rollo de alambre de púa, semilla de pastura y grampas sobre madera |
| `proof-photo` | — | **INGEN AI-BILD.** Riktigt foto eller sloten markeras som tom. |

---

## Noteringar som påverkar arkitekturen

**1 · Stavning.** Ordet är `agroveterinaria` (agro-), inte `argo-`.
Repot heter rätt. Domänen som köps måste vara
`agroveterinaria.com.py`.

**2 · Geografi avviker från §10.2.** Skillens standard-LÄGE 3 antar Gran
Asunción som kärna och interiören som specialfall. Efterfrågan i denna
vertikal ligger tvärtom: boskapen och odlingen finns i Chaco, San Pedro,
Itapúa, Alto Paraná och Canindeyú, medan Asunción-volymen till stor del är
`balanceado para perros` — en annan köpare, en annan produkt, en annan
prisnivå. Rekommendation: bygg zonsidorna interiör-först och behandla
Asunción/Gran Asunción som mascotas-spåret. Detta är fråga 5 ovan; jag
bygger inte zonarkitekturen förrän den är besvarad.

**3 · Vertikalen är detaljhandel, inte tjänsteförsäljning.** Pozo/grúas
konverterar på "kom hit och gör jobbet". Denna konverterar på "har ni det
på lager, vad kostar det, skickar ni hit". Därför är P10 en
**orderlistbyggare som genererar ett förifyllt WhatsApp-meddelande**, inte en
priskalkylator — och `/precios` blir sannolikt `/cotizador`.

**4 · Reglerad vertikal.** SENACSA habiliterar lokaler som säljer produkter
av veterinär användning, kräver en `asesor técnico` med giltigt
Registro Profesional, och habiliteringsbeviset ska sitta synligt. Inget av
detta får fabriceras. Finns habiliteringen är den vertikalens starkaste
differential och ska ligga i franja de confianza (03) samt i
`Organization`-schemat.

**5 · Skillens referensmapp saknas i denna miljö.** Endast `SKILL.md` finns
under `paraguay-local-site/` — `design-lib-py.md`, `keywords-py.md` och
`vendercrm-integration.md` gick inte att läsa. Spår PF ovan är därför
härlett ur `web-design-system` och anti-footprint-kontrollen är gjord mot de
fyra spåren där, inte mot PA–PE. Kontrolleras innan BUILD-SPEC låses.

---

## Nästa steg

1. Kör keyword-blocket i KWP → skicka exporten.
2. Svara på de 5 frågorna.
3. Då skrivs `BUILD-SPEC.md` (LÄGE 0) med färdig copy ordagrant, varefter
   exekveringen kan köras av en billigare modell.
4. CORE 15 (§10.4.1) planeras i samma spec.
