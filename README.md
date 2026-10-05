# Agroveterinaria — komplett granskningsversion

Statisk, spanskspråkig kärnsajt för `agroveterinaria.com.py`. Ingen Node-server behövs i drift; Node används bara för bygg och lokal preview. **Vanlig PR för granskning och ägarens merge, inte godkänd för publicering.** Ägaren har bekräftat leadgenerering åt Agrovet som affärsroll. Mottagarnamn, nummer och CRM återstår; inga leads, WhatsApp-meddelanden, order eller betalningar skickas i denna version.

## Källa och omfattning

- Bas: `claude/argoveterinaria-website-plan-lnyjd1`, commit `68217dc590f35daf6b17c20eba2ab479511d7cfd`.
- Alternativgrenen `claude/wonderful-maxwell-calm0q` på `e36ae0cf1e13c3e7ff6f77119b3b15f352a34ffd` innehåller samma recon och ett sökordsunderlag, ingen sajtimplementation.
- Live granskades först och arkiverades under `docs/reference/`. Dess HTML/JS finns inte i någon av dessa grenar. Ursprungscommit och PHP-källa kan inte fastställas från publik HTML.
- `source/assets/` och `tools/build.mjs` är den nya, reproducerbara granskningskällan. `public/` är ett komplett granskningspaket, inte en kopia av Hostingers befintliga installation.
- Fem befintliga sid-URL:er bevaras. Fem informationssidor läggs till, plus en 404-sida.
- Kategorier hämtas från faktiskt liveinnehåll: alimentos, medicamentos, vacunas, antiparasitarios och insumos ganaderos. Inga fabricerade produktposter, adresser, varumärken eller priser.

## Köra och verifiera

Node 20+ och Chrome behövs för lokala webbläsartester.

```sh
npm ci --ignore-scripts
npm run build
npm test
npm run preview
```

Preview: `http://127.0.0.1:4175/`. Testsviten startar själv en separat lokal server och använder bara syntetiska data. Tester inkluderar tio URL:er, interna länkar, metadata, robotdirektiv, schema, 404, privata sökvägar, behovsfilter, listbyggare, XSS, urklipp, export, 20-radersgräns, tangentbord, utan JavaScript och 1440/390/320 px.

`public/` innehåller byggresultatet för direkt granskning. Ändra byggkällan och kör byggsteget igen; redigera inte genererad HTML manuellt. Befintlig projektplan bevaras orörd.

## Publiceringsberoenden

Läs `DEPLOY.md` före någon framtida driftändring. Affärsrollen är leadgenerering åt Agrovet enligt ägarens svar. Ansvarig operatör, godkänd kontaktmottagare och CRM-flöde är fortfarande obekräftade. Därför finns en lokal listbyggare och tydlig kontaktstatus tills mottagaren kan aktiveras. `noindex,nofollow` behålls. Ingen katalog, butik eller medicinsk rådgivning påstås.

Ingen ny konto-, databas-, checkout- eller CRM-implementation har införts. Den live-refererade `contacto.php` och VenderCRM-konfigurationen finns inte i repoet och kan inte verifieras från frontend. Den här versionen skickar inte till denna okända backend.

Rapport, tester, före/efter och Higgsfield-logg finns i `docs/`. Bara `public/` får ingå i det förberedda releasearkivet. Ingen merge, Hostinger-publicering, DNS- eller produktionskonfiguration görs i detta uppdrag.
