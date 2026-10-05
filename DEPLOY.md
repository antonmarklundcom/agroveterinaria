# Publiceringsunderlag — endast efter separat godkännande

## Förberett paket

Bygg med `npm run build`. `public/` innehåller HTML, CSS, JS, SVG, sex WebP-varianter, robots.txt, sitemap.xml och `.htaccess`. Det går att lägga på en statisk Apache/LiteSpeed-host efter driftgenomgång; ingen Node-process krävs.

Paketet är en **granskningsversion**. Ingen automatisk deploy kopplas till GitHub. PR:en lämnas som vanlig, öppen PR så att ägaren kan mergea enligt sin senare instruktion. Agenten mergear inte och laddar inte upp till Hostinger inom detta uppdrag.

## Rangordnade beslut före publicering

1. Verksamhetsmodellen är bekräftad av ägaren som leadgenerering åt Agrovet. Identifiera juridiskt/operativt ansvarig, exakt mottagande verksamhet och vilka kategorier denne faktiskt hanterar. Ändra eventuell organisationsschema först efter dokumenterat stöd.
2. WhatsApp-numret +595 992 279599 är uttryckligen godkänt av ägaren och infört i alla länkar. Varje meddelande visar sajt, canonical-sida och kategori/intresse; listflödet visar även produkter, djurslag och mängd. Ingen agenttest skickar ett verkligt meddelande. De tidigare live-/recon-numren används inte.
3. Läsande inventering av befintlig Hostinger-installation och privat PHP/CRM-källa behövs. Ta backup av filer och konfiguration, lista verkliga endpoints/redirects och testa CRM mot testmottagare. Återanvänd verifierad VenderCRM-anslutning; skapa inte ett nytt CRM. Ersätt inte en fungerande serverintegration med detta statiska paket utan jämförelse.
4. Det direkta WhatsApp-flödet kräver ingen ny servermottagare: besökaren granskar och skickar i WhatsApp. Om ett formulär/CRM-flöde senare införs, verifiera servervalidering, rimliga fältgränser, same-origin/CSRF där relevant, rate limiting/spam, timeout, säkra fel, privata loggar och integritetstext. Lägg hemligheter utanför webbroten och testa med testmottagare.
5. Bekräfta eventuella RUC, adress, öppettider, täckning, leverans, betalning, registreringar och produktkatalog. Publicera bara verifierade fakta. Bilderna är illustrativa, inga egna butik-/lagerfoton.
6. Ägargranska spanskan och medicinska innehållsgränser. Inga doser, diagnoser, terapier, produktgodkännanden eller uppfunna habiliteringar finns i paketet.
7. Besluta uttryckligen om indexering när operatör/kontakt är klar. Nu behålls live-lägets `noindex,nofollow`. Robots tillåter hämtning så att direktivet går att läsa. Sitemapen inventerar kanoniska adresser men innebär ingen indexeringsgaranti.

## Driftchecklista för en senare session

- Bekräfta att dagens live fortfarande motsvarar referensen. Stoppa en uppladdning om drift ändrats och jämför först.
- Bevara de fem befintliga URL:erna och granska alla befintliga serverendpoints inklusive `contacto.php` och eventuella tack-/felsidor. Backendkoden ingår inte i GitHub-referensen.
- Ta en återställningsbar Hostinger-backup. Ladda endast upp godkända publika filer, aldrig reporoten, docs, tests, source, node_modules eller miljöfiler.
- Granska befintlig `.htaccess` innan den förberedda filen används. Den nya filen visar DirectoryIndex, 404 och enkla headers, inga obekräftade URL-flyttar.
- Kontrollera Apache/LiteSpeed-stöd, HTTPS, MIME, trailing-slash-redirects, `/404.html` som verkligt 404-svar vid okänd adress samt åtkomst till interna filer.
- Verifiera mobil/desktop, bildladdning, cacheinvalidering, länkar, canonical, robots och sitemap på staging. Inga Search Console- eller Lighthouse-resultat har mätts här.
- Integritetstexten beskriver nu WhatsApp-numret och att meddelandet skickas från WhatsApp efter besökarens val. Kontrollera mobil/desktop-appöppning på staging. Ett eventuellt framtida formulär/CRM-flöde ska valideras med testmottagare separat.
- Håll tidigare fungerande installation och backup redo för rollback. Ingen produktionsåtgärd genomfördes i detta uppdrag.

## Releasegräns

Det förberedda zip-arkivet innehåller bara `public/`. Det innehåller varken verkliga orderdata eller någon ny mottagartjänst. Använd det för granskning och staging först när ovanstående beroenden är lösta.
