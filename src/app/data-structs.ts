import { SignInformation, SignLookup, PlanetInterpretations } from "./models/glossary";

export class Planet {
    public name: string; // Sun
    public degrees: string;
    public sign: string; // GEMINI
    public showDetails: boolean; // hides or shows the description in the planet summary page
    public planetDescription: string; // a string describing the planet
    public signInfo: SignInformation;

    public fromJSON( json: any ): Planet {
        if (!json || !json.name || !json.degrees || !json.sign) {
            console.error("Bad JSON for planet");
        }
        this.name = json.name;
        this.degrees = json.degrees;
        this.sign = json.sign;
        this.init();
        return this;
    }

    public init() {
        this.showDetails = false;
        this.signInfo = SignLookup[this.sign.toLowerCase()];
        this.planetDescription = PlanetInterpretations[this.name.toLowerCase()];
    }
}