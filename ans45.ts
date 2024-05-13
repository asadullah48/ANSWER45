function manufacturingCar(manufacturer: string, model: string,...options:[string,any][]): object{
    let car = {manufacturer, model};
    options.forEach(([key, value]) => car [key] = value);
    return car;
}
console.log(manufacturingCar("Toyota","Cross",["Year", "2024"],["color", "black"]));