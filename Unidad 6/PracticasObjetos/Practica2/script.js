class Computer{
    constructor(brand, model, ram=4, capacity=512, inches=17){
        this.brand=brand,
        this.model=model,
        ram <= 0 || ram == undefined? this.ram=4: this.ram=ram,
        capacity <= 0 || capacity == undefined? this.capacity=512: this.capacity=capacity,
        inches <= 0 || inches == undefined? this.inches=17: this.inches=inches
    }

    toString(){
        return 'El ordenador es de marca '+this.brand+', modelo '+this.model+'.<br>'+
                'Tiene una ram de '+this.ram+'GB, con una capacidad de '+this.capacity+
                'GB en su disco duro. <br> La pantalla es de '+this.inches+' pulgadas.'
    }
}
class Laptop extends Computer{
    constructor(brand, model,  autonomia=4, ram=4, capacity=512, inches=17){
        super(brand, model, ram=4, capacity=512, inches=17)
        autonomia <= 0 || autonomia == undefined? this.autonomia=4: this.autonomia=autonomia
    }

    toString(){
        return super.toString() + ' Con una autonomía de '+this.autonomia+' horas.'
    }
}

let pc = new Computer('HP', 'Spectre x360', 16, undefined , 13.3);
let laptop = new Laptop('Lenovo', 'ThinkPad X13 Gen2', 14.5, undefined, undefined);

document.getElementById('computer').innerHTML = pc.toString();
document.getElementById('laptop').innerHTML = laptop.toString();