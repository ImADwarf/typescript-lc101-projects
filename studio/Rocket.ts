import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        for(let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
        // let add: boolean;
        // for(let i: number = 0; i < Cargo.length; i++) {
        //     if(this.canAdd(Cargo[i])) {
        //         this.cargoItems += Cargo[i];
        //         add = true;
        //     } else {
        //         add =false;
        //     }
        // }
        // return add;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;

    }

}