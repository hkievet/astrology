export interface SignInformation {
  name: string;
  flow: string;
  element: string;
}

const ElementType = {
  Air: "air",
  Fire: "fire",
  Water: "water",
  Earth: "earth",
}

const FlowType = {
  Cardinal: "cardinal",
  Fixed: "fixed",
  Mutable: "mutable",
}

const ARIES: SignInformation = {
    name: "airies",
    flow: FlowType.Cardinal,
    element: ElementType.Fire,
}

const TAURUS: SignInformation = {
    name: "taurus",
    flow: FlowType.Fixed,
    element: ElementType.Earth,
}

const GEMINI: SignInformation = {
    name: "gemini",
    flow: FlowType.Mutable,
    element: ElementType.Air,
}
const CANCER: SignInformation = {
    name: "cancer",
    flow: FlowType.Cardinal,
    element: ElementType.Water,
}
const LEO: SignInformation = {
    name:  "leo",
    flow: FlowType.Fixed,
    element: ElementType.Fire,
}
const VIRGO: SignInformation = {
    name: "virgo",
    flow: FlowType.Mutable,
    element: ElementType.Earth,
}
const LIBRA: SignInformation = {
    name: "libra",
    flow: FlowType.Cardinal,
    element: ElementType.Air,
}
const SCORPIO: SignInformation = {
    name: "scorpio",
    flow: FlowType.Fixed,
    element: ElementType.Water,
}
const SAGITTARIUS: SignInformation = {
    name: "sagittarius",
    flow: FlowType.Mutable,
    element: ElementType.Fire,
}
const CAPRICORN: SignInformation = {
    name: "capricorn",
    flow: FlowType.Cardinal,
    element: ElementType.Earth,
}
const AQUARIUS: SignInformation = {
    name: "aquarius",
    flow: FlowType.Fixed,
    element: ElementType.Air,
}
const PISCES: SignInformation = {
    name: "pisces",
    flow: FlowType.Mutable,
    element: ElementType.Water,
}

export const SignList: SignInformation[] = [ ARIES, TAURUS, GEMINI, CANCER, LEO, VIRGO, LIBRA, SCORPIO, SAGITTARIUS, CAPRICORN, AQUARIUS, PISCES ];

export const SignLookup: { [key: string] : SignInformation} = {
  "aries": ARIES,
  "taurus": TAURUS,
  "gemini": GEMINI,
  "cancer": CANCER,
  "leo": LEO,
  "virgo": VIRGO,
  "libra": LIBRA,
  "scorpio": SCORPIO,
  "sagittarius": SAGITTARIUS,
  "capricorn": CAPRICORN,
  "aquarius": AQUARIUS,
  "pisces": PISCES,
}

// ----------------------------------------------------------PLANETS ----------------------------------------------------------

// Descriptions are from wikipedia (https://en.wikipedia.org/wiki/Planets_in_astrology)
export const PlanetInterpretations = {
  'sun': "The sun represents our conscious mind. Rules the Self, and our will to live and creative life force. Sun is our soul.",
  'moon': "The moon represents our unconscious mind, our deepest personal needs, and our basic habits and reactions. The Moon mirrors other's moods just as it reflects light from the Sun.",
  'mercury': "Mercury represents intelligence, wit, and communication.",
  'venus': 'Venus represents emotions, romance, marriage, and sexual desire.',
  'mars': 'Mars represents work and enthusiasm. He is a builder, and is dynamic and mobile. He also makes one aggressive, impatient, and hot-tempered.',
  'jupiter': 'Jupiter represents associated with grand ideas, seeing the lines far into the future. He brings luck and good fortune.',
  'saturn': 'Saturn represents ambition, status, equitable punishment, wisdom, patience, honor, toughness, but with pessimism, hardships, and fatalism.',
  'uranus': 'Uranus represents originality, eccentricity, and sudden changes.',
  'neptune': 'Neptune represents dreams, illusions, and psychic receptivity, but sometimes with vagueness and uncertainty as well.',
  'pluto': 'Pluto represents the subconscious forces, ruling all that is below the surface.',
}
