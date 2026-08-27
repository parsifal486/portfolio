---
title: 'Site-by-site Notes on 55 Personal Sites'
description: 'Field notes on the 55 personal sites behind the survey — fashion, graphic design, product, and developers.'
keywords: personal website, portfolio, web design, survey notes
author: ryuteakwoo
date: 2026-08-27
---

This is the appendix to [the main article](/posts/what-actually-works-on-personal-sites): the 55 sites from the survey worth writing down, in four groups. Each entry is a field note from when I visited, not a recommendation — some of these sites earned their place by what they got wrong.

## Fashion

### Iris van Herpen

[irisvanherpen.com](https://www.irisvanherpen.com/) — Dutch couture designer, known for combining traditional couture craft with digital fabrication, biomaterials, architecture, dance, and scientific research.

The site belongs to the mature, low-risk pattern you see across high-end designers, but the layering is done with unusual care. The homepage is cold and restrained: each section is one full-screen image or video with a line or two of poetic copy, and surface information is compressed to almost nothing. The real density is folded one level down — open a collection and the secondary nav (About, The Performance, Behind the Scenes, Explore the Process) leads to long essays on concept, craft, and collaboration, plus a searchable news archive going back years. The surface is for people who just want to be hit by the images; the depth is for people who want to read and dig. The site defaults to letting visitors sort themselves, and hands them the decision of how deeply to know her.

Typographically the whole site is essentially Futura, with hierarchy built from size, weight, tracking, and case rather than font-mixing. The geometry reads clean and expensively cold, but Futura's round skeletons and small x-height are not good for long-form reading — and the site uses it for its densest conceptual essays anyway. That's a legible trade: brand consistency over reading comfort, deliberately.

### Virgil Abloh

[virgilabloh.com](https://www.virgilabloh.com/) — worked across fashion, industrial design, music, and art; Off-White founder and Louis Vuitton menswear director. After his death the site is maintained as an archive by Shannon Abloh and a team.

This one needs a boundary drawn first: it isn't a site Virgil built, it's an archive project run by the people continuing his ideas, so you can't attribute the design decisions to him. What's interesting is that the maintainers carried forward his working method rather than his visual symbols — "It's like hip-hop. It's sampling." Twenty-thousand-plus works, prototypes, and sketches are framed not as untouchable memorabilia but as a record that's still evolving, with a free membership and an Archive Toolkit aimed at students and people starting out. The archive isn't an endpoint; it's source material for the next round of sampling. What it preserves is less a body of finished work than a kind of permission: you can enter this material, understand the method, and keep building.

### Bart Hess

[barthess.com](https://www.barthess.com/) — Dutch designer and artist running textile, film, and performance experiments around the body, materials, fashion, and technology.

The homepage gives you no title and no intro — just the color field of the work filling the viewport, with a single hamburger icon so low-contrast it's nearly invisible. It isn't animated in late; your attention just takes a few seconds to find it. Inside, the background goes black and negative space suspends the bodies and materials like specimens. The best move is the menu: opening navigation covers the page with a glossy black liquid texture taken from his own work, with organic holes that let the underlying page show through. The navigation layer becomes a breathing piece of work in its own right.

Type is a two-font system with clean division of labor: Brewery, a display face with calligraphic, art-deco warmth, carries the display layer and injects hand-made warmth into the cold black ground; reading is handed to the geometric, nearly expressionless Futura LT Book, which carries the long theoretical texts about bodies and the grotesque. Warm against cold, hand against geometry — the type system replays the analog/digital, body/material tension of his actual work. Strip the name off this site and you could probably still identify it. The weakness is currency: projects carry no years and no update dates. The site is very good at showing who the author is, and takes no responsibility for proving what he's doing now.

### Robert Wun

[robertwun.com](https://www.robertwun.com/) — Hong Kong-born, London-based couture designer known for cinematic storytelling and surreal collections.

The skeleton is a showroom template restrained almost to anonymity; what lifts it out of the template is a handful of details that all converge on one geometric motif. The wordmark "ROBERT WUN•" is drawn as a single SVG, and the solid dot at the end belongs to the mark itself — it closes the name like a period and gives it something memorable. Then your cursor is that dot: the real cursor is hidden and replaced with a ~16px circle that follows the mouse and inverts against whatever it crosses via `mix-blend-mode: difference`; on hover, nav text flips color together with the dot. The same circle extends into the ○/● view toggles and the loading spinner — one motif threaded through brand mark, pointer, state, and feedback.

Content organization participates too: each collection offers LOOKBOOK, OVERVIEW, and RUNWAY views — piece-by-piece close reading, a contact-sheet grid of the whole season, and the full show film. Entering RUNWAY inverts the interface to black; the UI itself performs "entering the theater". The cost is that a lot of the personality is parked on hover: touch visitors never get the core experience, and the inverting cursor occasionally loses legibility over saturated images. A classic authorship-over-universal-usability trade. The cleverness of this site isn't that it does a lot — it's that it does a lot with one dot and one custom wordmark.

### Kiko Kostadinov

[kikokostadinov.com](https://kikokostadinov.com/) — Bulgarian-born designer whose clothing, footwear, and ASICS collaborations span high fashion and sports tech.

The strongest signature is a dot grid: spaced about 70px apart, fixed above everything in the viewport. Videos scroll and change underneath; the grid never moves, like graph paper laid over all the imagery. For a designer known for pattern-cutting and construction, it's the right structural metaphor — changing work pinned into one measuring system. Erase the name and the grid alone would probably identify the site.

Everything else follows one creed: remove what can be removed, and keep the necessary interactions quiet. The homepage video strips every native control — click the frame to pause, a bare white "Unmute" hotspot for sound. Control is compressed and hidden back into the image itself; near-zero presence, function intact. The wordmark is frozen as an SVG while body text runs in Classic Grotesque Pro — one frozen, one fluid, same order. The four-segment nav control uses a translucent gray fill so the dot grid shows through it. The footer lines up past collections from AW26 back to AW19, and the homepage already carries SS27 — a store facing the present and a browsable working archive at the same time.

### Wales Bonner

[walesbonner.com](https://walesbonner.com/) — combines British heritage, Black cultural studies, and refined sportswear; the adidas Originals collaboration is central to the brand's story.

A basic designer e-commerce site: full-screen campaign imagery, minimal interaction. The one place it spends effort is color and type — a warm cream ground with wine and terracotta instead of the default black-white-gray, Times as the body register with light Univers for nav. That warmth-plus-serif voice carries the "European heritage × Afro-Atlantic spirit" positioning, and makes it more recognizable than most sites in its class.

### Jerry Lorenzo / Fear of God

[fearofgod.com](https://fearofgod.com/) — Jerry Lorenzo's translation of sportswear into a complete system of spiritual, minimalist American luxury.

The standard "unremarkable but unimpeachable" e-commerce baseline: full-bleed imagery, few controls, black and warm greige. The one deliberate move is a two-register type system — Optima (a humanist face with stroke contrast, serif-adjacent luxury) for the brand-world layer, condensed Helvetica Neue for the retail UI. One register speaks faith, the other speaks transactions. Together with a wordmark embossed into translucent material in a looping hero video and scripture-inflected copy, a Shopify store gets elevated into a brand world with religious overtones. But all of that is signing with atmosphere: the site's first job is moving you into SHOP, and the authorship is a team's curatorial voice, not a creator's own page craft.

### Samuel Ross / A-COLD-WALL*

[a-cold-wall.com](https://www.a-cold-wall.com/) — Samuel Ross's brand, built from brutalism, industrial materials, and British class experience.

Pure black and white with almost no gradients, shadows, or rounded corners — a cold industrial drawing. The recognizability comes from one saturated electric blue that runs through announcement bars, full-screen transitions, and product badges. The color isn't decoration; it's functional encoding. Black and white build the industrial chassis, electric blue flags events and actions, like status lights on a control panel — the site doesn't need to repeat its logo because the color itself signs the page. Layout runs two directions: scrolling down is campaign and worldview; the product areas switch to horizontal browsing. Narrative and commerce get separate axes.

### JJJJound / Justin Saunders

[jjjjound.com](https://www.jjjjound.com/) — Justin Saunders grew JJJJound from a digital mood board into a design studio and product brand.

Also an e-commerce site, but it pushes restraint into a position: system-default Times New Roman for display, San Francisco for body, and a homepage that is literally a vertical mood board. The way the site operates is the curatorial practice itself.

### Rick Owens / DRKSHDW

[rickowens.eu](https://www.rickowens.eu/en-us) — a complete personal world built on dark, alien, anti-classical language.

A standard e-commerce showroom with one move worth writing down: the site arrives in black and white and gradually turns to color as you stay. The hero video lands on a grayscale first frame, then a CSS filter smoothly removes the desaturation. Arrive drained of color, slowly reveal — the brand's dark, ascetic voice moved into the page's time dimension. It's the site's single authored touch outside the standard pattern.

### Yoon Ahn / AMBUSH / YOONIVERSE

[yooniverse.design](https://www.yooniverse.design/) — the personal creative universe of Yoon Ahn (AMBUSH founder, Dior Men jewelry designer).

One of the few genuine personal-expression sites in the fashion group: no SHOP, just WORK / MEDIA / ABOUT. The UI itself is nearly colorless — all color comes from the campaign imagery. The whole site runs on essentially one weight of one face (Riforma LL Bold) at small sizes, ceding all attention to the images; the wordmark is a frozen white custom monogram with a ™ in the corner — a personal mark, trademarked, consistent with how she treats AMBUSH®.

The real craft is interactive: homepage photos are sliced into three horizontal bands, the top and bottom bands bending backward in 3D perspective so the edges appear to refract — not a mask, not WebGL, just geometric folding with CSS 3D transforms. With the idle-dim wake-up interaction and full-screen black transitions, browsing is staged as a cinematic entrance. ABOUT is an exhaustive reverse-chronological timeline from 2025 back to 2004. One attribution note: the creative direction is Yoon's, the web engineering is Leonardo Angelucci's — when you praise this site's craft you're praising that pair.

### Sandy Liang

[sandyliang.info](https://www.sandyliang.info/) — juxtaposes girlhood, nostalgia, Chinese-American New York experience, and gorpcore.

A standard e-commerce site whose mood nonetheless holds: white ground, a pink sale ticker, the warm humanist sans Calibre, and campaign photography full of ruffled dresses and nostalgic cabin scenes. There's no interactive authorship here; what works is purely palette and tone — the soft pink-on-white register carries her positioning exactly, and makes a stock template read warm.

## Graphic & brand design

### Stefan Sagmeister

[sagmeister.com](https://sagmeister.com/) — legendary graphic designer and artist; work spans design, installation, and conceptual art.

On the surface, an ordinary grid portfolio. Three things hold it up. First, single-typeface discipline: the entire site runs on two weights of one custom face — nav, headlines, long-form text, subscription form — with hierarchy built from size and weight alone. Second, a black-and-white system: the homepage is a black masonry wall of eighty project thumbnails (no hero, no introduction — the work is the landing page), and the Answers page alternates black and white bands per topic. Black, white, one typeface: three elements for the whole site. Third, the About page has been rebuilt as "Answers" — sixteen themed groups of self-interview questions (long-term thinking, typography, beauty, happiness, advice for students…), each an accordion of numbered questions that open into first-person long answers. One person's beliefs, taste, and philosophy, made searchable and expandable.

The details stay in the same register: thumbnail sizes are deliberately uneven, the raggedness itself setting a browsing rhythm; hover just dims the image and fades in a title; on project pages the cursor becomes a crosshair, like a drafting tool's alignment mark. Exhibitions and lectures are scheduled into 2026–2027 — an active, working site, not a museum.

### David Rudnick

[davidrudnick.org](https://davidrudnick.org/) — London graphic and type designer focused on experimental visuals, music work, and self-made typefaces.

On a pure black ground the work is scattered irregularly, refusing the grid — the scatter itself is the mood. A layout toggle collapses the scatter into a compact distribution for fast overview. Scattered mode serves the senses, compact mode serves efficiency: two browsing paths in one page. The nav is an ultra-wide tab bar floating permanently above everything at the highest layer, closer to an instrument's control strip than website navigation. The archive runs back to 1998 — Clients and Typefaces, eighty-plus projects, image-dense, nearly wordless.

### Lotta Nieminen

[lottanieminen.com](https://www.lottanieminen.com/) — Finnish-born, New York-based illustrator, graphic designer, and brand designer; founded her studio in 2012.

The viewport is treated as a sheet of paper with white margins: the content is an inset text block, and the navigation — small type rotated 90° — lives in the four margins like a book's running heads and crop marks, with a scroll counter (1 / 12) in the right margin. Navigation is banished to the edges; the text block belongs entirely to the work. The first screen goes further: no navigation at all, just work images cross-fading with a huge letterspaced name floating over them. The chrome only appears when you scroll — even the site's skeleton is progressively disclosed.

Structurally it splits into two views: the homepage is an editorial flow of twelve selected projects; /index is the full 28-project text archive with discipline filters. A curated magazine and a searchable archive, fully separated. Two type families for the whole site — Unica77 for every piece of small UI text, the serif Romie for editorial display — and parentheses as a recurring typographic mark. A site of unusually high editorial-design literacy, with all its authorship bet on the typographic system.

### Morag Myerscough

[moragmyerscough.com](https://www.moragmyerscough.com/) — London artist and designer known for high-energy color-and-type installations in public space.

The site itself is unremarkable: one bubblegum-pink ground for everything, 34 work images floating in a single centered column, no titles, no captions, and the site frozen around 2021. It stays in the list because of the work — saturated color clashes, thick geometric lines, and lettering installations that you recognize instantly. It's the type specimen of "the work has a strong style, the site is just a container": the pink ground extends her color language to the web, but that's as far as it goes.

### Neville Brody / Brody Associates

[brody-associates.com](https://www.brody-associates.com/) — the London practice of legendary art director Neville Brody, doing branding and type founding.

The homepage is a split-screen double lobby leading to two mirror-structured sub-sites, Brody Studio and Brody Fonts. The strongest single move is the navigation: `mix-blend-mode: difference` inverts the nav text pixel-by-pixel against whatever scrolls beneath — black over white, white over black, a silvery blue over the orange sections. Always readable, always performing.

The Fonts sub-site is an interactive type specimen book: an orange full-screen glyph hero, a white manifesto, a black carousel of bespoke faces, a white retail catalog — black and white sections alternating, which incidentally gives the inverting nav a stage to keep flipping on. Each row of the catalog gives a typeface a one-line persona ("Analogue made digital" is Blur, "Record label ready" is Industria), set in the face itself, and the tester at the bottom lets you rewrite the sample sentence, adjust size, leading, and tracking, try it, and buy it on the spot. The site loads the foundry's own catalog and nothing else — the website is the specimen book, from font stack to interaction.

### Debbie Millman

[debbiemillman.com](https://debbiemillman.com/) — writer, designer, educator; host of Design Matters; founder of SVA's Masters in Branding.

Design-wise a plain WordPress site: a monetization hub for several revenue lines, with a scrolling video background and some staggered type as its only visual interest. It stays in the list for the content — Design Matters is a design interview podcast that's been running for over twenty years, and the interview archive is likely worth far more than the site. A type specimen of strong content, weak craft, with an extra layer of commercialization.

### Timothy Goodman

[tgoodman.com](https://www.tgoodman.com/) — New York visual artist and designer; murals, lettering, and social projects.

One school-bus-yellow ground for the entire site, with a hand-lettered wordmark. The hero is a self-drawn doodle mural: black-line drawings on yellow, divided into rectangular panels with words like COMMUNITY, EXPERIMENTS, and BOOKS drawn into the cells — and it's alive. Every panel has its own animation, and hovering triggers a panel-specific effect. Clicking doesn't navigate anywhere; the craft is entirely in the animation, not the wayfinding. Below, an untitled masonry wall mixes commercial commissions with personal projects straight on the yellow. The UI font is the Arial system stack — zero typographic investment. The personality is all in the illustration and hand-lettering, and all of the site's web craft is concentrated in that one animated set piece up front.

### Leta Sobierajski

[letasobierajski.com](https://letasobierajski.com/) — New York multidisciplinary artist and designer; one half of Wade&Leta with Wade Jeffree.

The signature is unmistakable: a red square, a blue triangle, and a yellow circle are the Email, Twitter, and Instagram links. The primary-color shapes float above every page at the top layer, rotate slowly, can be dragged around the screen, and pause their spin on hover so you can grab them. Color works as one solid ground per page: a cobalt hero (with "She makes music for your eyes" in huge white Karla), a white work feed, a bright yellow archive page, a magenta Profile, and a constant yellow bar along the bottom.

The nav words are split into per-letter spans, each word wired to a different hover animation: the site name's letters ripple in a scale wave, "Profile" flips letter-by-letter around its axis, and hovering a project image tilts it five degrees along with its caption. All of this is a custom layer she wrote on top of a stock platform. The primary-color playfulness of her installations was carried into the site whole — visuals and interaction both.

### Astrid Stavro

[astridstavro.design](https://astridstavro.design/) — editorial, brand, and type-adjacent designer; former Pentagram partner, independent since 2022.

The homepage is a vertical strip of images roughly 98,000 pixels tall: 79 full-bleed work images end to end, with zero titles, zero captions, zero project pages, opening on an S bent from neon tubing. Paging mimics a rising curtain: each image is pinned to the viewport with `position: sticky`, and the next one rises from the bottom as a full sheet, covering the one before, which stays pinned until it's gone — every page-turn is "previous scene freezes, next scene rises." Distant images render first as flat panels of their dominant color and only load near the viewport, so the enormous strip stays smooth throughout.

The About page flips to white-on-black, a spec-sheet layout with labels on the left and content on the right, and holds all of the site's text — Pentagram partnership, co-founding Atlas, 150+ awards. The homepage gets only images, About gets only words. An extreme case of "the work is everything": she won't even give you titles, and the curatorial order is the entire editorial judgment.

### Giorgia Lupi

[giorgialupi.com](https://giorgialupi.com/) — information designer, author of "Data Humanism," Pentagram partner.

The web craft layer is a clean template: one rounded geometric sans, red highlights on the current section. What's worth studying is the content structure — the homepage leads with conviction: a looping marquee announcing her solo exhibition, then a large-type self-introduction, the definition of Data Humanism, a documentary embed, with the work occupying only the last screen. Philosophy is a top-level nav item holding the full Data Humanism manifesto. Design philosophy as first-class navigation; opinions enter before the work does. Strong content, medium craft.

## Product & UI design

### Jony Ive

[lovefrom.com/jony](https://www.lovefrom.com/jony) — British-born industrial designer; led Apple's hardware and interface design through iMac, iPod, iPhone, iPad, and Apple Watch; co-founded LoveFrom with Marc Newson in 2019, and io Products with OpenAI in 2024.

The LoveFrom site pushes minimalism further than any of the restrained developer sites: essentially two pages that only link to each other — the homepage's only link is "Jony Ive" → /jony, and /jony's only link is "LoveFrom" → home. Each page is a centered typographic composition in a single proprietary serif; no second face, no images, no buttons. The wordmark is the site's one mechanism: the centered "LoveFrom" is followed by a blinking text cursor that, as you scroll, grows into a large serif comma and settles as "LoveFrom," — a pun on signing a letter "Love, from —" (the name traces to Steve Jobs on making things "with love"). A giant comma also pokes in from the right edge, enlarging the mark into a motif.

The /jony page is a fully centered bio where every line is a hand-broken `<span>`, breaking at semantic and breathing points like verse — letterpress and letter-writing traditions carried into markup. The only typeface is their own LF-Serif (regular and italic, one weight each); the identity rides entirely on one proprietary serif and a set of typographic decisions. The trade-offs are equally clear: content is nearly evacuated, scrolling is hijacked, text is revealed via visibility toggles — usability is plainly negative, and the model doesn't generalize (not everyone can commission a typeface). Attribution note: the credit belongs to the LoveFrom studio, not to Ive personally writing code.

### Naoto Fukasawa

[naotofukasawa.com](https://naotofukasawa.com/) — Japanese industrial designer; MUJI's wall-mounted CD player, ±0, INFOBAR, Maruni chairs; advocate of "Without Thought" and co-initiator of Super Normal with Jasper Morrison.

A content-heavy but formally standard studio portfolio: a fixed left rail (tight bold wordmark, nav, live news line) with full-bleed auto-rotating product photography on the right; About is a long anchored biography (complete design philosophy, 70+ clients A–Z, awards through 2026, MoMA/V&A collections); Projects is a filterable, searchable grid. One sans (acumin-pro), white ground, generous whitespace, trilingual. There's no interactive authorship in the code — rail plus carousel plus grid is the generic studio template. What's worth recording is the consistency: Fukasawa is the flag-bearer of Super Normal, and the site itself is super normal — quiet to the point of invisibility, receding so the objects speak. The medium performs his philosophy.

### Kenya Hara

[hara.ndc.co.jp](https://hara.ndc.co.jp/) — Japanese graphic designer and design thinker; MUJI's art director; author of "White" and "Designing Design"; runs the HARA DESIGN INSTITUTE.

An institutional studio portfolio: white-ground editorial layout, Noto Sans JP, trilingual, News plus a discipline-tagged Works grid (Yamato's cat logo, Tsutaya, JAPAN HOUSE…), active into 2026. The web form is nearly identical to Fukasawa's — the generic studio template, with no web-craft authorship. The one distinguishing angle is Hara's philosophy of white and emptiness: the extreme whitespace is a practice of "emptiness as vessel, inviting projection." Together with Fukasawa's Super Normal, a matched pair of Japanese minimalist studios whose sites are consistent with their philosophy.

### John Maeda

[maeda.pm](https://maeda.pm/) — Japanese-American computational design pioneer; author of "The Laws of Simplicity" and "How to Speak Machine"; former MIT Media Lab professor and RISD president.

An interesting inversion: the author of "The Laws of Simplicity" runs his high-frequency blog on a stock WordPress theme — system fonts, light gray ground, standard card grid, monthly archives, essentially zero custom visuals. The personality is parked in two places: the sheer volume and voice of the writing (product, data, design, leadership, with a self-curated rail of greatest hits), and a pixel-art 8-bit avatar — a computational designer's self-deprecating signature. You can read it as the laws of simplicity carried to their conclusion — reduce to the platform default, let content win — or as deliberate neglect of the blog's appearance. He told Debbie Millman back in 2007 that "text is more powerful than graphics; the typeface doesn't matter, good text does" — which is exactly the footnote this un-designed blog needs.

### Julie Zhuo

[juliezhuo.com](https://www.juliezhuo.com/) — former VP of Design at Facebook, author of "The Making of a Manager," now co-founder of Sundial.

A single-screen link hub: one full-bleed environmental photo of her as background, a frosted-glass identity card on the right (slab serif; roles, a short list of selected writing and talks), with the actual content living off-site (Substack, the book, Medium, HBR). Hand-built, static, no scrolling. It has one more move than the average static card: the background is a rotating set of personal photos — a living-room portrait on one visit, a travel shot of Gustavia harbor on another, switching by session rather than every reload. It keeps a static entry page alive and lets her life show through from different angles. The personality is in the rotating photos and the warmth of the glass card, not in web craft.

### Frank Chimero

[frankchimero.com](https://frankchimero.com/) — New York designer and creative director; author of "The Shape of Design" and canonical design essays like "The Web's Grain."

The homepage is an extremely quiet black-ground centered index: one proprietary sans (Familjen Grotesk), four sections — Information, Projects, Writing, Archive — laying out identity, links, books, and every essay in reverse order. Content-first, near-zero decoration; taken alone, it belongs with the quietest writing sites. But the actual craft lives in the essays. The latest, "Beyond the Machine," runs about 36,000 pixels with 83 images: a narrow black-ground text column alternating with full-width image cards, a carefully composed long-form visual essay rather than a text blog. With "The Web's Grain" and "What Screens Want" already canon, the essays are the product, and the homepage's stillness exists to let them shine. Active as of late 2025.

### Tobias van Schneider

[vanschneider.com](https://vanschneider.com/) — Austrian-born designer and creative director; former Spotify art director; founder of HOVS, co-founder of Semplice, Carbonmade, and mymind.

HOVS is his editorial "house" — not a store (no cart, no pricing; the products link out as case studies, alongside branding work for NASA/JPL). It's one of the rare sites in this survey with strong personal expression, real web craft, and active maintenance at the same time, and the authorship is singular: concept and execution are both his.

The strongest tactile signature is scroll-driven 3D perspective tilt: on landing, the whole content card leans back in 3D space like a sheet lying on a desk, then rights itself as you scroll, settling flat when you stop. The tilt only exists in motion — at rest the DOM reads `transform: none`. It's a purely transient effect that imports the feel of leafing through a printed journal, matching the editorial positioning.

The motifs are everywhere and hand-made: the tall triangular lattice behind the hero is drawn programmatically in JS, not an image — 106 SVGs across the site. The hero's soft-focus ghost text reads "I CREATE; THEREFORE I AM," a Descartes pun that plants the creed in one line. The masthead is heraldic: a rotated red book spine reading HOVS, an eagle crest, and a recurring ✣ mark in the nav — a personal coat of arms threaded through the site. The nav itself is a typographic piece: three French-labeled, numbered columns (REPERTOIRE / CRÉATIVITÉ / NARRATIVE, 01–06) set in the serif "Tobias" — a full type family from Dinamo that happens to share his name — alongside MaisonNeue, NB Akademie, Engravers, Bodoni, and FK Roman. Practically a whole type library, deployed as a deliberate editorial system.

The clearest consistency signal is the platform: the site runs on WordPress plus Semplice — the portfolio tool he co-founded — customized past any template feel. He builds his own site with his own product; the site is a live sample of both. DESK Magazine and a weekly newsletter (№277, May 2026) prove it's very much alive. Compared with YOONIVERSE, the other craft-heavy expression site in this survey, the route differs: YOONIVERSE bets on imagery and 3D folding, HOVS on editorial art direction, a sign system, and scroll feel.

### Scott Belsky

[scottbelsky.com](https://www.scottbelsky.com/) — Behance founder, former Adobe CPO, seed investor; writing lives at implications.com and Substack.

A presentable but craft-free template card site: one screen of orange 3D-ribbon hero art with his "It's not about ideas. It's about making ideas happen." slogan, three color-blocked nav tiles (Contact, the book, Investments), and a bio. Stock template fonts, one strong-looking stock 3D image doing all the work. Essentially a routing portal — the actual writing is all off-site, and the main site carries almost no content. Same family as Maeda's "stock platform, content elsewhere," but thinner.

### Jason Fried

[world.hey.com/jason](https://world.hey.com/jason) — 37signals (Basecamp, HEY) co-founder and CEO; author of "Rework."

The least "website design" of anything in this survey: not a site at all, but an author page on HEY World, the one-click blog feature of his company's own email product. Every HEY World author page is identical — dark ground, centered column, round avatar, bio, subscribe box, reverse-chronological posts. System fonts, one image, zero authorship over layout or type: the template is fixed by HEY, and the author only fills in words. The value is 100% in the writing — frequent, unmistakably his contrarian product takes ("The bespoke software revolution? I'm not buying it."). It stands as the extreme position: for some people the best personal site strategy is to not make a site at all and give everything to the content — which is exactly the anti-overdesign stance 37signals has argued for years.

### Ryan Singer

[ryansinger.co](https://www.ryansinger.co/) — former Basecamp product strategy lead; author of "Shape Up"; now independent product consultant.

A personal services site with high content sincerity but messy typography. Self-hosted on Ghost, and the site genuinely carries his positions: identity, three service blocks that read like a consulting proposal, the Shape Up book, past articles. That puts it above the pure portal sites — the main site really has content and opinions.

But it's a specimen of typeface pile-up. One screen stacks four faces with clashing personalities and eras: KUniforma (sharp contemporary geometric grotesque) for headings, Georgia (a rounded, old-fashioned nineties screen serif) for body, Intel One Mono in places, plus Open Sans mixed in. The problem isn't serif-plus-sans; it's that these faces share no common temperament — not a designed contrast like Bart Hess's Brewery × Futura, more like grabbing whichever workable font was nearest. Add red square bullets, underlines, and cards, and the marks pile up too. It contradicts the "boil it down to a crisp concept" discipline Shape Up teaches — a neat inversion of "taste is knowing when to hold back."

### Andy Matuschak

[andymatuschak.org](https://andymatuschak.org/) — tools-for-thought researcher; former Apple iOS engineer and Khan Academy R&D lead; known for the mnemonic medium "Quantum Country" and his public evergreen notes.

A man who studies tools for thought made his website into one. The route is information architecture and interaction paradigm rather than visual art direction, across two sites in two languages. The homepage is a newspaper-like multi-column index wider than the viewport: a research manifesto in the first column, then a column per research area, entries illustrated with pale hand-drawn sketches, some carrying a 🔒 — patron-early-access, the funding model woven directly into the IA. The typography is bookish and consistent: Spartan MB for purple headings, Alegreya Sans for text, small caps for labels.

The real contribution is Stacked Notes at notes.andymatuschak.org: click any internal link and the target note slides in as a new column from the right instead of replacing the page, building a horizontal scroll of your entire reading path, all visible at once — Zettelkasten's dense linking translated into a spatial interface. Two mechanisms worth stealing: the URL records the whole path (each opened note appends `?stackedNotes=<id>`, so any reading trail is shareable and replayable), and notes have content-addressed stable IDs (short hashes, so titles can change without breaking links). The pattern has since been imitated across digital gardens — a recognizable, transferable interaction paradigm. Also one of the most information-dense sites in this entire survey.

### Bret Victor

[worrydream.com](https://worrydream.com/) — interaction and interface researcher; "Inventing on Principle," "Learnable Programming," explorable explanations; now runs Dynamicland.

The homepage is a midnight-indigo reverse-chronological life archive. On the near-midnight blue float two pale ink drawings — Don Quixote charging, and a windmill. Tilting at windmills is both the idealist's self-portrait and a precise echo of the life-mission statement at the top ("I've dedicated my life to creating a humane dynamic medium") — a signature motif, not decoration. The body is a 2024→1999 timeline from Dynamicland back through Learnable Programming and Inventing on Principle to the Apple years, plus a "Bits & blurts" margin. One typeface (Avenir), restrained throughout, with yellow highlights marking his own choice of most-important entries.

The tension worth noting: the homepage itself is a restrained, nearly static archive, while his signature interactive explanations — reactive documents, Tangle, the explorables — live in the linked essay pages, not here; and his center of gravity has moved to dynamicland.org. As thought, he's one of the sources of the tools-for-thought lineage, upstream of Matuschak and the digital gardens. As a homepage, it's the "archive plus index" form of site-as-work — different from the sites whose craft is on the front page.

### Don Norman

[jnd.org](https://jnd.org/) — cognitive scientist, father of UX, author of "The Design of Everyday Things."

A strong-content, weak-craft specimen: the content is vast and highly active (essays, books, videos, the DNDA award and summit, updated into 2026), but the web layer is nearly zero craft — system fonts, no typeface of his own, a visual signature reduced to a red accent and hand-drawn quote marks, a big hatted portrait over a slogan. There's something fitting about the usability patriarch's own site doing no visual design at all and giving everything to the articles — you can read it as content-and-usability-first, and it is also genuinely close to a generic WordPress blog. The content is substantial and authoritative.

### Irene Au

[ireneau.com](https://www.ireneau.com/) — led design at Netscape, Yahoo!, and Google; Udacity design VP; now design partner at Khosla Ventures; also a yoga teacher of ten years.

A presentable, restrained, formally standard minimal serif site: white ground, single column, almost no images, Marcellus roman headings with PT Serif body — an all-serif pairing that gives it a bookish editorial elegance, which is its entire visual signature. The homepage is simply the About essay. What actually distinguishes it is the blog's mix: hard design pieces (critiques of the canonical design process diagram, UX reading lists) sit beside body-and-mind essays (Design and the Self, how to start yoga, handling jealousy, Gibran). The "design leadership × mindfulness" positioning is written directly into the content — a content-layer signature rather than a visual one. Active into late 2025.

### Mike Matas

[mikematas.com](https://mikematas.com/) — UI/interaction designer on the original iPhone, co-founder of Push Pop Press (became Facebook Paper), Nest, Instant Articles, founder of Lobe (acquired by Microsoft).

A restrained, finely-machined display site, one tier above the template card sites: self-built, one proprietary typeface (Lab Grotesque), pure white, with an extremely slow fade-in entrance and overscroll disabled to control the scroll feel. The craft lives in these quiet micro-decisions — entrance, type, whitespace — which fits his reputation as an interaction and motion designer. The first screen lays out device mockups running his products (Lobe, Instant Articles, Paper, Nest, Push Pop Press, Apple), the UI nearly invisible so the screenshots star.

Two clarifications. The displays are static — 46 webp images, not interactive demos — so the craft stops at beautiful static presentation plus a considered entrance; it never reaches a transferable interaction paradigm. And there's a rare crediting ethic: every project lists its full collaborator roster (Zuckerberg, Chris Cox, Kevin Scott…), writing "design is a team sport" into the portfolio itself. Overall it's the personal, non-commercial, finely-made version of the work-first pattern — in the same quiet register as Fukasawa, plus the hand feel of a self-built site.

### Josh Carpenter

[joshcarpenter.ca](https://joshcarpenter.ca/) — product designer / UX engineer; Mozilla (Firefox OS, VR UX lead) → Google (Maps, VR/AR Staff UX) → Tessl (AI).

A flat, Swiss-international portfolio scroll pushed to a single dimension: near-white gray ground, no color, no shadows, no rounded corners, no gradients — everything divided by thin rules and grid alignment. One typeface (Geist, Vercel's neutral grotesque), restrained even in weight changes, zero serifs, zero decoration. The flatness is a position, not a default: it refuses visual hierarchy in favor of informational order — project titles left, right-aligned tech tags, a three-column CV table below — the whole page reading like a well-drafted spec document, which matches the UX-engineer identity exactly.

Flat doesn't mean thin: the page runs past 12,000 pixels and embeds 23 auto-playing prototype videos — VR/AR, 3D web, AI prototypes — so the site genuinely carries the evidence rather than routing you elsewhere. Closest relative is Mike Matas (top product designers, self-built, finely made), in opposite temperaments: Matas is warm white, static images, slow entrances; Carpenter is cold gray, video prototypes, zero motion. The craft is in the extreme restraint of the typesetting system itself.

### Brian Lovin

[brianlovin.com](https://brianlovin.com/) — product designer (GitHub, Campsite, now Notion); his personal site was famous as a digital-garden landmark.

The thing worth recording: a famous design, demolished by its own author. His three-pane, app-like personal site — sidebar, list pane, detail pane, like a native app — was one of the most imitated personal site patterns around. It's gone. What's there now is a single near-black page in Inter, about 1,600 pixels total: name, a one-line bio (making AI products at Notion, after Campsite's acquisition), three icons, five recent posts, and a fourteen-row project index (HN reader, App Dissection, Stack, AMA, TIL, Listening, Sites, Shiori, Staff Design, the Design Details podcast, Crit, HN CLI, Tax UI — his product trail in one list).

Three traces of the old app-like shell survive: a hamburger that opens a drawer sidebar, a "Brian Lovin / Writing" breadcrumb bar on article pages, and the ❤ reaction counts that were his trademark feature. Article pages are dark, narrow, date-plus-headline, clean. Writing runs into August 2026 — front-line notes on the AI era.

The site is very simple, and really reads like a developer's site — writing plus products, a product designer arriving at an engineer's form. From "website as app" to a content-first dark index: a ready-made specimen of creative evolution. And the content is substantial: beyond the AI writing, App Dissection (teardowns of well-designed apps) and Sites (a curated list of well-designed websites) are aesthetic resources in their own right.

### Pablo Stanley

[pablostanley.com](https://www.pablostanley.com/) — product designer and illustrator of ~20 years; design at Vercel on v0; created Blush and Lummi (acquired by Udemy in 2025).

A near-black, DM Sans, fade-in ledger of a career — one page, four books of accounts: NOW (eleven rows: Hilos, Efecto, Newt, Yoinks, Pixabots, Desigeist, Remoto, squig, Vercel Docs, v0, Design Team), PREVIOUS (sixteen rows: Lummi, Blush, Musho "RIP the site, here's the talk", Avataaars, Humaaans, Open Peeps, Open Doodles, The Design Team comics…), PLACES I'VE WORKED, and ABOUT plus ELSEWHERE. Every row has the same shape: bold name, one line, domain link, year range, thin rule below. The page reads like carefully kept books.

The signature is the inversion: an illustrator famous for libraries half the internet has used — Avataaars, Humaaans, Open Peeps — runs a site with zero illustrations. One small logo, not another image anywhere; the visuals are outsourced to the links, and the persona is carried entirely by microcopy: "wannabe writer," "No shady ads," "I write on Substack when I remember," growing up in Mexico "drawing on gig posters, comics, punk flyers. That part never left." — and a closing "Un abrazote." The warmth of the words substitutes for the warmth of the drawings.

Extremely active: a string of 2025–2026 AI projects alongside the v0 day job. Same species as Brian Lovin's site but without the writing line — Brian runs writing plus products, Pablo runs products only, with the writing outsourced to Substack. The appeal is the copywriting persona and the ledger form; the web craft itself is conventional.

## Developers & design engineers

### Josh W. Comeau

[joshwcomeau.com](https://www.joshwcomeau.com/) — front-end engineer and educator, known for interactive tutorials.

Comeau's site is the inverse of the restrained camp: where others sign by removing things, Josh signs with a delight layer — deliberately adding personality in. The premise matters: it isn't an empty showpiece. The homepage is dense with substantial technical articles, and the delight wraps the content rather than replacing it. That's what makes it work — content and delight coexist.

The delight layer is a full set of signatures: a like button you can press repeatedly, filling from the bottom like liquid, grinning as it goes (turning "like" from binary into "how much," with a six-figure cross-user count); a 3D Josh dangling upside-down in the footer; interaction sound effects on by default (the toggle reads "Disable sounds" — rare and bold); a generative canvas landscape of hills and clouds; a 3D character that changes outfits with dark mode; and handwriting-font asides ("Drag me!") in Sriracha. The type is a three-piece kit — Wotfard for warm geometric body text, Cartograph CF for code, Sriracha for the playful annotations — with hot pink `#FF1A81` as the accent.

More importantly, the site practices what it teaches: his articles are interactive guides with live draggable demos embedded — the content is the interaction demo — and he literally sells a course called "Whimsical Animations" while the site itself is the demonstration. The tension is accessibility: sounds on by default and heavy motion require respecting `prefers-reduced-motion`; delight can't become an imposition.

### Lee Robinson

[leerob.com](https://leerob.com/) — developer advocate of the Next.js and Vercel ecosystem.

Lee's site is Comeau's extreme opposite that proves the same rule. It's reading-first to the limit: pure text, centered single column, dark warm ground, underlined links — no nav bar, no images (zero), no canvas, no micro-interactions. The one typeface is STIX Two Text, a literary serif optimized for long scholarly reading — a declaration that this is a place for reading. Someone who can build any interaction chose to make the medium disappear entirely; the writing is the product.

But minimalism isn't free — it bets the entire identity on the quality of the opinions. When the visual signature is zeroed out, everything rides on the content, and Lee's holds up: "Things I Believe" reads partly as familiar tech aphorisms (Speed is a superpower; Grit > talent), but the list as a whole is specific and personal, with enough spicy concrete takes mixed in ("Clear writing is clear thinking," "Never use the word 'webinar' ever again") that it maps him rather than generic wisdom, and the scannable list form makes the opinions easy to remember and share. The core insight: minimalism is a choice to go all-in on your opinions — the more visuals you remove, the stronger your content has to be.

### Emil Kowalski

[emilkowal.ski](https://emilkowal.ski/) — design engineer at Linear, known for motion and UI craft.

Emil is famous for silky UI motion — Sonner and Vaul are reference implementations, and he teaches animation — which makes the site's restraint the whole point: a motion specialist whose personal site barely moves. Light ground, text-first, three plain lists (Today / Projects / Writing) and one rounded newsletter pill; zero images, zero canvas.

The writing titles expose the core — they're all about taste and restraint: "You Don't Need Animations," "Developing Taste," "Train Your Judgement," "Agents with Taste." The site is the purest possible case of practicing what you preach: someone who can animate anything chooses stillness because his mature taste is knowing when not to move. It isn't zero-decoration though — the craft hides in precision: every link transitions smoothly, hovers float up a fraction, the fonts are a custom sans/mono/serif set, and the Subscribe pill is the one carefully designed object on the page. With Josh and Lee, he completes the content-first spectrum: maximal delight, restrained precision, bare text.

### Pedro Duarte

[ped.ro](https://ped.ro/) — creator of Radix UI; previously Modulz and Raycast.

Pedro's site turns his bio into a depth-of-field photograph. The whole introduction is on the page, but every word gets its own blur: focus words are sharp and pill-framed (PEDRO / RAYCAST / BARCELONA), the rest blurred to bokeh. Your eye is forced to the focus points while the full bio stays present as background, his portrait showing through behind the text via blend mode. It rhymes with his photography section and the film-frame counter in the corner: the site itself is composed like a photograph.

It isn't a static composition — clicking the framed connector words unlocks the next block of content (Radix Collapsible under the hood), a click-to-reveal storytelling pattern inspired by Los Feliz Engineering. And the best layer comes from his own write-up: the entire visual language derives from jazz record covers, down to specific albums — the orange from Lee Morgan's Cornbread, the type pairing (Editorial New × Neue Montreal) from Milt Jackson sleeves, the blurred monochrome from Thelonious Monk, the pill buttons from Blue Note. Two off-work identities — jazz and photography — translated into an interface. Built with Next.js and his own Radix systems; he leaves one good line: the simpler the design, the more iterations it takes.

### Jhey Tompkins

[jhey.dev](https://jhey.dev/) — design engineer known for CSS and interaction experiments.

Jhey built his name on "wait, how did you do that?" UI demos, but his homepage is surprisingly restrained and text-first: dark ground with a faint workshop grid, DM Serif Text headline ("Making your ideas click"), Inter body. The wildness lives in the demos he links out to — the same pattern as Emil, a master's homepage quieter than his reputation — but Jhey sprinkles in more personality than Emil allows himself.

The signature is presence: an SVG bear-line mascot and a handwritten "Jhey" scribble as personal marks, and at the bottom a live now-status rendered in the dot-matrix font Doto like a little device screen — location, live weather and time, the demo he's building, the game he's playing, the song he's listening to. "Where I am and what I'm doing right now" as a living readout. Astro under the hood, coral accent specified in oklch — a very CSS-person choice. He sits between the restrained camp and the delight camp: text-first at the surface, personality in the details.

### Cassidy Williams

[cassidoo.co](https://cassidoo.co/) — senior director of developer advocacy at GitHub; open source and a long-running newsletter.

A warm dark-gray personal blog set entirely in iA Writer Mono — a coherent "writer's terminal" mood. No courses (just a free newsletter), frequent updates, and plenty of humanity: the round photo holding a mechanical keyboard, "make memes and dreams and software," a "read a random one!" link. Content-first with light personality; no interaction experiments or visual craft, standing on a single mono aesthetic and a personable voice.

### Sindre Sorhus

[sindresorhus.com](https://sindresorhus.com/) — full-time open source author; a vast npm catalog and macOS apps.

A polished minimal landing page: dark ground, a circular avatar wrapped in a glow, a pink-purple gradient name, two pill CTAs (Apps / Code), a footer quoting "Think Different." The homepage is this one screen; the actual content — the enormous npm catalog, the macOS apps — lives behind /apps and /code. A bit more atmosphere craft than a plain text profile (glow, gradient), no interactive depth or content POV: a well-made front door.

### Evan You

[evanyou.me](https://evanyou.me/) — creator of Vue and Vite; founder of VoidZero.

A tasteful minimal identity page: light pure-text single column, the name in indigo italic serif, clean sans bio paragraphs (hobbies included: soulslikes and roguelikes, karaoke, Gunpla, mechanical watches), links with green highlight underlines. Deliberate minimalism rather than absence of design — but thinner than Lee's: a pure bio page with no content stream and no interaction.

### Guillermo Rauch

[rauchg.com](https://rauchg.com/) — founder and CEO of Vercel.

A minimal dark blog index: year, title, and a right-hand read-count column, spanning 2014–2025 — sparse posting, but each piece is a heavily-read long essay (Pure UI at 706k, 7 Principles of Rich Web Apps at 738k). The read-count column is the one mark: transparent reach numbers double as social proof and as a way to find the hits. Very thin otherwise, no interaction.

### Dan Abramov

[overreacted.io](https://overreacted.io/) — Redux author, former React core team, now at Bluesky.

overreacted.io is a landmark among developer blogs, and still updates frequently (mid-2026, mostly atproto and decentralized-social topics). Design-wise it's the same minimal content blog as Lee's and Guillermo's, but with the strongest voice: pink bold titles and a wry one-line subtitle per post ("How to Fix Any Bug"; "The joys of vibecoding") give it unmistakable tone. These minimal content blogs have converged in form; Dan is the one with the most fame, influence, and personality — but the design dimension still isn't where the craft is.

### Brittany Chiang

[brittanychiang.com](https://brittanychiang.com/) — front-end engineer whose portfolio is one of the most-copied templates around.

The portfolio itself is slick: a sticky left column against a scrolling right column, a spotlight glow following the cursor, a slate-900 and teal Tailwind system, Inter with teal tech-tag pills, personality via a Zelda joke ("searching for Korok seeds"). And she works in accessibility — the site is genuinely accessible and pixel-perfect, consistent with the day job.

What makes it notable is sociology rather than design. The portfolio is open source — one of GitHub's most-forked portfolio repos — and the navy-and-teal look became so recognizable it turned into "the Brittany Chiang look." To be precise: she didn't invent the underlying patterns (sticky sidebars, single-page sections, dark themes all predate her); what she did was polish a specific, recognizable visual system and open-source it, and the most-copied version is actually her older v4. The critical judgment: good-looking, but without deeper design intent, and over-replication has worn it out. It's the top-spec version of a well-polished generic template — clean, usable, recognizable — and a case study in how a distinctive personal look, once widely copied, degrades from signature to trope.

### Lynn Fisher

[lynnandtonic.com](https://lynnandtonic.com/) — designer/developer known for redesigning her site annually and for CSS experiments.

The most anti-minimal site in the batch, and its core signature is treating the site as an annual creative ritual: hand-built, completely redone every year — currently v. XIX — with /archive preserving every previous version, making the evolution visible. This year's edition is a dark gothic manuscript world where typography carries the concept: the title face is Hubano-Rough (a paid display serif from SimpleBits inspired by hand-painted Cuban cigar-box lettering, with ornamental crossbars on A and H — FISHER's H gets a small diamond inlay), the body is the ink-textured Sydonia Atramentiqua, the menu is set like an antique table of contents with leader dots and Roman numerals, red on grain like a seal stamped on old paper.

The hidden craft is the aged-paper background: a mottled grain bitmap covering the site — made twice, one artwork for dark mode and another for light, toggled by the 🌙/☀️ button. She didn't invert or fade one texture; she painted one per mode so the parchment grain reads equally deliberate in both. Most sites lose their texture when the theme flips; Lynn treats the grain as a first-class citizen of the year's concept, and does the work twice.

The methodology is clear: each year, pick (and buy) a typeface for one concept and build a complete typographic world around it — the typeface is that year's protagonist and signature. Which is why it can't be templated: the exact opposite of Brittany Chiang, whose fixed look was cloned into fatigue. Lynn re-invents annually, and stays impossible to clone. She's also known for "responsive art" — designs that transform cleverly across screen widths. The observation worth keeping: treating the site as a continually remade creative object, rather than a finished business card, is a top-tier pattern for personal expression.

### Anthony Fu

[antfu.me](https://antfu.me/) — core team across Vue, Nuxt, and Vite; created Vitest, Slidev, VueUse, and UnoCSS.

Not flashy, but substantial, cleverly organized, and highly transferable — the value is in information architecture and visual organization rather than spectacle. Two patterns worth stealing. First, the logo résumé: the homepage compresses his sprawling open-source map into four lines — Working at / Creator of / Core team / Maintaining — each with small project icons, far denser than a text list. Second, ghost-watermark sections with Current Focus first: the Projects page groups an enormous catalog by ecosystem, each section divided by a huge, very faint watermark title, with "Current Focus" placed before the historical projects — say what you're focused on now, then let people drill into everything. A transferable answer to "how do you organize a lot of work so it stays scannable," and a light time-priority signal.

Third, dogfooding: the site is built with his own UnoCSS, VueUse, and Nuxt — the site is a live sample of his tools. Structurally a digital garden (blog, projects, talks, uses, photos, an experiments playground) with theme switching, a dot grid, Inter and DM Mono, an "af" monogram, funded by sponsorship rather than courses.

### Maggie Appleton

[maggieappleton.com](https://maggieappleton.com/) — designer, anthropologist, self-described "mediocre developer"; known for illustrated visual essays on programming, design, and anthropology, and as a leading advocate of digital gardens. Now a staff research engineer at GitHub Next.

Maggie is the anti-minimal pole of the developer group: where Lee, Emil, and Benji strip visuals away, her signature is a large body of self-drawn illustration plus a carefully layered knowledge architecture. Like Josh she adds rather than subtracts — but what she adds is illustration and information architecture, and since her core output is visual essays, the visuals aren't wrapping around the content; they are the content.

The growth-stage system is the most recognizable and most transferable piece: every piece of writing is publicly staged — 🌱 seedling (rough early idea), 🌿 budding (organized), 🌳 evergreen (reasonably complete) — with "planted" and "last tended" dates. This isn't metaphor; it's real UI on every page: an essay's header reads `ESSAYS 🌿 BUDDING`, the metadata says "Planted over 3 years ago," and every homepage card carries its stage icon. The site is organized as "a richly linked landscape that grows slowly over time," not a reverse-chronological blog. The model solves two problems at once: it lowers the publishing bar (you can ship a seedling), and it redefines old content from stale to evergreen — a three-year-old essay still tops the homepage because the archive is tended, not decaying. The most mature treatment of time in this entire survey.

Her two second identities — anthropology and illustration — grew directly into the site's language: abstract programming and cultural concepts drawn as visible metaphors, and the gardening metaphor of the "digital garden" itself is part of the design language. The taxonomy carries opinion too: Essays / Notes / Patterns / Smidgeons / Talks / Library / Antilibrary (unread books, after Taleb) / Now / About — each category a different maturity or length of expression. And her epistemic honesty is a voice of its own: calling herself a "mediocre developer," staging every note's maturity.

Two more devices worth stealing. The Assumed Audience box: every essay opens with a frame saying exactly who it's written for ("people who've heard of GPT-3, are loosely following ML, and care about the web flourishing…") — an unusually honest self-sorting device that lets the wrong readers exit gracefully and the right ones lock in. And the Now page: updated January 2026, startlingly personal ("Agents. AI agents are all I can see, read, build, and think about these days"; the sleep deprivation of new parenthood; even admitting she'd temporarily "lost my belief that anything I write matters") — a strong now-status specimen, same family as Benji's live clock and Jhey's dashboard. The visual craft is a full editorial-literary system: dark warm ground, high-contrast literary serif headings, a pink-and-teal wheat-sprout logo, drop caps, margin footnotes — all fitting the essayist-illustrator identity exactly. The hand-drawn painterly illustration, one per essay, is the strongest signature of all.

### Benji Taylor

[benji.org](https://benji.org/) — London-born, LA-based designer; design lead at SpaceX, former Coinbase Base design lead, founder of Los Feliz Engineering (acquired by Aave Labs).

Benji's site belongs to the minimal reading camp, same species as Lee's and Emil's: pure text, centered single column, light ground, Inter, zero images, zero canvas. A designer with an extremely hard résumé keeping the site nearly bare — another strong data point for restraint.

But it isn't zero-decoration; the whimsy is shrunk to almost nothing: a pink "New" circle drawn beside the latest post in benjiScript, his own handwriting font (SVG), and a footer showing the live local time — "8:45pm in Los Angeles, California" — next to a kaomoji `(·.·)`. Even the font stack hides lfeSans, his company's own typeface: building with type you made yourself, the lightweight version of taste-as-design-language. Worth a note: Benji founded LFE, the studio whose click-to-reveal storytelling inspired Pedro Duarte — a glimpse of a network of top design engineers who reference each other and share this minimal reading aesthetic, with benji.org as one of its hubs.
