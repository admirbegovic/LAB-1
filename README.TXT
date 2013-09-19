0. Hva kan javascript brukes til?
Javascript brukes til å manipulere HTML tekster (dynamisk), de mener det er lett å lære javascript og at alle nettlesere kan lese javascript språket.Javascript er også blant det mest brukte programmeringsspråket i verden.

1.Hva er forskjellen på CSS ID og class elementer.

Forskjellen på ID og CLASS elementer er at:

ID = Unikt og kan bare brukes en gang fordi ID vil være på et spesifikt element.
class = Class er ikke unikt, og kan dermed bli brukt hvis du har lange lister og vil at alle skal være identiske til hverandre. Class er nyttig slik at du ikke trenger å skrive inne flere ID navn samtidig, da kan du bare bruke class for
å gjøre alle "class" elementene til det du selv ønsker.

2.Vurdering og sammenligning oppgave 0 & 1.

Hvis jeg skal vurdere begge oppgavene, ville jeg kanskje brukt begge avhengig hvilken situasjon jeg er i. Jeg føler selv oppgave 1 er svært nyttig, siden du kan scrolle ned etter alfabetet til det språket du ønsker er gitt.
Andre ting med oppgave 1 er jo hvis vi har over 100 forskjellige språk vi skal sortere nedover i et rullegardin kan det føre til problemer for brukeren, og da ville jeg helst ikke brukt denne outputen. Kan godt være at noen ikke liker
å scrolle ned, og dermed vil de kanskje bare ha 100 programmeringsspråk sortert på siden som på oppgave 0, og da ville det vært mye lettere å finne frem etter min mening.

Brukbarhet oppgave 0: Enkelt og raskt å bruke hvis du har mange programmeringsspråk du skal presentere, kan være litt kaotisk på siden hvis det står for mye tekst. Sortere etter alfabetet ville også vært et fint alternativ til en god brukbarhet.
Brukbarhet oppgave 1: Raskt og enkelt å bruke, du kan scrolle deg selv til du finner det språket du selv ønsker. Kan være litt vanskelig og kjedelig å scrolle hvis du foreksempel ikke finner ditt språk og leter grundig igjennom.

Vurdering: Vi kunne brukt begge to, alt er egentlig smak og behag etter min mening. Men, jeg ville selv brukt oppgave 1 hvis vi måtte valgt. Grunnen til dette er at vi kan bruke javascript på hvert enkelt språk og lage en kort introduksjon
til hvert enkelt programmeringsspråk. Dette vil både spare siden for veldig mye skrift evt, og ha alt skrevet på samme linje hvis du skifter alternativ.

Som sagt er alt smak og behag, og har sine positive/negative sider. Vi kan også bruke oppgave 0 som vil være veldig nyttig, knytte A-Z og få den listet etter alfabetet hvis du leter etter noe, altså en hyperlenke hvis det er riktig.

3. Hvordan løser wikipedia lange lister med programmeringsspråk?

Når jeg selv kom inn på siden, så jeg at det var veldig ryddig. Det de har gjort, er at de har laget det meste i en hyper lenke. De har laget kategorier A-Z sånn at du kan trykke på de hyperlenkene de er koblet til så blir du automatisk veiledet til den bokstaven du trykket på.
DE har også sortert alt alfabetisk fra top til bunn. Slik har Wikipedia greid å løse det problemet ved å introdusere programmeringsspråk. Hvis du ikke vil scrolle helt ned til Z, kan du trykke på Z på toppen av nettleseren så blir du
automatisk scrollet ned til kategorien "Z". Veldig ryddig og fin måte å gjøre det på.

4. Forskjell på span og DIV

Begge htmlene er tomme element kan du si men, de har sine egenskaper

Span = Det er et inline element som da vil si, hvis du skriver 2 span elementer etterhverandre vil disse ikke ha noen tekstblokk som gjør at de har "luft" mellom hverande. De vil være da på linje med hverandre med mindre du tar å skrive <br> i mellom.
DIV = DIV er et blokkelement, det vil si at den er som et paragraf. Ved dette elementet trenger du ikke å tenke på å skrive br eller et paragraf kan du si.

Kort oppsummering. DIV = Blokkelement (paragraf lignende element) span = inline element, brukes mest til små/korte setninger.

5. Brukbarhets problemer for del oppgave 2.

Problemer den kan forårsake når du først prøver å implementere javascript i HTML er at du kan få feilmeldinger som "null" og null sier oss INGENTING verken meg eller en vanlig person som ville brukt javascript.
Gjør du noe feil i språket, får du enten null ellers vil ikke javascripten funke i det hele tatt, og det er veldig vanskelig å finne feil med mindre du grunding og nøye ser etter feilen.
Du kan også prioritere i vindu listen hva som skal komme først og sist, alfabetisk eller etter din rekkefølge, men da vil det kreve ett litt mer avansert oppsett vil jeg tro.
Det er flere måte å få en brukbar respons på, enten å lage en liste med textblock og (antall programmeringsspråk i listen) eller så kan du bruke "SPAN ID OUTPUT BOX (tekst som skal endres) For hver av programmeringsspråkene.


LAB2

Oppgave 1: Hvilke deler av min aplikasjon forklarer MVC? "Model, View, Controller"
Du har tre filer, CSS, JS og HTML
Model: HTML er generelt modellen og inneholder dataen vår.
View: CSS filen er view, denne filen bestemmer hvordan vår data skal se ut. Eventuelt, farger, utseende osv osv... Det typiske CSS gjør er jo å endre på utseende til dataen vår.
Controller: Javascript filen kontrollerer eller manipulerer HTML filen. Den bestemmer også hva som skal vises av HTML filen. 

Poenget med MVC er å minske repetisjon av data og evt gjøre det mer oversiktlig.