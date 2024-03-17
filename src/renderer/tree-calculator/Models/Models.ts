interface MultiplierDetails {
    readonly id: number
    readonly multiplier: number
    readonly label: string
}

const availableTreeMultipliers: MultiplierDetails[] = [
    { id: 0, multiplier: 2, label: "Melnalksnis, Parastā egle, Parastā goba, Parastā (ogu), Parastā kļava, Parastā liepa, Parastais osis, Parastais ozols, Parastā priede, Parastais skābardis, Parastā vīksna" },
    { id: 1, multiplier: 1, label: "Āra bērzs (kārpainais bērzs), Purva bērzs (pūkainais bērzs), Parastais pīlādzis, Parastā ieva, Parastais kadiķis" },
    { id: 2, multiplier: 0.8, label: "Baltalksnis, Baltais vītols, Blīgzna, Hibrīdais alksnis, Ošlapu kļava, Papele, Parastā apse, Šķetra, Rietumu tūja, Trauslais vītols" }
]

const availableTreeCuttingReasons: MultiplierDetails[] = [
    { id: 0, multiplier: 0.1, label: "Bojā ēku, inženierkomunikācijas vai traucē to darbību" },
    { id: 1, multiplier: 0.8, label: "Apstādījumu atjaunošana, teritorijas izgaismošana (izsauļošana), apstādījumu kopšana" },
    { id: 2, multiplier: 1.5, label: "Būvniecība" },
    { id: 3, multiplier: 1, label: "Cits iemesls" }
]

const availableCitiesMultipliers: MultiplierDetails[] = [
    { id: 0, multiplier: 2.5, label: "Rīga" },
    { id: 1, multiplier: 2, label: "Pārējās republikas pilsētas (Daugavpils, Jēkabpils, Jelgava, Jūrmala, Liepāja, Rēzekne, Valmiera, Ventspils)" },
    { id: 2, multiplier: 0.8, label: "Pārējās pilsētas" },
    { id: 3, multiplier: 0.5, label: "Ciemi" }
]

const availableLocationMultipliers: MultiplierDetails[] = [
    { id: 0, multiplier: 2, label: "Pilsētas centrs, vecpilsēta" },
    { id: 1, multiplier: 1, label: "Īpaši aizsargājama dabas teritorija, izņemot īpaši aizsargājamās dabas teritorijas neitrālo zonu" },
    { id: 2, multiplier: 0.8, label: "Pārējā pilsētas daļa; īpaši aizsargājamās dabas teritorijas neitrālā zona" }
]

class TreeDetails {
    static nextId: number = 1

    readonly id: number
    diameter: number
    count: number
    multiplier: MultiplierDetails

    constructor(id: number, diameter: number, count: number, multiplier: MultiplierDetails) {
        this.id = id
        this.diameter = diameter
        this.count = count
        this.multiplier = multiplier
    }

    static createDefault(): TreeDetails {
        return new TreeDetails(TreeDetails.nextId++, 0, 1, availableTreeMultipliers[0])
    }
}

export { type MultiplierDetails, TreeDetails, availableTreeMultipliers, availableTreeCuttingReasons, availableCitiesMultipliers, availableLocationMultipliers }