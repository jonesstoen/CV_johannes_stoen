// Case study content for /minichat/. Facts come from the MiniChat README (problem, features,
// "How it works", design principles, known limitations). Solo project, November 2026.
import banner from '../assets/minichat/minichat_banner.webp';
import demoVideo from '../assets/minichat/demo.mp4';
import demoPoster from '../assets/minichat/demo_poster.webp';
import quickbarVideo from '../assets/minichat/quickbar.mp4';
import quickbarPoster from '../assets/minichat/quickbar_poster.webp';
import chatgpt from '../assets/minichat/chatgpt.webp';
import claude from '../assets/minichat/claude.webp';
import palette from '../assets/minichat/palette.webp';
import stats from '../assets/minichat/stats.webp';

export const minichatMeta = {
    githubUrl: 'https://github.com/jonesstoen/MiniChat',
    banner,
    bannerSize: [1000, 626],
    stack: ['Swift', 'SwiftUI', 'AppKit', 'WebKit', 'Carbon', 'UserNotifications'],
};

export const minichat = {
    no: {
        pageTitle: 'MiniChat, case-studie | Johannes Støen',
        back: 'Alle prosjekter',
        eyebrow: 'Case-studie · macOS',
        title: 'MiniChat',
        lede: 'Et flytende ChatGPT- og Claude-vindu for macOS som åpnes med ⌥Space over alt du holder på med. Det bruker abonnementene du allerede har, uten API-nøkler.',
        meta: [
            ['Rolle', 'Eneutvikler'],
            ['Periode', 'November 2026'],
            ['Plattform', 'macOS 14 (Sonoma) eller nyere'],
            ['Status', 'Åpen kildekode, bygges fra kildekoden'],
        ],
        github: 'Se koden på GitHub',
        blocks: [
            {
                type: 'text',
                title: 'Problemet',
                body: [
                    'Den opprinnelige ChatGPT-appen for macOS hadde en liten, men veldig nyttig funksjon: trykk ⌥Space, og et lite chatvindu dukker opp over det du holder på med. Hele samtalen blir i det lille vinduet, og det forsvinner like fort når du er ferdig.',
                    'Den appen skal legges ned, og erstatteren har ikke det samme flytende vinduet. Alternativene kommer til kort på hver sin måte. Claudes skrivebordsapp har en hurtigtast, men flytter samtalen til hovedvinduet. En nettleserfane ligger aldri øverst. Og API-baserte klienter krever egen betaling i tillegg til abonnementet, uten at historikken synkroniseres med kontoen din.',
                ],
            },
            {
                type: 'figures',
                title: 'Slik fungerer det',
                body: 'Ett tastetrykk viser og skjuler vinduet. Etter en pause åpner ⌥Space en liten hurtiglinje i stedet. Skriv et spørsmål, trykk Retur, og linja vokser til hele vinduet. Med ⌘⇧S tar den et skjermbilde du kan spørre om.',
                images: [
                    { src: demoPoster, video: demoVideo, caption: '⌥Space åpner vinduet over editoren. Spørsmål går til ChatGPT eller Claude, og Esc skjuler vinduet igjen.' },
                    { src: quickbarPoster, video: quickbarVideo, caption: 'Hurtiglinja: ta et skjermbilde (⌘⇧S), spør om det, og linja vokser til hele vinduet.' },
                ],
            },
            {
                type: 'screens',
                images: [
                    { src: chatgpt, caption: 'ChatGPT' },
                    { src: claude, caption: 'Claude' },
                    { src: palette, caption: 'Kommandopalett (⌘J)' },
                    { src: stats, caption: 'Bruksstatistikk' },
                ],
            },
            {
                type: 'list',
                title: 'Hva appen gjør',
                items: [
                    'Ett flytende vindu over alle apper og Spaces, også apper i fullskjerm.',
                    'Viser chatgpt.com og claude.ai direkte, så du logger inn med dine egne kontoer og har all historikk.',
                    'Bytter mellom ChatGPT og Claude på et øyeblikk. Begge sidene er lastet i bakgrunnen, så hver samtale er der du forlot den.',
                    'Kikkemodus (⌥⇧Space) viser vinduet uten å ta tastaturet fra appen du jobber i.',
                    'Varsel og merke på Dock-ikonet når et svar er ferdig mens vinduet er skjult.',
                    'Kommandopalett, nylige samtaler og bokmerker, og en knapp som skjuler chatten bak et nøytralt dekke når du deler skjermen.',
                    'Følger systemspråket, med norsk og engelsk.',
                ],
            },
            {
                type: 'decisions',
                title: 'Valg i macOS-koden',
                items: [
                    {
                        title: 'Et panel som ikke stjeler fokus',
                        body: 'Vinduet er et kantløst NSPanel som ikke aktiverer appen. Det ligger på flytende nivå og blir med til alle Spaces. Det kan ta imot tastetrykk uten å ta fokus fra appen du jobber i, noe SwiftUI ikke klarer alene. Derfor er det AppKit under.',
                    },
                    {
                        title: 'Global hurtigtast uten ekstra tillatelser',
                        body: 'Hurtigtasten er registrert med Carbons RegisterEventHotKey. Det gamle API-et virker over hele systemet uten at brukeren må gi appen tilgang til Tilgjengelighet.',
                    },
                    {
                        title: 'Innlogging med kontoene du allerede har',
                        body: 'Hver tjeneste har sin egen WKWebView som lever hele tiden, med et felles, varig datalager. Du holder deg innlogget, bruker abonnementet du allerede betaler for, og samtalene synkroniseres med kontoen din.',
                    },
                    {
                        title: 'Toppfargen hentes fra pikslene på siden',
                        body: 'Topplinja skal ha samme farge som siden, så vinduet ser ut som én flate. Appen tar et lite skjermbilde av den øverste stripen og bruker den vanligste pikselfargen. Det virker uansett hvordan nettstedet skriver CSS-en sin.',
                    },
                ],
            },
            {
                type: 'text',
                title: 'Lite avhengighet av chatgpt.com og claude.ai',
                body: [
                    'Alt som avhenger av den interne strukturen til chatgpt.com eller claude.ai kan slutte å virke når de oppdaterer sidene sine. Derfor er det meste bygget rent på macOS-siden.',
                    'Det eneste som leser selve siden, er sjekken for om et svar er ferdig. Et lite skript ser etter stopp-knappen hvert halve sekund og melder fra via en WKScriptMessageHandler. Hvis sidene endrer seg, slutter bare varslene å virke. Resten av appen fungerer som før.',
                    'Historikk og statistikk lagres bare på din Mac, og ingenting forlater maskinen utover den vanlige trafikken til OpenAI og Anthropic.',
                ],
            },
            {
                type: 'list',
                title: 'Kjente begrensninger',
                items: [
                    'Varsler, det pulserende menylinjeikonet og tidtakeren avhenger av stopp-knappen på sidene, og må oppdateres hvis OpenAI eller Anthropic endrer den.',
                    'Innlogging med Google kan bli blokkert i innebygde nettlesere. E-post eller «Fortsett med Apple» fungerer som regel.',
                    'Appen er ikke notarisert, så den må bygges lokalt fra kildekoden.',
                    'MiniChat er et uavhengig prosjekt og ikke tilknyttet OpenAI eller Anthropic. Den viser bare de offisielle nettsidene i et eget vindu.',
                ],
            },
        ],
        cta: {
            title: 'Kontakt',
            body: 'Jeg forteller gjerne om hvordan man får et macOS-vindu til å oppføre seg riktig, og om avveiningene ved å bygge på andres nettsider.',
            contact: 'Ta kontakt',
            back: 'Tilbake til prosjektene',
        },
    },
    en: {
        pageTitle: 'MiniChat, case study | Johannes Støen',
        back: 'All projects',
        eyebrow: 'Case study · macOS',
        title: 'MiniChat',
        lede: 'A floating ChatGPT and Claude window for macOS that opens with ⌥Space on top of whatever you are doing. It uses the subscriptions you already have, with no API keys.',
        meta: [
            ['Role', 'Sole developer'],
            ['Period', 'November 2026'],
            ['Platform', 'macOS 14 (Sonoma) or later'],
            ['Status', 'Open source, built from source'],
        ],
        github: 'View the code on GitHub',
        blocks: [
            {
                type: 'text',
                title: 'The problem',
                body: [
                    'The original ChatGPT app for macOS had a small but very useful feature: press ⌥Space and a compact chat window appears on top of whatever you are doing. The whole conversation stays in that little window, and it disappears just as quickly when you are done.',
                    'That app is being retired, and its replacement does not have the same floating window. The alternatives fall short in different ways. Claude\'s desktop app has a shortcut but moves the conversation to the main window. A browser tab is never on top. And API-based clients need separate billing on top of the subscription, without syncing history with your account.',
                ],
            },
            {
                type: 'figures',
                title: 'How it works',
                body: 'One keystroke shows and hides the window. After a break, ⌥Space opens a small quick bar instead. Type a question, press Return, and the bar grows into the full window. With ⌘⇧S it takes a screenshot you can ask about.',
                images: [
                    { src: demoPoster, video: demoVideo, caption: '⌥Space opens the window over the editor. Questions go to ChatGPT or Claude, and Esc hides the window again.' },
                    { src: quickbarPoster, video: quickbarVideo, caption: 'The quick bar: take a screenshot (⌘⇧S), ask about it, and the bar grows into the full window.' },
                ],
            },
            {
                type: 'screens',
                images: [
                    { src: chatgpt, caption: 'ChatGPT' },
                    { src: claude, caption: 'Claude' },
                    { src: palette, caption: 'Command palette (⌘J)' },
                    { src: stats, caption: 'Usage statistics' },
                ],
            },
            {
                type: 'list',
                title: 'What it does',
                items: [
                    'One floating window above every app and Space, including full-screen apps.',
                    'Shows chatgpt.com and claude.ai directly, so you sign in with your own accounts and keep all your history.',
                    'Switches between ChatGPT and Claude instantly. Both pages stay loaded in the background, so each conversation is where you left it.',
                    'Peek mode (⌥⇧Space) shows the window without taking the keyboard from the app you are working in.',
                    'A notification and a Dock badge when an answer finishes while the window is hidden.',
                    'A command palette, recent chats and bookmarks, and a button that hides the chat behind a neutral cover when you share your screen.',
                    'Follows the system language, with English and Norwegian.',
                ],
            },
            {
                type: 'decisions',
                title: 'Choices in the macOS code',
                items: [
                    {
                        title: 'A panel that does not steal focus',
                        body: 'The window is a borderless, non-activating NSPanel at floating level that joins all Spaces. It can take keyboard input without taking focus from the app you are working in, which SwiftUI cannot do on its own. That is why there is AppKit underneath.',
                    },
                    {
                        title: 'A global shortcut without extra permissions',
                        body: 'The shortcut is registered with Carbon\'s RegisterEventHotKey. The old API works system-wide without the user having to grant the app Accessibility access.',
                    },
                    {
                        title: 'Sign-in with the accounts you already have',
                        body: 'Each service has its own WKWebView that stays alive, with a shared, persistent data store. You stay signed in, use the subscription you already pay for, and your conversations sync with your account.',
                    },
                    {
                        title: 'The top colour comes from the page\'s pixels',
                        body: 'The top bar should match the page so the window reads as one surface. The app takes a tiny snapshot of the top strip and uses the most common pixel colour. That works regardless of how the site writes its CSS.',
                    },
                ],
            },
            {
                type: 'text',
                title: 'Little dependence on chatgpt.com and claude.ai',
                body: [
                    'Anything that depends on the internal structure of chatgpt.com or claude.ai can break when they update their sites. So most of the app is built purely on the macOS side.',
                    'The only thing that reads the page itself is the check for whether an answer is done. A small script looks for the stop button every half second and reports through a WKScriptMessageHandler. If the sites change, only the notifications stop working. The rest of the app keeps going.',
                    'History and statistics are stored only on your Mac, and nothing leaves the machine beyond your normal traffic to OpenAI and Anthropic.',
                ],
            },
            {
                type: 'list',
                title: 'Known limitations',
                items: [
                    'Notifications, the pulsing menu bar icon and the timer depend on the stop button on the sites, and need updating if OpenAI or Anthropic change it.',
                    'Signing in with Google can be blocked in embedded browsers. Email or "Continue with Apple" usually works.',
                    'The app is not notarized, so it has to be built locally from source.',
                    'MiniChat is an independent project and not affiliated with OpenAI or Anthropic. It only shows the official websites in a native window.',
                ],
            },
        ],
        cta: {
            title: 'Contact',
            body: 'I am happy to talk about making a macOS window behave properly, and about the trade-offs of building on top of other people\'s websites.',
            contact: 'Get in touch',
            back: 'Back to projects',
        },
    },
};
