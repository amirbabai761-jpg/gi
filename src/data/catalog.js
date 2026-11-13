// Editorial imagery is served from Unsplash's CDN with fixed crop parameters so
// product cards keep consistent proportions and payloads stay small.
export const photo = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  hero: '1633934542430-0905ccb5f050',
  heroPortrait: '1616837874254-8d5aaa63e273',
  portraitPearl: '1585960622850-ed33c41d6418',
  portraitEarrings: '1671644730555-916aa8d8157f',
  artisan: '1785809998813-ee7a68ec1346',
  mannequin: '1722410180687-b05b50922362',
  ringsLine: '1543294001-f7cd5d7fb516',
  ringsTextile: '1608508644127-ba99d7732fee',
  bridalRoses: '1515934751635-c81c6bc9a2d8',
}

export const categories = [
  {
    slug: 'rings',
    name: 'Rings',
    tagline: 'Solitaires, bands & signets',
    image: '1605100804763-247f67b3557e',
  },
  {
    slug: 'necklaces',
    name: 'Necklaces',
    tagline: 'Pendants & fine chains',
    image: '1771515411694-57fb626159d1',
  },
  {
    slug: 'earrings',
    name: 'Earrings',
    tagline: 'Hoops, studs & drops',
    image: '1693213085235-ea6deadf8cee',
  },
  {
    slug: 'bracelets',
    name: 'Bracelets',
    tagline: 'Tennis lines & chains',
    image: '1602173574767-37ac01994b2a',
  },
  {
    slug: 'bridal',
    name: 'Bridal Collection',
    tagline: 'For the promise of forever',
    image: '1515934751635-c81c6bc9a2d8',
  },
]

export const collections = [
  {
    slug: 'modern-heirlooms',
    name: 'Modern Heirlooms',
    copy: 'Sculptural gold pieces made to be passed down.',
    image: '1616837874254-8d5aaa63e273',
    span: 'tall',
  },
  {
    slug: 'color-of-elegance',
    name: 'Color of Elegance',
    copy: 'Sapphires, emeralds and rare coloured stones.',
    image: '1722410180687-b05b50922362',
    span: 'wide',
  },
  {
    slug: 'everyday-essentials',
    name: 'Everyday Essentials',
    copy: 'Weightless chains and studs for every hour.',
    image: '1602173574767-37ac01994b2a',
    span: '',
  },
  {
    slug: 'forever-begins-here',
    name: 'Forever Begins Here',
    copy: 'Engagement rings designed around your story.',
    image: '1515934751635-c81c6bc9a2d8',
    span: '',
  },
]

