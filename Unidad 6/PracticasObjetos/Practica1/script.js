class Rectangle {
    constructor(width, height){
        width<=0? this.width=1: this.width=width,
        height<=0? this.height=1 : this.height=height
    }

    changeDimensions(newWidth, newHeight){
        this.width=newWidth,
        this.height=newHeight
    }

    calcArea(){
        return this.width * this.height;
    }

    copy(){
        return this;
    }

    compare(rectangle){       
        let area=this.calcArea();
        let areaRectangle=rectangle.calcArea();

        if(area == areaRectangle) return 'Las áreas son iguales' 
        else if (area > areaRectangle) return 'El área actual es mayor' 
        else if (area > areaRectangle) return 'El area actual es menor'
    }

}

let object = new Rectangle (10, 0);
let object2 = new Rectangle (0, 12);
document.getElementById('rectangleProperties').innerHTML=
    'Rectangulo 1 ancho: ' + object.width + ' y alto: '+object.height+ '<br>'+
    'Rectangulo 2 ancho: '+object2.width + ' y alto: '+object2.height;

object.changeDimensions(4, 5);
document.getElementById('rectangleChangeProperties').textContent=
    'Rectangulo ancho: ' + object.width + ' y alto: '+object.height;

let area = object.calcArea();
document.getElementById('rectangleCalcArea').textContent=
    'Area del rectangulo: '+area;

let newObject = object2.copy();
document.getElementById('rectangleCopy').textContent=
    'Rectangulo copiado, ancho: '+ newObject.width + ' y alto: '+newObject.height;


document.getElementById('rectangleCompare').textContent=object.compare(newObject);
