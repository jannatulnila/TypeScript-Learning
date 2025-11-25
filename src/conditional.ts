// conditional type: je type conditional er upor dependent

type A = null;
type B = undefined;

type C = A extends number ? true :B extends undefined ? true :false;length
type RichPeoplesVehicle = {
    bike: string;
    car:string;
    ship:string
}

type CheckVehicle <T>= T extends keyof RichPeoplesVehicle ? true : false

type HasBike = CheckVehicle<"train">