export const products = [
  {
    id: 'aurora-solitaire-ring',
    name: 'Aurora Solitaire Ring',
    category: 'rings',
    collection: 'modern-heirlooms',
    price: 2480,
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
    metal: '18k Yellow Gold',
    images: ['1605100804763-247f67b3557e', '1543294001-f7cd5d7fb516'],
    blurb: 'A brilliant-cut solitaire held in a whisper-thin cathedral setting.',
    description:
      'The Aurora is our most requested engagement ring — a 1.2 carat brilliant-cut diamond raised on a hand-drawn cathedral setting so light passes freely beneath the stone. Each band is forged in our atelier and finished by hand for a soft, mirror-like lustre.',
    metals: ['18k Yellow Gold', '18k White Gold', '18k Rose Gold'],
    sizes: ['4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8'],
    specs: [
      ['Metal', '18k recycled gold, 2.1g'],
      ['Centre stone', '1.2ct lab-grown diamond'],
      ['Clarity / Colour', 'VS1 · F'],
      ['Setting', 'Four-claw cathedral'],
    ],
  },
  {
    id: 'lumiere-diamond-band',
    name: 'Lumière Pavé Band',
    category: 'rings',
    collection: 'forever-begins-here',
    price: 1890,
    rating: 4.8,
    reviews: 96,
    badge: 'New Arrival',
    metal: '18k White Gold',
    images: ['1762505464779-17f78cbfa8b4', '1543294001-f7cd5d7fb516'],
    blurb: 'Forty-two pavé-set diamonds wrapped in an unbroken line of light.',
    description:
      'An anniversary band with presence: forty-two hand-set diamonds travel the full circumference, each one aligned by eye so the line of light never breaks. Designed to sit flush beside the Aurora solitaire.',
    metals: ['18k White Gold', '18k Yellow Gold', 'Platinum'],
    sizes: ['4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8'],
    specs: [
      ['Metal', '18k recycled white gold'],
      ['Stones', '42 lab-grown diamonds, 0.84ct total'],
      ['Width', '2.4mm'],
      ['Finish', 'High polish'],
    ],
  },
  {
    id: 'sersaphine-pendant',
    name: 'Seraphine Pendant Necklace',
    category: 'necklaces',
    collection: 'everyday-essentials',
    price: 1450,
    rating: 4.9,
    reviews: 214,
    badge: 'Bestseller',
    metal: '18k Yellow Gold',
    images: ['1782400027969-a4970b076eb1', '1683099869102-bcf8791eb0e5'],
    blurb: 'A single moonstone drop on a hand-braided fine chain.',
    description:
      'Named for the first light of morning, Seraphine suspends a cabochon moonstone from a hand-braided 18k chain. Worn alone it reads as a quiet signature; layered with the Céleste it becomes something entirely your own.',
    metals: ['18k Yellow Gold', '18k Rose Gold'],
    sizes: ['40cm', '45cm', '50cm'],
    specs: [
      ['Metal', '18k recycled gold'],
      ['Stone', '2.4ct rainbow moonstone'],
      ['Chain', 'Braided cable, 1.1mm'],
      ['Clasp', 'Lobster, adjustable'],
    ],
  },
  {
    id: 'celeste-diamond-necklace',
    name: 'Céleste Diamond Necklace',
    category: 'necklaces',
    collection: 'modern-heirlooms',
    price: 4200,
    rating: 5,
    reviews: 74,
    badge: 'Limited Edition',
    metal: '18k White Gold',
    images: ['1771515411694-57fb626159d1', '1761569105762-c54a69466d06'],
    blurb: 'Nine graduated diamonds floating on an invisible setting.',
    description:
      'Nine graduated diamonds appear to float, held by a nearly invisible gallery so the necklace reads as a single ribbon of light. Made in a limited series of fifty, each numbered on the clasp.',
    metals: ['18k White Gold', 'Platinum'],
    sizes: ['42cm', '45cm'],
    specs: [
      ['Metal', '18k recycled white gold'],
      ['Stones', '9 diamonds, 2.1ct total'],
      ['Setting', 'Invisible gallery'],
      ['Edition', 'Numbered, limited to 50'],
    ],
  },
  {
    id: 'velvet-pearl-strand',
    name: 'Velvet Pearl Strand',
    category: 'necklaces',
    collection: 'color-of-elegance',
    price: 980,
    rating: 4.7,
    reviews: 61,
    badge: 'New Arrival',
    metal: 'Freshwater Pearl',
    images: ['1595345705177-ffe090eb0784', '1654699991520-aaaf4dd2608b'],
    blurb: 'Hand-knotted freshwater pearls with a soft, velvet lustre.',
    description:
      'Each pearl is matched by hand for lustre and orient, then knotted on silk between every bead so the strand moves like fabric. Finished with a solid gold clasp that can be engraved.',
    metals: ['Freshwater Pearl', 'Akoya Pearl'],
    sizes: ['42cm', '45cm'],
    specs: [
      ['Pearls', '7.5–8mm freshwater, AAA lustre'],
      ['Stringing', 'Hand-knotted silk'],
      ['Clasp', '18k gold, engravable'],
      ['Length', 'Adjustable'],
    ],
  },
  {
    id: 'solene-hoop-earrings',
    name: 'Solène Hoop Earrings',
    category: 'earrings',
    collection: 'everyday-essentials',
    price: 760,
    rating: 4.8,
    reviews: 187,
    badge: '',
    metal: '18k Yellow Gold',
    images: ['1617038220319-276d3cfab638', '1708220040824-b273dd0a17cc'],
    blurb: 'Sculpted hoops with a twisted rope silhouette.',
    description:
      'A quiet study in volume: solid gold is twisted by hand into a rope, then polished until the highlights run in a continuous spiral. Lightweight enough to forget you are wearing them.',
    metals: ['18k Yellow Gold', '18k Rose Gold', 'Sterling Silver'],
    sizes: ['Small · 18mm', 'Medium · 24mm', 'Large · 32mm'],
    specs: [
      ['Metal', '18k recycled gold'],
      ['Diameter', '24mm (medium)'],
      ['Weight', '2.8g per earring'],
      ['Closure', 'Hinged snap'],
    ],
  },
  {
    id: 'eclat-diamond-studs',
    name: 'Éclat Diamond Studs',
    category: 'earrings',
    collection: 'modern-heirlooms',
    price: 2150,
    rating: 4.9,
    reviews: 143,
    badge: 'Bestseller',
    metal: '18k White Gold',
    images: ['1693213085235-ea6deadf8cee', '1722410180687-b05b50922362'],
    blurb: 'Half-carat brilliance in a four-claw basket setting.',
    description:
      'The stud reduced to its essence: two half-carat diamonds held in open baskets so light enters from every angle. The posts are positioned slightly high so the stone sits proud of the lobe.',
    metals: ['18k White Gold', '18k Yellow Gold', 'Platinum'],
    sizes: ['0.5ct pair', '1.0ct pair'],
    specs: [
      ['Metal', '18k recycled white gold'],
      ['Stones', '2 diamonds, 0.5ct total'],
      ['Setting', 'Four-claw basket'],
      ['Closure', 'Screw-back posts'],
    ],
  },
  {
    id: 'aurelia-tennis-bracelet',
    name: 'Aurelia Tennis Bracelet',
    category: 'bracelets',
    collection: 'modern-heirlooms',
    price: 3890,
    rating: 5,
    reviews: 52,
    badge: 'Limited Edition',
    metal: '18k White Gold',
    images: ['1705575518997-82a71bcc75a2', '1763029513623-37d488cb97b1'],
    blurb: 'A continuous line of brilliant diamonds with hidden clasps.',
    description:
      'Seventy-six diamonds set in a supple articulated line that follows the wrist without turning. The double-locking clasp disappears into the setting, leaving an unbroken circle of light.',
    metals: ['18k White Gold', 'Platinum'],
    sizes: ['16cm', '17cm', '18cm'],
    specs: [
      ['Metal', '18k recycled white gold'],
      ['Stones', '76 diamonds, 2.4ct total'],
      ['Setting', 'Four-claw line'],
      ['Clasp', 'Double-locking, concealed'],
    ],
  },
  {
    id: 'mirabelle-chain-bracelet',
    name: 'Mirabelle Chain Bracelet',
    category: 'bracelets',
    collection: 'everyday-essentials',
    price: 690,
    rating: 4.7,
    reviews: 168,
    badge: 'New Arrival',
    metal: '18k Yellow Gold',
    images: ['1602173574767-37ac01994b2a', '1655255114527-d0a834d9a774'],
    blurb: 'A fluid paperclip chain with a single gold charm.',
    description:
      'Our everyday chain, drawn slightly heavier than most so it holds its shape at the wrist. A single polished charm moves freely along the links — add more charms as the years go on.',
    metals: ['18k Yellow Gold', '18k Rose Gold'],
    sizes: ['15cm', '16.5cm', '18cm'],
    specs: [
      ['Metal', '18k recycled gold'],
      ['Link', 'Paperclip, 3.2mm'],
      ['Charm', 'Detachable sphere'],
      ['Clasp', 'Lobster'],
    ],
  },
  {
    id: 'ivoire-pearl-studs',
    name: 'Ivoire Pearl Studs',
    category: 'earrings',
    collection: 'color-of-elegance',
    price: 1120,
    rating: 4.8,
    reviews: 88,
    badge: '',
    metal: '18k Yellow Gold',
    images: ['1682822749969-61a63203c501', '1671644730555-916aa8d8157f'],
    blurb: 'Gold ball studs finished with a single freshwater pearl.',
    description:
      'A small gold sphere is forged by hand, then set with a single freshwater pearl chosen for its soft, even lustre. Weightless enough to sleep in, refined enough for evening.',
    metals: ['18k Yellow Gold'],
    sizes: ['One size'],
    specs: [
      ['Metal', '18k recycled gold'],
      ['Pearls', 'Freshwater, 9mm'],
      ['Setting', 'Hand-forged ball cup'],
      ['Closure', 'Gold post & butterfly'],
    ],
  },
  {
    id: 'amara-signet-ring',
    name: 'Amara Signet Ring',
    category: 'rings',
    collection: 'modern-heirlooms',
    price: 1340,
    rating: 4.6,
    reviews: 57,
    badge: '',
    metal: '18k Yellow Gold',
    images: ['1543294001-f7cd5d7fb516', '1762505464529-1a37df13674f'],
    blurb: 'A hand-carved signet with a softly domed face.',
    description:
      'A modern reading of the signet: the face is domed and brushed, the shoulders tapered by hand. Engraving — initials, a date, a private mark — is included and done in our atelier.',
    metals: ['18k Yellow Gold', 'Sterling Silver'],
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5'],
    specs: [
      ['Metal', '18k recycled gold'],
      ['Face', '10 × 8mm, domed'],
      ['Engraving', 'Complimentary, up to 3 characters'],
      ['Finish', 'Brushed face, polished shoulders'],
    ],
  },
  {
    id: 'eternal-promise-set',
    name: 'Eternal Promise Bridal Set',
    category: 'bridal',
    collection: 'forever-begins-here',
    price: 5600,
    rating: 5,
    reviews: 39,
    badge: 'Bestseller',
    metal: 'Platinum',
    images: ['1515934751635-c81c6bc9a2d8', '1762505464529-1a37df13674f'],
    blurb: 'A solitaire and fitted pavé band, designed as one.',
    description:
      'A bridal pair drawn as a single composition: a 1.4 carat solitaire with a fitted pavé band that curves around its basket. Both rings are made to order and delivered in our signature lacquered case.',
    metals: ['Platinum', '18k White Gold', '18k Yellow Gold'],
    sizes: ['4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8'],
    specs: [
      ['Metal', '950 platinum, 5.8g'],
      ['Centre stone', '1.4ct lab-grown diamond'],
      ['Band', '28 pavé diamonds, 0.42ct'],
      ['Made to order', '4–6 weeks'],
    ],
  },
  {
    id: 'noir-onyx-pendant',
    name: 'Noir Onyx Pendant',
    category: 'necklaces',
    collection: 'color-of-elegance',
    price: 1780,
    rating: 4.7,
    reviews: 46,
    badge: '',
    metal: '18k Yellow Gold',
    images: ['1599643478518-a784e5dc4c8f', '1631832722475-dd2ecfc47257'],
    blurb: 'Black onyx framed in a hand-bevelled gold bezel.',
    description:
      'A single slab of black onyx, cut and bevelled to a soft cushion, held in a gold bezel that traces its edge like a drawn line. Bold enough for evening, quiet enough for every day.',
    metals: ['18k Yellow Gold'],
    sizes: ['42cm', '50cm'],
    specs: [
      ['Metal', '18k recycled gold'],
      ['Stone', 'Black onyx, 18 × 14mm'],
      ['Chain', 'Fine box chain, 0.9mm'],
      ['Clasp', 'Lobster'],
    ],
  },
  {
    id: 'marguerite-heart-locket',
    name: 'Marguerite Heart Locket',
    category: 'necklaces',
    collection: 'everyday-essentials',
    price: 1520,
    rating: 4.8,
    reviews: 72,
    badge: 'New Arrival',
    metal: 'Recycled Sterling Silver',
    images: ['1588444837495-c6cfeb53f32d', '1589128777073-263566ae5e4d'],
    blurb: 'A silver heart locket that opens to hold a secret.',
    description:
      'A small heart locket on a fine silver cable chain, set with pavé stones and engraved on the reverse. Inside, two shallow compartments are sized for a photograph or a lock of hair.',
    metals: ['Recycled Sterling Silver'],
    sizes: ['40cm', '45cm', '50cm'],
    specs: [
      ['Metal', 'Recycled sterling silver'],
      ['Size', '16mm locket'],
      ['Engraving', 'Botanical, hand-cut'],
      ['Interior', 'Two photo compartments'],
    ],
  },
]

