---
title: "I Studied 100 Personal Sites of Brilliant Designers and Developers — Here's What Actually Works in 2026"
description: 'I went through ~100 personal sites of well-known designers and developers, studied 70+, and kept 55 worth talking about. What actually works, with a real site behind every claim.'
keywords: personal website, portfolio, typography, web design, designers, developers
author: ryuteakwoo
date: 2026-08-27
---

If you've built something worth showing — an open source project, good design work, writing you're proud of — at some point you'll want a personal site that does it justice. The standard way people approach this is to spend a few weekends collecting inspiration links, bookmarking a few dozen "beautiful personal sites", going back and forth on typefaces and colors, and then not shipping anything. This post is an attempt to shortcut that process by looking at what the people who are actually good at this do.

I went through roughly a hundred personal sites of well-known designers and developers — from [Jony Ive](https://www.lovefrom.com/jony) (the LoveFrom page) to [Stefan Sagmeister](https://sagmeister.com/) (album covers for the Rolling Stones, among other things), from [Evan You](https://evanyou.me/) (Vue) to [Rasmus Andersson](https://rsms.me/) (Inter). I ended up seriously examining seventy-plus of them, and fifty-five turned out to be worth discussing. What follows are the patterns that held up across those fifty-five, with a real site behind every claim — including the sites where things went wrong, which inspiration lists generally don't show you.

## Content comes first

The most consistent pattern across these sites isn't a typeface, a palette, or an interaction. It's that the content is the point and the site gets out of the way.

[Sagmeister's homepage](https://sagmeister.com/) has no hero section, no tagline, not even an introduction: eighty project thumbnails fill the screen, and that's the landing page. [Iris van Herpen](https://www.irisvanherpen.com/) is the same idea — full-bleed campaign imagery, UI reduced to almost nothing. Even [Josh Comeau](https://www.joshwcomeau.com/), whose site is about as showy as this group gets (sound effects, easter eggs, a 3D character that changes outfits when you toggle dark mode), uses all of that as wrapping around dense technical writing. The flourishes are the wrapper; the articles are the product.

The most convincing data point here is Brian Lovin. His three-pane, app-like personal site was one of the most imitated personal site designs of its era. Open [brianlovin.com](https://brianlovin.com/) today and it's gone — torn down by its own author and replaced with a single near-black page: a one-line bio, five recent posts, fourteen rows of projects. My read on this: his writing and products now speak for themselves, and the shell had become overhead.

Note that "content first" doesn't mean plain. [Lee Robinson](https://leerob.com/) strips his site down to text on a page and bets everything on the quality of his opinions. [Yoon Ahn's site](https://www.yooniverse.design/) runs an elaborate 3D-fold effect over everything — but the thing being folded is her work. Either extreme is fine. What fails is the site upstaging the content.

There's a test you can apply before building anything: when someone leaves your site, should they remember your work, or your CSS?

## Typography is half of design

If I could only give one visual suggestion for a personal site, it would be about type. Typography is half of design, and looking at this set of sites, that might be an understatement: the pages that read as high-end almost all get there through type, and the pages that read as messy almost always break there first.

The pattern among people who are good at this is surprisingly uniform: fewer typefaces. [Sagmeister's](https://sagmeister.com/) entire site is one custom face in two weights — nav, headings, body, forms, all of it — with hierarchy built entirely from size and weight. [Iris van Herpen](https://www.irisvanherpen.com/) is essentially just Futura. [Josh Carpenter](https://joshcarpenter.ca/) uses one typeface (Geist), no serifs, no decoration; the page reads like a spec document. One face means one voice. It forces you to create structure with actual structure, instead of faking it by swapping fonts.

A second face is fine if it has a job. [Lotta Nieminen](https://www.lottanieminen.com/) uses Unica77 for every piece of small UI text and Romie, a serif, for display — a clean division of labor. [Bart Hess](https://www.barthess.com/) pairs Brewery with Futura as a deliberate warm/cold contrast. In both cases the second face is another voice in the same piece, not another singer.

[Ryan Singer's site](https://www.ryansinger.co/) shows what happens with four: a contemporary geometric grotesque for headings, a nineties screen serif for body text, a monospace, and Open Sans mixed in. Each is fine on its own; together they talk past each other, and it drags down the credibility of content that is otherwise quite sincere. More typefaces isn't richness. It's loss of control.

The strongest version of the principle comes from people who make type for a living. [Rasmus Andersson's](https://rsms.me/) site changes palette and layout on every page, and the one constant is that everything is set in his own Inter. Neville Brody turned [Brody Fonts](https://www.brody-associates.com/brody-fonts) into an interactive specimen book — you can rewrite the sample sentence, try the face, buy it on the spot. For these people type isn't a decoration option; it's identity.

The practical version: start with one typeface and build hierarchy with size and weight. Add a second only if you can say what its job is. If you can't, don't.

## Your taste is a design language

One step past "form serves content": the things you love can become the form. Not adopting whatever style is popular — translating your own taste into color, type, motifs, and interactions.

The cleanest example is [Pedro Duarte](https://ped.ro/), of Radix UI. His site's entire visual system comes from jazz record covers, down to specific albums: the orange from Lee Morgan's Cornbread, the type pairing from Milt Jackson covers, the blurred monochrome from Thelonious Monk, the pill buttons from Blue Note sleeves. Layered on top is the depth-of-field language of his photography hobby. Two identities that have nothing to do with his job grew directly into the interface.

[Leta Sobierajski](https://letasobierajski.com/), an installation artist, takes another route: the primary-color playfulness of her physical work is carried straight into the site. A red square, a blue triangle, and a yellow circle are her email, Twitter, and Instagram links; they float above every page, rotate slowly, and you can drag them around the screen. What you play with on her site and what you experience in front of her installations is the same joy.

[Maggie Appleton](https://maggieappleton.com/) shows that the source doesn't have to be pop culture. Anthropology training plus illustration skill became a site-wide language of visual metaphor — abstract programming concepts drawn as pictures you can see, and even the gardening metaphor of her "digital garden" is part of the design language.

Why this works: a style can be copied, but the source of your taste can't. A template can reproduce navy-blue-plus-monospace (ask [Brittany Chiang](https://brittanychiang.com/), whose look has been cloned to the point of fatigue), but it can't reproduce "jazz covers × photography." The one boundary condition: the taste has to be translated into actual design decisions — color, type, motif, interaction. Written in your About page, it's a label. Built into the interface, it's a language.

## Details: cursors, nav, and small widgets

The rules above are about how a site stands up. What separates "fine" from "memorable" is often a handful of extremely specific elements — the cursor, the nav, a counter. These three spots are where this group placed their most concentrated bets.

### Cursors and hover

The cursor is the one thing on a page that follows the visitor everywhere, and most sites never touch it. That's the opportunity: one line of CSS turns your highest-frequency visual touchpoint into a signature.

[Robert Wun's](https://www.robertwun.com/) version is the textbook one. His custom wordmark ends in a solid dot, and your cursor is that dot — an inverting circle that follows you, becomes the ○/● view toggle on hover, and spins as the loading state. One dot, threaded from wordmark to pointer to state to feedback. [Kiko Kostadinov](https://kikokostadinov.com/) pairs an inverting dot cursor with the measurement grid that covers his site; [Sagmeister](https://sagmeister.com/) switches the cursor to a crosshair on project pages, like a drafting tool, in the same register as the geometric restraint everywhere else. The quietest version is [Jony Ive's page](https://www.lovefrom.com/jony), where the comma at the end of "LoveFrom," is the mechanism.

Hover is the other half: you offer the site your pointer, and it answers. On [Leta Sobierajski's](https://letasobierajski.com/) nav, every word answers differently — hover the site name and the letters ripple in a wave; hover "Profile" and they flip like cards; hover a project image and it tilts five degrees along with its caption. [Sagmeister](https://sagmeister.com/) demonstrates the restrained version: thumbnails dim, a title fades in, and that's it. Both work. What they share is a personality, applied consistently.

One warning: hover doesn't exist on phones. If your signature lives entirely in the pointer, touch users never see it. Treat cursor work as a bonus layer, or leave equivalent cues for touch.

### Nav and tabs

The nav is the only element that appears on every page of a site, so its personality effectively sets the site's.

[Lotta Nieminen](https://www.lottanieminen.com/) turns the whole viewport into a printed page: the nav is rotated ninety degrees and pushed into the four margins, like crop marks, leaving the entire text block to the work — and the first screen has no nav at all. You get hit by the work first; the chrome shows up when you scroll. [David Rudnick](https://davidrudnick.org/) does the opposite: an ultra-wide tab bar floats above everything at the highest z-index, permanently, while the archive sprawls underneath — closer to the toolbar of an instrument than to website navigation. [Neville Brody's site](https://www.brody-associates.com/) makes the nav participate in the color of the page: one line of CSS (`mix-blend-mode: difference`) inverts the nav text pixel-by-pixel against whatever scrolls beneath it — black over white, white over black, a silvery blue over the orange sections. Always readable, always moving.

The lightest version is [Rasmus Andersson's](https://rsms.me/): a small dot before the nav that changes color on every page — simultaneously a "you are here" light and a sample of that page's palette. At that point the nav has become part of the sign system.

### Small status widgets

Big elements handle looking good. Small ones handle two things that are more expensive: honesty, and signs of life.

[Maggie Appleton](https://maggieappleton.com/) labels every post with a growth stage — 🌱 seedling, 🌿 budding, 🌳 evergreen — plus "planted" and "last tended" dates. A tiny tag that tells the reader exactly how sure she is about an idea. [Lotta's](https://www.lottanieminen.com/) margin counter ticks 1 / 12 as you scroll through projects. [Josh Comeau's](https://www.joshwcomeau.com/) like button can be pressed repeatedly and fills up from the bottom, grinning as it goes — a binary action turned into "how much."

On the signs-of-life side, [Benji Taylor's](https://benji.org/) footer shows his live local time next to a kaomoji, and [Jhey Tompkins](https://jhey.dev/) renders a little dot-matrix dashboard: current location, weather, the demo he's building, the game he's playing, the song he's listening to. None of this is functional in any normal sense. All of it makes a static page feel inhabited — you can tell there's a person on the other side of the screen.

What these have in common is that they're cheap. A tag, a counter, a line with the time — anyone can afford them. The difference is thinking of them at all. A signature doesn't need to be big; it needs to be accurate.

## Closing: if you only take three things

After all these sites, there are really only three things worth taking with you.

One: content leads. When a visitor leaves, what they remember should be your work, not your CSS — and if you don't yet have work, opinions, or writing worth remembering, go accumulate that first; the site can wait. Two: cut down to one typeface and build hierarchy with size and weight — add a second only when you can say what its job is. Three: translate the things you love into design decisions. What lands in color, type, motif, and interaction is a language; what sits in your About page is a label.

As for the details — the cursor, the nav, a line of local time in the footer — they're all cheap. The expensive part is thinking of them. A signature doesn't need to be big; it needs to be accurate.

So stop adding to your "personal site inspiration" folder. You could start tonight: cut your site to one typeface, or even simpler, put your current local time in the footer. Start with one accurate stroke.

## Appendix

[Site-by-site notes on 55 personal sites →](/posts/personal-sites-notes)
