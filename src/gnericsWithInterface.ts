

interface Developer <T, X=null> {
    name: string;
    salary: number;
    devices:{
        brand: string;
        model: string;
        releaseYear: string;
    }
    smartWatch: T,
    bike?:X
}

interface BrandCharaWatch {
   heartRate: string;
    stopWatch: boolean;
}

interface AppleWatch {
   heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeatures: boolean;
}

const poorDeveloper :Developer <BrandCharaWatch,{
    brand:"Yamaha",
    model:"FZ",
    releaseYear:"2010"
}> = {
    name: "John Doe",
    salary: 30000,
    devices:{
        brand: "Dell",
        model: "XPS 13",
        releaseYear: "2020"     
    },
    smartWatch:{
        heartRate: "90 bpm",
        stopWatch: false
    }
}
const richDeveloper :Developer<AppleWatch> = {
    name: "John Doe",
    salary: 90000,
    devices:{
        brand: "HP",
        model: "X34",
        releaseYear: "2025"     
    },
    smartWatch:{
        heartRate: "90 bpm",
        callSupport: true,
    calculator: true,
    aiFeatures: true,
    },
    bike: null
}