export const testimonials = [
  {
    quote:
      'The Aurora ring arrived in a lacquered case with the stone certificate folded inside. It is the first piece of jewellery I have owned that feels like an heirloom on day one.',
    name: 'Elena Marchand',
    location: 'Paris',
    rating: 5,
    piece: 'Aurora Solitaire Ring',
  },
  {
    quote:
      'I wore the Seraphine for my wedding and have not taken it off since. Three years on, the chain is still flawless and the moonstone still catches the light in the same way.',
    name: 'Aisha Rahman',
    location: 'London',
    rating: 5,
    piece: 'Seraphine Pendant Necklace',
  },
  {
    quote:
      'What sold me was the appointment — a quiet hour with a jeweller, no pressure, and a sketch of my grandmother\u2019s ring reworked into something I can wear every day.',
    name: 'Charlotte Devine',
    location: 'New York',
    rating: 5,
    piece: 'Bespoke Commission',
  },
  {
    quote:
      'The packaging alone makes it feel like an occasion, but the craftsmanship is what stays with you. The pavé band is so finely set it looks painted on.',
    name: 'Sofia Bellini',
    location: 'Milan',
    rating: 5,
    piece: 'Lumière Pavé Band',
  },
  {
    quote:
      'I ordered from Tokyo and the delivery was insured, tracked and beautifully wrapped. The Ivoire drops are even more beautiful in person than on the site.',
    name: 'Mika Tanaka',
    location: 'Tokyo',
    rating: 4,
    piece: 'Ivoire Pearl Drops',
  },
]

export const services = [
  {
    icon: 'diamond',
    title: 'Certified Quality',
    copy: 'Every stone certified, every piece hallmarked by assay.',
  },
  {
    icon: 'lock',
    title: 'Secure Payment',
    copy: 'Encrypted checkout and fraud-protected transactions.',
  },
  {
    icon: 'gift',
    title: 'Signature Packaging',
    copy: 'Lacquered case, silk ribbon, handwritten card.',
  },
  {
    icon: 'globe',
    title: 'Worldwide Shipping',
    copy: 'Complimentary insured delivery in 40+ countries.',
  },
  {
    icon: 'refresh',
    title: 'Hassle-Free Returns',
    copy: 'Thirty days to return, no questions asked.',
  },
]

export const articles = [
  {
    slug: 'choosing-the-perfect-engagement-ring',
    date: 'October 24, 2026',
    category: 'Bridal',
    title: 'Choosing the Perfect Engagement Ring',
    excerpt:
      'Cut, clarity, setting, stone — our head jeweller on the four decisions that matter, and the many that do not.',
    image: '1762505464529-1a37df13674f',
    readTime: '6 min read',
    body: [
      'A ring is worn every day for decades, which makes it a design problem before it is a diamond problem. Start with the hand: long fingers carry elongated shapes — ovals, emeralds, marquise — while a shorter hand often wears a round brilliant or a slim bezel with more ease.',
      'Then the setting. A cathedral or raised basket lets light beneath the stone and reads as classic; a bezel or flush setting is quieter, safer for a working hand, and increasingly what our clients choose. Try both on in person if you can. Photographs flatten the way a stone sits against the finger.',
      'The metal follows the skin. Yellow gold warms the complexion, platinum and white gold read cooler and more graphic, rose gold flatters almost everyone. If you plan to stack a wedding band, decide now whether the ring should sit flush — it changes the basket and the height of the stone.',
      'Finally, the stone itself. A well-cut 1.1 carat diamond will outperform a poorly cut 1.5 carat every time the light changes. Put your budget into the cut, then the colour, then the size.',
    ],
  },
  {
    slug: 'summer-jewelry-trends',
    date: 'September 12, 2026',
    category: 'Style',
    title: 'Summer Jewelry Trends to Love',
    excerpt:
      'Barely-there chains, warm gold against sunlit skin, and the return of the statement cuff.',
    image: '1585960622850-ed33c41d6418',
    readTime: '4 min read',
    body: [
      'This season is about warmth and ease. The pieces that feel new are not louder — they are softer, layered without effort and worn with everything from linen to evening silk.',
      'Layer three chains of different weights rather than one heavy piece. Keep the shortest at the collarbone, the longest just above the décolletage, and let a single charm do the talking.',
      'Gold hoops continue to dominate, but with a sculptural twist: rope textures, flattened profiles, and asymmetrical pairs. Pair them with a bare neck and a single ring — restraint is the luxury signal now.',
      'And the cuff is back. One wide, hand-hammered bracelet on a bare arm reads more modern than a wrist full of delicate pieces, particularly in the evening.',
    ],
  },
  {
    slug: 'inside-our-new-atelier',
    date: 'August 30, 2026',
    category: 'Atelier',
    title: 'Inside Our New Atelier',
    excerpt:
      'A morning with the goldsmiths in our newly opened studio — where every piece still begins at a bench.',
    image: '1785809998813-ee7a68ec1346',
    readTime: '5 min read',
    body: [
      'The new atelier occupies the top floor of a converted print house, chosen for the north light. Nine benches, one shared polishing room, and a small library of stone references that has been assembled over forty years.',
      'Every piece that leaves the house has passed through at least four pairs of hands: the model maker, the caster, the setter and the polisher. Nothing is finished by machine alone.',
      'The workshop also houses our archive — drawers of plaster models, wax carvings and client sketches. When a client commissions a redesign, we begin by looking for the original drawing.',
      'We keep visiting hours on Thursdays. If you would like to see your commission take shape, our client team can arrange an appointment.',
    ],
  },
  {
    slug: 'the-art-of-gift-giving',
    date: 'July 18, 2026',
    category: 'Gifting',
    title: 'The Art of Gift Giving',
    excerpt:
      'How to choose a piece that will be worn, not stored — and how to wrap it like it matters.',
    image: '1515562141207-7a88fb7ce338',
    readTime: '3 min read',
    body: [
      'The best jewellery gifts are the ones that fit the life already being lived. Notice what she reaches for: small studs, one signature chain, a ring she never removes. Buy within that vocabulary rather than against it.',
      'If you are unsure of size, choose a necklace or earring over a ring — and take advantage of our complimentary resizing and exchange window.',
      'Presentation matters. Every order leaves the atelier in a lacquered case with a silk ribbon and a handwritten card in your words. If you would like the card written by our calligrapher, add a note at checkout.',
    ],
  },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export const getProduct = (id) => products.find((p) => p.id === id)

export const featuredProducts = products.filter((p) => p.badge === 'Bestseller').slice(0, 8)
